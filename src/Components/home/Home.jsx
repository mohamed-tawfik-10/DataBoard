import { useEffect } from "react"
import Information from "../Information/information";
import Users from "../Users/users";

export function Home() {

    useEffect(() => {
    }, []);



    return <>
        <div className="dark:bg-gray-800">

            <Information />
            <Users />
        </div>


    </>
}