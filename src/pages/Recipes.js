import PreviousSearchRecipe from "../components/PreviousSearchRecipe";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
   const recipeCard = [
      {
         title: "Chicken Pan Pizza",
         img: "/images/img_1.jpg",
         authorImg: "/images/chef1.jpg",
      },
      {
         title: "Spaghetti and Meatballs",
         img: "/images/img_4.jpg",
         authorImg: "/images/chef2.jpg",
      },
      {
         title: "American Cheese Burger",
         img: "/images/img_5.jpg",
         authorImg: "/images/chef3.jpg",
      },
      {
         title: "Mutton Biriyani",
         img: "/images/img_6.jpg",
         authorImg: "/images/chef5.jpg",
      },
      {
         title: "Japanese Sushi",
         img: "/images/img_7.jpg",
         authorImg: "/images/chef6.jpg",
      },
      {
         title: "American Cheese Burger",
         img: "/images/img_5.jpg",
         authorImg: "/images/chef3.jpg",
      },
      {
         title: "Mutton Biriyani",
         img: "/images/img_6.jpg",
         authorImg: "/images/chef5.jpg",
      },
   ].sort(() => Math.random() - 0.5);
   return (
      <div className="recipe">
         <PreviousSearchRecipe />
         <div className="recipe-container">
            {recipeCard.map((recipe, index) => (
               <RecipeCard key={index} recipe={recipe} />
            ))}
         </div>
      </div>
   );
};

export default Recipes;
