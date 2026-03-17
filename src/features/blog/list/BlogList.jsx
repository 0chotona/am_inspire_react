import styled from "styled-components";
import BlogItem from "../item/BlogItem";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 16px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const BlogList = ({blogs}) =>
{
    const moveUrl = useNavigate();
    return(
        <Wrapper>
            {
                blogs.map((blog, index) => { //헷갈림(드릴링)
                    
                    return(<BlogItem key={blog.id}
                                blog={blog}>

                    </BlogItem>
                    )
                })
            }
        </Wrapper>
    );
}

export default BlogList;