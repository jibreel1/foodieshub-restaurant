import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe }) => {
   return (
      <div className="recipe-card">
         <CustomImage imgSrc={recipe.img} pt="65%" />
         <div className="recipe-card-info">
            <img className="author-img" src={recipe.authorImg} alt="" />
            <p className="recipe-card-title">{recipe.title}</p>
            <p className="recipe-card-text">
               Lorem ipsum is simply dummy text of the printing and typesetting
               industry
            </p>
            <a className="recipe-card-link" href="#!">
               View Recipe
            </a>
         </div>
      </div>
   );
};

export default RecipeCard;
