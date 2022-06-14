import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
   const location = useLocation();
   const [showSideBar, setShowsideBar] = useState(false);
   const links = [
      {
         name: "Home",
         path: "/",
         icon: faHome,
      },
      {
         name: "Recipes",
         path: "/recipes",
         icon: faList,
      },
      {
         name: "Settings",
         path: "/settings",
         icon: faCog,
      },
   ];

   const closeSideBar = () => {
      setShowsideBar(false);
   };

   return (
      <>
         <nav className="navbar container">
            <a href="/" className="navbar-logo">
               F<span>oo</span>diesHub
            </a>
            <div className="navbar-links">
               {links.map(link => (
                  <Link
                     className={location.pathname === link.path ? "active" : ""}
                     to={link.path}
                     key={link.name}
                  >
                     {link.name}
                  </Link>
               ))}
            </div>
            <div
               onClick={() => {
                  setShowsideBar(true);
               }}
               className={
                  showSideBar ? "navbar-hamburger active" : "navbar-hamburger"
               }
            >
               <span className="bar"></span>
               <span className="bar"></span>
               <span className="bar"></span>
            </div>
         </nav>
         {showSideBar && <SideBar close={closeSideBar} links={links} />}
      </>
   );
};

export default NavBar;
