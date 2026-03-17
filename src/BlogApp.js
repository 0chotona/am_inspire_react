import {BrowserRouter, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import SignUp from "./features/user/page/SignUp";
import SignIn from "./features/user/page/SignIn";
import BlogIndex from "./features/blog/page/BlogIndex";
import BlogWrite from "./features/blog/page/BlogWrite";
import BlogRead from "./features/blog/page/BlogRead";

const DivTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    text-align : center`;
const BlogApp = () =>
{
    return(
        <BrowserRouter>
            <DivTitle>
                AM Inspire Camp 4th Logo
            </DivTitle>
            <Routes>
                <Route path="/" element={ <SignUp/>}/>
                <Route path="/login" element={ <SignIn/>}/>
                
                <Route path="/blog/index" element={ <BlogIndex/>}/>
                <Route path="/blog/write" element={ <BlogWrite/>}/>
                <Route path="/blog/read/:blogId" element={ <BlogRead/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default BlogApp;