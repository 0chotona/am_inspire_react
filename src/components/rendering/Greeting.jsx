import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
//(props) 대신 ({flag 사용 가능})
const Greeting = ({flag}) =>
{
    const isFlag = flag;
    // if(isFlag)
    // {
    //     return<UserGreeting/>
    // }
    // else
    // {
    //     return <GuestGreeting/>
    // }
    {
        return isFlag ? <UserGreeting/> : <GuestGreeting/>
    }
}

export default Greeting;