import axios from "axios";
import { createContext, useState } from "react";


export let PhotosContext = createContext(0);

export default function PhotosContextProvider(props) {
    const [Photos, setPhotos] = useState([]);

    async function getPhotos() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(response?.data);
        console.log(response?.data);
        return response.data;   // ✅ كده هنرجع البيانات

        

    }
    return <PhotosContext.Provider value={{getPhotos ,  Photos}}>
        {props.children}
    </PhotosContext.Provider>
}