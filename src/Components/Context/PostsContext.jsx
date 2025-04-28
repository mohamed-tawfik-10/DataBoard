import axios from "axios";
import { createContext, useState } from "react";


export let PostsContext = createContext(0);

export default function PostsContextProvider(props) {
    const [Posts, setPosts] = useState([]);

    async function getPosts() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response?.data);
        console.log(response);
        return response.data;   // ✅ كده هنرجع البيانات

        

    }
    return <PostsContext.Provider value={{getPosts ,Posts}}>
        {props.children}
    </PostsContext.Provider>
}