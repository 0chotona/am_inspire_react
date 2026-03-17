import { useState } from "react";
import Greeting from "../../components/rendering/Greeting";
import LogoutButton from "../../components/rendering/LogoutButton";
import LoginButton from "../../components/rendering/LoginButton";

const UserPage = () =>
{
    const [isFlag, setIsFlag] = useState(true);
    //UI
    return(
        <div>
            <Greeting flag={isFlag}/>
            {
                isFlag ? <LogoutButton isLogin={setIsFlag}/> : <LoginButton isLogin={setIsFlag}/>
            }
        </div>
    )
}

export default UserPage;