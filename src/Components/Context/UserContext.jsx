import axios from "axios";
import { createContext, useState } from "react";


export let UserContext = createContext(0);

export default function UserContextProvider(props) {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response?.data);
        console.log(response?.data);
        return response.data;   // ✅ كده هنرجع البيانات

        

    }
    return <UserContext.Provider value={{getUsers ,users}}>
        {props.children}
    </UserContext.Provider>
}