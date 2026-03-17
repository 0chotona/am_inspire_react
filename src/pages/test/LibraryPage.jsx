import Book from "../../components/test/Book";

const LibraryPage = (props) =>
{
    const msg = ".feat(with eun)";

    const books = 
    [
        { name : "A", price : "10,000" },
        { name : "B", price : "20,000" },
        { name : "C", price : "30,000" },
        { name : "D", price : "40,000" },
    ]
    return(
        <div>
            <div align="center">
                <font color="red">안녕하세요~~~~~~~~~~~~~~~ {msg}</font>
            </div>

            <hr />

            {
                books.map(book => {
                    return (
                    //<Book name = {book.name} price = {book.price} />
                    <Book data={book}/>
                    )
                })
            }
            <Book name="모던 리액트" price="30,000"/>
        </div>
        
    )
}

export default LibraryPage;