import axios from "axios";
import { createContext, useState } from "react";


export let TodoContext = createContext(0);

export default function TodoContextProvider(props) {
    const [Todos, setTodos] = useState([]);

    async function getTodos() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response?.data);
        console.log(response?.data);
        return response.data;   // ✅ كده هنرجع البيانات

        

    }
    return <TodoContext.Provider value={{getTodos ,Todos}}>
        {props.children}
    </TodoContext.Provider>
}