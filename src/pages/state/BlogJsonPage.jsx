import api from "../../api/axios";
import { useState, useEffect } from "react";
const BlogJsonPage = () =>
{
    let data = [];
    console.log(">>> BlojJsonPage");

    const[ary, setAry] = useState([]);
    const getBlogs = async() =>
    {
        const response = await api.get("/blogs");
        console.log("reponse >>> ", response);
        

        setAry(response.data);
        console.log(ary);
        console.log(ary[0]?.title);
    }

    useEffect(() =>
    {
        getBlogs();
    }, [])
    return(
        <div>
            {`data - ${ary[0]?.title}`}
        </div>
    );
}

export default BlogJsonPage;