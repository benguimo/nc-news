import { createContext, useState } from "react";

export const UserContext = createContext()
export const UserProvider = (props)=>{
    const [username, setUsername] = useState("cooljmessy");
    return (
        <UserContext.Provider value={{username, setUsername}}>
            {props.children}
        </UserContext.Provider>
    );

};