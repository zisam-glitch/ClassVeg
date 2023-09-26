import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <a href="/what-we-offer" >What We Offer</a>
        
      </li>
      <li className="dropdown">
        <a href="/about">About</a>

      </li>
      <li className="dropdown">
        <a href="/vacancies">Vacancies</a>
      </li>
      
      <Contact />
    </ul>
  );
};
export default MobileMenu;
