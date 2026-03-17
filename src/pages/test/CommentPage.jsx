//import "../../styles/comment.css"; //css는 스크립트가 아니기 때문에 .css를 생략 불가
import Comment from "../../components/test/Comment"

const CommentPage = () =>
{
    //변수선언, 통신, UI(html), 이벤트 처리

    const comments =
    [
        {
            name : "은종혁",
            comment : "리액트 처음인데 재미있어요"
        },
        {
            name : "임지혜",
            comment : "리액트가 뭐더라"
        },
        {
            name : "이주행",
            comment : "리액트가 뭔가요"
        }
    ]
    return(
        // <div className="wrapper">
        //     <div>
        //         <img    style={styles.image}
        //                 src="../../img/Portrait_Placeholder.jpg"></img>
        //     </div>
        //     <div style={styles.content}>
        //         <span style={styles.name}>은종혁</span>
        //         <span style={styles.comment}>처음 배우는 리액트</span>
        //     </div>
        <div>
        {
            comments.map(comment => 
            {
                return(
                    <Comment data = {comment}></Comment>
                )
            })
            // comments.forEach(comment => {
            //   <Comment data = {comment}></Comment>  
            // })
        }
        </div>
    )
}

export default CommentPage;