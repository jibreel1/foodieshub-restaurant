import CustomImage from "./CustomImage";

const Hero = () => {
   const images = [
      "/images/img_1.jpg",
      "/images/img_2.jpg",
      "/images/img_3.jpg",
      "/images/img_4.jpg",
      "/images/img_5.jpg",
      "/images/img_6.jpg",
      "/images/img_7.jpg",
      "/images/img_8.jpg",
      "/images/img_9.jpg",
   ];
   return (
      <div className=" section hero">
         <div className="col hero-typo">
            <h1 className="title">What Are We About</h1>
            <p className="hero-text">
               FoodiesHub is a place where you can please your soul and tummy
               with delicious food recepies of all cuisine. And our service is
               absolutely free. So start exploring now.
            </p>
            <button className="btn">Explore Now</button>
         </div>
         <div className="col hero-gallery">
            {images.map((src, index) => (
               <CustomImage key={index} imgSrc={src} pt={"90%"} />
            ))}
         </div>
      </div>
   );
};

export default Hero;
