import React from "react";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./categories-list.styles";

type categoriesProps = {
  categories: { id: number; title: string; imageUrl: string }[];
};

const categories: { id: number; title: string; imageUrl: string }[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoriesList = () => {
  return (
    <CategoriesContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesList;
