import { createContext, useState } from "react";

export const PromoBarContent = createContext()

export const PromoBarContentProvider = ({children}) =>{

    const [promoText, setPromoText] = useState("Free Shipping All Over Pakistan");
    

    return(
        <PromoBarContent.Provider value={{promoText, setPromoText}} >
            {children}
        </PromoBarContent.Provider>
    )



} 