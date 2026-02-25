import React, { useContext, useState } from 'react'
import Styles from './Categories.module.css'
import { MdOutlineMenu } from "react-icons/md";
import SideBar from '../../HeaderSection/SideBar/SideBar';
import { CategoriesContext } from '../../../context/CategoriesContext';

const Categories = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { categories } = useContext(CategoriesContext);

  return (
    <>
      <div className={Styles.categoriesParent}>
        {categories.map((item) => (
          <p key={item.id}>{item.categoryName}</p>
        ))}
        <MdOutlineMenu
          className={Styles.icon}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* ✅ Pass full array */}
      <SideBar
        categories={categories}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Categories;