import Button from "../ui/Button"
const LoginButton = (props) =>
{

    const loginHandler = (setIsFlag) =>
    {
        console.log("loginHandler click>>>", typeof(setIsFlag));
        setIsFlag(true)
    }
    return(
        <Button title="로그인" 
                onClick={() => loginHandler(props.isLogin)}></Button>
    )
}

export default LoginButton;