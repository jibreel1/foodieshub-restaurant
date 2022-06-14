import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

const App = () => {
   return (
      <Router>
         <NavBar />
         <div className="container main">
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/recipes" element={<Recipes />}></Route>
               <Route path="/settings" element={<Settings />}></Route>
            </Routes>
         </div>
         <Footer />
      </Router>
   );
};

export default App;
