import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

const EventPage = () =>
{
    const handler = (id, password) =>
    {
        console.log("handler call >>>", id, password);

        //axios.post({ id:id, password:password });
    }
    const idHandler = (e) =>
    {
        setId(e.target.value);
    }
    const passwordHandler = (e) =>
    {
        setPassword(e.target.value);
    }
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    /*
    (e) => idHandler(e)
    ==
    function(e)
    {
        idHandler(e);
    }
    */
    return(
        <div>
            <div>
                <label>아이디</label>
                <input type="text"
                        value={id}
                        onChange={(e) => idHandler(e)}
                        placeholder="아이디를 입력하세요"/>
                
                        
            </div>
            <div>
                <label>패스워드</label>
                <input type="text"
                        value={password}
                        onChange={(e) => passwordHandler(e)}
                        placeholder="비밀번호를 입력하세요"/>
            </div>
            <Button variant="dark" onClick={() => handler(id, password)}>
                login
            </Button>
        </div>
    )
}

export default EventPage;