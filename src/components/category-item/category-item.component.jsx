import { useNavigate } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`./shop/${title}`);
  };
  return (
    <div onClick={handleNavigate} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
