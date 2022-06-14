import ChefCards from "./ChefCards";

const chefs = () => {
   const chefs = [
      {
         name: "Juan Carlos",
         img: "/images/chef1.jpg",
         recipes: "10",
         cuisine: "Mexican",
      },
      {
         name: "John Doe",
         img: "/images/chef2.jpg",
         recipes: "05",
         cuisine: "Japanese",
      },
      {
         name: "Erich Maria",
         img: "/images/chef3.jpg",
         recipes: "13",
         cuisine: "Italian",
      },
      {
         name: "Chris Brown",
         img: "/images/chef4.jpg",
         recipes: "03",
         cuisine: "American",
      },
      {
         name: "Blake Lively",
         img: "/images/chef5.jpg",
         recipes: "09",
         cuisine: "French",
      },
      {
         name: "Ben Affleck",
         img: "/images/chef6.jpg",
         recipes: "04",
         cuisine: "Indian",
      },
   ];
   return (
      <div className="section chefs">
         <h1 className="title">Our Top Cheifs</h1>
         <div className="chefs-container">
            {chefs.map(chef => (
               <ChefCards keys={chef.name} chef={chef} />
            ))}
         </div>
      </div>
   );
};

export default chefs;
