import { createContext, useState } from "react";

export const CategoriesContext = createContext()

export const CategoriesProvider = ({children}) =>{
   const [categories, setcategories] = useState([
          { id: 1, categoryName: "Wifi" },
          { id: 2, categoryName: "Zigbee" },
          { id: 3, categoryName: "Gateway" },
          { id: 4, categoryName: "Home Essentials" },
          { id: 5, categoryName: "Accessories" }
      ]);

      return <CategoriesContext.Provider value={{categories, setcategories}}>
        {children}
      </CategoriesContext.Provider>


}