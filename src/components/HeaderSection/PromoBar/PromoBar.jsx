import React, { useContext } from "react";
import {PromoBarContent} from '../../../context/promoContext'
import Styles from "./PromoBar.module.css";

const PromoBar = () => {

  const promoContent = useContext(PromoBarContent)
  
  
  
  const {promoText} = promoContent
  const promoTextArray = Array.from({ length: 20 }, () => promoText);
  console.log(promoTextArray)


  return (
    <div className={Styles.promo_bar}>
      <div className={Styles.content}>
        {promoTextArray.map((text, idx) => {
          return <div className={Styles.text} key={idx}>{text}</div>;
        })}       
      </div>
    </div>
  );
};

export default PromoBar;