import { createContext, useState } from "react";

export const ContactDetailsContext = createContext();

export const ContactDetailsContextProvider = ({ children }) => {
  const [contactDetails, setContactDetails] = useState(
    {
      email: "example@gmail.com",
      phone: "+92-300-1234567"
    }

  );

  return (
    <ContactDetailsContext.Provider value={{ contactDetails, setContactDetails }}>
      {children}
    </ContactDetailsContext.Provider>
  );
};