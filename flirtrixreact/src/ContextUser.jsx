import { createContext, useState, useEffect } from 'react';
import { updateUserContextFromStorage } from "./BaseFunctions";

export const ContextUser = createContext();

export function ContextUser_Provider({ children }) {

    const [isUserInStorage, setIsUserInStorage] = useState(true);

    const [isUserExist, setIsUserExist] = useState();

    const [user, setUser] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        last_login: "",
        is_superuser: false,
        is_active: false,
    });

    useEffect(()=>{
        if (!isUserInStorage) {
            console.log("ContextUser useEffect(isUserInStorage): Storage'da user yok.");
            setIsUserExist(false);
        } else {
            console.log("ContextUser useEffect(isUserInStorage): Storage'da user mevcut.");
        }
    },[isUserInStorage])
    
    useEffect(()=>{
        console.log("ContextUser useEffect(user) user.username: ", user.username);
    },[user])
    
    useEffect(()=>{
        // getUser(setUser, setIsUserExist, setError, setIsErrorExist);
        console.log("ContextUser useEffect()");
        updateUserContextFromStorage(setUser, setIsUserExist, isUserInStorage, setIsUserInStorage);
    },[])

    return (
        <ContextUser.Provider value={{ isUserExist, setIsUserExist, user, setUser }}>
            {children}
        </ContextUser.Provider>
    );
};