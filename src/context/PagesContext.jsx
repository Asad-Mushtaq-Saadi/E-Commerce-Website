import { createContext, useState } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [pages, setPages] = useState([
    { id: 1, pageName: "Home" },
    { id: 2, pageName: "About Us" },
    { id: 3, pageName: "Contact Us" },
    { id: 4, pageName: "Privacy Policy" },
    { id: 5, pageName: "Terms & Conditions" }
  ]);

  return (
    <PagesContext.Provider value={{ pages, setPages }}>
      {children}
    </PagesContext.Provider>
  );
};