import React, { useContext, useState } from 'react'
import Styles from './Categories.module.css'
import { MdOutlineMenu } from "react-icons/md";
import SideBar from '../../HeaderSection/SideBar/SideBar';
import { CategoriesContext } from '../../../context/CategoriesContext';
import selectedCategory from '../../../services/selectedCategory'
import { Link } from 'react-router-dom';

const Categories = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const { categories } = useContext(CategoriesContext);

  const handleCategoryClick = (categoryName) => {
    selectedCategory.setCategory(categoryName);
    setActiveCategory(categoryName); 
    setIsOpen(false); // Close sidebar after category click
  };

  return (
    <>
      <div className={Styles.categoriesParent}>
        {categories.map((item) => (
          <Link 
            className={Styles.category}
            to={'/product-list'}
            key={item.id}
            onClick={() => {
    handleCategoryClick(item.categoryName);
     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}}
          >
            {item.categoryName}
          </Link>
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
        onCategoryClick={handleCategoryClick} // Pass the function to SideBar
      />
    </>
  );
};

export default Categories;