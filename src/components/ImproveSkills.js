const ImproveSkills = () => {
   const list = [
      "Learn new recepies",
      "Experiment with food",
      "Write your own recepies",
      "Know nutrition facts",
      "Get cooking tips",
      "Get ranked",
   ];
   return (
      <div className=" section skills">
         <div className="col skills-image">
            <img src="/images/img_10.jpg" alt="" />
         </div>
         <div className="col skills-typo">
            <h1 className="title">Improve Your Culinary Skills</h1>
            {list.map((item, index) => (
               <p className="skills-item" key={index}>
                  {item}
               </p>
            ))}
            <button className="btn skills-btn">Signup Now</button>
         </div>
      </div>
   );
};

export default ImproveSkills;
