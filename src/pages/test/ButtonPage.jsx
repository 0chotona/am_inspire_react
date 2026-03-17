import Button from "../../components/ui/Button";

const ButtonPage = () =>
{
    const saveHandler = () =>
    {
        console.log("saveHandler Call >>>");
    }
    const listHandler = () =>
    {
        console.log("listHandler Call >>>");
    }
    return(
        <div>
            <Button title = "글 작성하기" onClick={(e) => saveHandler()}/>
            <Button title = "목록보기" onClick={(e) => listHandler()}/>
        </div>
        
    )
}

export default ButtonPage;