import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./categories-list.styles.scss";

type categoriesProps = {
  categories:{id:number, title:string,imageUrl:string}[]
}

const CategoriesList = ({categories}:categoriesProps) => {
  
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoriesList;
