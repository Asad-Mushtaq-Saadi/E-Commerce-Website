import React, { useContext, useState } from 'react'
import Styles from './Categories.module.css'
import { MdOutlineMenu } from "react-icons/md";
import SideBar from '../../HeaderSection/SideBar/SideBar';
import { CategoriesContext } from '../../../context/CategoriesContext';
import selectedCategory from '../../../services/selectedCategory'

const Categories = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const { categories } = useContext(CategoriesContext);

  const handleCategoryClick = (categoryName) => {
    selectedCategory.setCategory(categoryName);
    setActiveCategory(categoryName); 
  };

  

  return (
    <>
      <div className={Styles.categoriesParent}>
        {categories.map((item) => (
          <p 
            key={item.id}
            onClick={() => handleCategoryClick(item.categoryName)}
            
          >
            {item.categoryName}
          </p>
        ))}
        <MdOutlineMenu
          className={Styles.icon}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <SideBar
        categories={categories}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onCategoryClick={handleCategoryClick}
      />
    </>
  );
};

export default Categories;