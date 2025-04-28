import axios from "axios";
import { createContext, useState } from "react";


export let AlbumsContext = createContext(0);

export default function AlbumsContextProvider(props) {
    const [Albums, setAlbums] = useState([]);

    async function getAlbums() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setAlbums(response?.data);
        console.log(response?.data);
        return response.data;   // ✅ كده هنرجع البيانات

        

    }
    return <AlbumsContext.Provider value={{getAlbums ,Albums}}>
        {props.children}
    </AlbumsContext.Provider>
}