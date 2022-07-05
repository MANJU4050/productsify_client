import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [accessToken, setAccessToken] = useState({});
    const [products, setProducts] = useState([])
    return (
        <GlobalContext.Provider value={{
            user,
            setUser,
            products,
            setProducts,
            accessToken,
            setAccessToken
        }}>
            {children}
        </GlobalContext.Provider>
    )


}

export default GlobalContext; 