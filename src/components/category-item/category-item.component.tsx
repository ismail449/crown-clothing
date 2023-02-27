import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
} from "./category-item.styles";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`./shop/${title}`);
  };
  return (
    <CategoryContainer onClick={handleNavigate}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
