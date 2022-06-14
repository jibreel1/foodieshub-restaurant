import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ChefCards = ({ chef }) => {
   return (
      <div className="chef-card">
         <img src={chef.img} alt="" />
         <div className="chef-card-info">
            <h3 className="chef-card-name">{chef.name}</h3>
            <p className="chef-card-recipe">
               Recipes: <b>{chef.recipes}</b>
            </p>
            <p className="chef-card-cuisines">
               Cuisine: <b>{chef.cuisine}</b>
            </p>
            <p className="chef-card-icons">
               <FontAwesomeIcon icon={faFacebook} />
               <FontAwesomeIcon icon={faTwitter} />
               <FontAwesomeIcon icon={faInstagram} />
            </p>
         </div>
      </div>
   );
};

export default ChefCards;
