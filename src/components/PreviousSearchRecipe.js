import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearchRecipe = () => {
   const searches = [
      "pizza",
      "burger",
      "cookies",
      "juice",
      "biriyani",
      "salad",
      "ice cream",
      "lasagna",
      "pudding",
      "soup",
   ];
   return (
      <div className="recipe-search section">
         <h2 className="recipe-search-title">Previous Searches</h2>
         <div className="recipe-search-container">
            {searches.map((search, index) => (
               <div
                  key="index"
                  style={{ animationDelay: index * 0.2 + "s" }}
                  className="recipe-search-item"
               >
                  {search}
               </div>
            ))}
         </div>

         <div className="recipe-search-input">
            <input type="text" name="" id="" placeholder="Search" />
            <button className="btn recipe-search-btn">
               <FontAwesomeIcon icon={faSearch} />
            </button>
         </div>
      </div>
   );
};

export default PreviousSearchRecipe;
