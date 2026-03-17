import styled, { keyframes } from "styled-components";
import Button from "../../../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../../components/ui/TextInput";
import BlogCommentList from "../list/BlogCommentList";

import { useState, useEffect } from "react";
import api from "../../../api/axios";
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
  margin: 100px auto;
`;

const WelcomeMessage = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
`;

const BlogRead = () =>
{
    // url에서 전달되는 parameter를 전달 받을 수 있는 hook(useParams)
    const {blogId} = useParams();
    console.log(">>> blog read load event paras : ", blogId);
    
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const email = localStorage.getItem("token");

    const at = localStorage.getItem("access_token");
    console.log(">>> BlogIndex token access : ", at);
    
    const getBlog = async() => {
        //api get() 데이터를 가져온 후 해당 데이터를 state 상태로
        // queryString : http://ip.port/blog?dxxxxx ?뒤에 있는 값
        /*
            api.get(`/blog?id=${id}`)
            api.get(`/blog`, {
                params : {
                    id : id
                }
            })

            path variavle : http://ip.port/blog/xxxxx

            embed 이용해서 특정 블로그의 comments 함께 가져와 본다면?
            api.get(`blogs/${id}_embed=comments`)
        */
        //await api.get(`blogs/${id}`)
        await api.get(`blogs/read/${blogId}`, {
                headers: {Authorization: at ? at : ""}
            }) //embed가 뭔지 자세히
        .then((response) => {
            console.log(">>> BlogEvent event getBlog response", response);
            //setBlog(response.data);
            setBlog({
                id: response.data.blogId,
                title: response.data.title,
                content: response.data.content
            });
            setComments(response.data.comments || []);
        })
        .catch((err) => {
            console.log(">>> err : ", err);
        });
    };
    useEffect(() => {
        getBlog();
    }, []);
    const moveUrl = useNavigate();

    
    /*
        Quiz)
        전달받은 인자를 comment 등록하고
        메인페이지로 이동이 아닌
        현재 화면에서 comments 갱신해서 바로 렌더링되도록
    */
    //댓글 입력 핸들러
    const commentHandler = async(blogId, content) => {
        //console.log(">>> commentHandler", blogId, content);

        // Json Server Version
        // const id = Date.now();
        // await api.post("/comments",{
        //     id,
        //     content,
        //     blogId
        // })
        // .then((response) =>{
        //     console.log(">>> commentHandler response", response);
            
        //     if(response.status == 201)
        //     {
        //         const newComment = response.data;
        //         setComments((arr) => {
        //             return[...arr, newComment];
        //         })
        //         setComment("");

        //     }
        //     // 부분 리렌더링을 위한 기본패턴 (배열일 경우)
        //     // if(response.status == 201)
        //     // {
        //     //     const newComment = response.data[response.data.length - 1];
        //     //     setComments((arr) => {
        //     //         return[...arr, newComment];
        //     //     })
        //     //     setComment("");
        //     // }
        //     //setComment(""); 이렇게 하면 다 리렌더링된다고 하지 않?
        // })
        // .catch((err) => {
        //     console.log(">>> commentHandler err", err);

        // })
        
        const at = localStorage.getItem("access_token");
        await api.post("/blogs/comments/write",{
            content,
            blogId
        }, { headers: {Authorization: at ? at : ""} } )
        .then((response) =>{
            console.log(">>> commentHandler response", response);
            
            if(response.status == 201)
            {
                const newComment = response.data;
                setComments(response.data);
                setComment('');

            }
            
        })
        .catch((err) => {
            console.log(">>> commentHandler err", err);

        })
    }

    const commentDeleteHandler = async(commentId) => {
        console.log(">>> commentDeleteHandler id", commentId);
        
        await api.delete(`/comments/${commentId}`, { headers: {Authorization: at ? at : ""} })
        .then((response) => {
            console.log(">>> commentDeleteHandler response", response);
            if(response.status === 204)
            {
                setComments(comments.filter((c) => c.commentId !== commentId)); //filter 자세히
            }

            setComments(response.data);
            setComment("");
        })
        .catch((err) => {
            console.log(">>> commentDeleteHandler err", err);
        })
    }
    
    return(
        <Wrapper>

            {!blog.id && <Spinner/>}
            {blog.id &&
            <Container>
                {email && <WelcomeMessage>{email}님 환영합니다!</WelcomeMessage>}
                <Button title="메인페이지"
                        onClick={() => {
                            moveUrl("/blog/index");
                        }}/>

                <PostContainer>
                    <TitleText>{blog.title}</TitleText>
                    <ContentText>{blog.content}</ContentText>
                </PostContainer>

                {/* //블로그 댓글 설계} */}
                <CommentLabel>작성된 댓글</CommentLabel>
                <BlogCommentList comments={comments || []}
                                commentDeleteHandler={commentDeleteHandler}/>

                <TextInput height={15} 
                            value={comment}
                            changeHandler={(e) => {
                                setComment(e.target.value); //발동될때마다 commentItem 계속 발동(리렌더링 돼서)
                            }}/>
                <Button title="댓글 작성"
                        onClick={() => commentHandler(blog.id, comment)}/>
            </Container>
            }
        </Wrapper>
    )
}

export default BlogRead;