import Button from "../ui/Button";

const LogoutButton = (props) =>
{
    const logoutHandler = (setIsFlag) =>
    {
        console.log("logoutHandler click>>>", typeof(setIsFlag));
        setIsFlag(false)
    }
    return(
        <Button title="로그아웃"
            onClick={() => logoutHandler(props.isLogin)}/>
    )
}

export default LogoutButton;