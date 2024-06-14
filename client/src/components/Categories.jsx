import { Link } from "react-router-dom";
import { categories } from "../data";
import "../styles/Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
      Explore our extensive range of meeting room reservations designed
       to accommodate all types of gatherings. Immerse yourself in productive sessions, 
       surrounded by a conducive environment. Elevate your meetings to new heights, 
       whether it's a brainstorming session or a crucial business presentation.
        Book your perfect meeting room today and make every gathering a success!      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img className="ARR" src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                
                
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
