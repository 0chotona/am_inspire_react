import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/ui/Button";
import BlogList from "../list/BlogList";
import { useEffect, useState } from "react";
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

const WelcomeMessage = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
`;

const LogoutButton = styled(Button)`
    background-color: #f44336;
    color: white;

    &:hover {
        background-color: #d32f2f;
    }
`;
const BlogIndex = () =>
{
    /*
        데이터 공유 방법
        - 부모와 자식 (props)
        - 화면 전환
        -- 임시적 (useNavigate - state)
        -- 지속적 (localStorage, SessionStorage)
    */
    const [arr, setArr] = useState([]);

    //token 정보 가져오기
    const email = localStorage.getItem("token");
    console.log(">>> BlogIndex token email : ", email);

    const at = localStorage.getItem("access_token");
    console.log(">>> BlogIndex token access : ", at);

    const moveUrl = useNavigate();
    const loadData = async() =>
    {
        try
        {
            const response = await api.get("/blogs/list", {
                headers: {Authorization: at ? at : ""}
            });
            console.log(">>> BlogIndex data ", response.data);
            
            setArr(response.data);
        }
        catch(err)
        {
            console.log(">>> BlogIndex event loadData err : ", err);
        }
    }
    const logoutHandler = async() => {
       console.log(">>> BlogIndexlogout click : ");
        try
        {   
            const response = await api.post("/users/logout", null, {
            headers : {Authorization : at ? at : ""}
            });
            // logout : 204
            localStorage.removeItem("token")
            localStorage.removeItem("acess-token");
            moveUrl("/")
        } catch(err)
        {
            console.log(">>> BlogIndex event logoutHandler err : ", err);
        }

        
    }
    useEffect(() => 
    {
        loadData();
    }, [])
    return(
        <Wrapper>
            <Container>
                {email && <WelcomeMessage>{email}님 환영합니다!</WelcomeMessage>}
                
                <Button title="글 작성하기" onClick={() =>
                    {
                        moveUrl("/blog/write")
                    }
                }/>
                &nbsp;&nbsp;&nbsp;
                <Button title="로그아웃" onClick={logoutHandler}/>
                <BlogList blogs={arr}/>
            </Container>
        </Wrapper>
    )
    
}

export default BlogIndex;