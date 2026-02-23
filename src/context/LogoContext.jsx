import { createContext, useState } from "react";

export const LogoContext = createContext()

export const LogoProvider = ({ children }) => {
    const [logo, setlogo] = useState({
        name: "Zentrix",
        description: " We provide high-quality smart home and electronic solutions designed to make your life easier, safer, and more connected."
    });

    return <LogoContext.Provider value={{ logo, setlogo }}>
        {children}
    </LogoContext.Provider>


}