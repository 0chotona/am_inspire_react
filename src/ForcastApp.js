import {BrowserRouter, Routes, Route} from "react-router-dom"
import ForcastPage from "./features/forecast/ForcastPage";
import ForcastList from "./features/forecast/ForcastList";
import AiChatPage from "./features/forecast/AiChatPage";

// const DivTitle = styled.p`
//     font-size : 24px;
//     font-weight : bold;
//     text-align : center`;
const ForcastApp = () =>
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ForcastPage/>}/>
                <Route path="/list" element={ <ForcastList/>}/>
                <Route path="/ai" element={<AiChatPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default ForcastApp;