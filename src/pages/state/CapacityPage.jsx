import Button from "../../components/ui/Button"
import { useState, useEffect } from "react"; //가장 많이 사용하는 훅 2개
/*
Quiz)
- 입장인원이 있고
- 증가 버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원을 증가시키고
- 해당 인원이 꽉 차면 입장 버튼을 비활성화시키고
- 감소버튼의 이벤트를 통해서 버튼이 클릭될 때마다 인원을 감소시키고
- 입장버튼을 활성화

- reactive state 상태를 관리할 예정(증가 버튼 클릭시 입장 인원을 화면에 출력)

useEffect(이펙트 함수, []); -> Effect Function이 mount, unmount시에 단 한번씩만 실행
useEffect(이벤트 함수); -> Update될때마다 실행
*/
/*
const CapacityPage = () =>
{
    const capacity = 10;

    const [cnt, setCnt] = useState(0);

    const upCountHandler = () =>
    {
        setCnt(cnt => cnt + 1);
    }
    const downCountHandler = () =>
    {
        setCnt(function (cnt) 
        {
            return cnt - 1;
        });
        
    }
    //side Effect
    // useEffect(function()
    // {
        
    // })
    
    useEffect(() =>
    {
        console.log("useEffect called >>>");
        console.log("cnt >>> ", cnt);
        
    }, [cnt]);

    return(
        <div>
            <p>입장 인원 : {cnt}</p>
            <Button title="입장" onClick={(e) => upCountHandler()} isFull={cnt >= capacity}></Button>
            <Button title="퇴장" onClick={(e) => downCountHandler()} isFull={cnt < 1}></Button>
        </div>
    )
}
*/
const CapacityPage = () =>
{
    const capacity = 10;

    const [cnt, setCnt] = useState(0);
    const [isFull, setFull] = useState(false);
    const [isEmpty, setEmpty] = useState(true);

    const upCountHandler = () =>
    {
        setCnt(cnt => cnt + 1);
    }
    const downCountHandler = () =>
    {
        setCnt(function (cnt) 
        {
            return cnt - 1;
        });
        
    }
    //side Effect
    // useEffect(function()
    // {
        
    // })
    
    useEffect(() =>
    {
        console.log("useEffect called >>>");
        console.log("cnt >>> ", cnt);
        setFull(cnt >= capacity);
        setEmpty(cnt < 1);
    }, [cnt]);

    return( //state 변경 -> 컴포넌트 함수 다시 실행 -> return 다시 평가 -> 화면 갱신 -> useEffect 실행
        <div>
            <p>입장 인원 : {cnt}</p>
            <Button title="입장" onClick={(e) => upCountHandler()} disabled={isFull}></Button>
            <Button title="퇴장" onClick={(e) => downCountHandler()} disabled={isEmpty}></Button>
            {
                isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p>
            }
        </div>
    )
}
export default CapacityPage;