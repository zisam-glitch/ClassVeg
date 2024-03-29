import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/dairy-products">Dairy Products</Link>
    </li>
    <li>
      <Link href="/dry-goods">Dried Goods</Link>
    </li>
    <li>
      <Link href="/prepared-fresh-produce">Prepared Produce</Link>
    </li>
    <li>
      <Link href="/fresh-produce">Fresh Produce</Link>
    </li>
    <li className="bg-clr">
      <Link href="/what-we-offer">View All</Link>
    </li>
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
    <li className="dropdown">
      <a href="#">services</a>
      <ul>
        <li>
          <Link href="/services">all services</Link>
        </li>
        <li>
          <Link href="/service-details">service details</Link>
        </li>
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li>
      <Link href="/faqs">faqs</Link>
    </li>
    <li>
      <Link href="/farmers">Farmers</Link>
    </li>
    <li>
      <Link href="/404">404 error</Link>
    </li>
  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
    <li>
      <Link href="/services">all services</Link>
    </li>
    <li>
      <Link href="/service-details">service details</Link>
    </li>
    <li>
      <Link href="/faqs">faqs</Link>
    </li>
    <li>
      <Link href="/farmers">Farmers</Link>
    </li>
    <li>
      <Link href="/404">404 error</Link>
    </li>
  </Fragment>
);
export const Portfolio = () => (
  <Fragment>
    <li>
      <Link href="/portfolio-grid">Portfolio grid</Link>
    </li>
    <li>
      <Link href="/portfolio-fluid">Portfolio Fluid</Link>
    </li>
    <li>
      <Link href="/portfolio-details">Portfolio details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-grid">blog Grid</Link>
    </li>
    <li>
      <Link href="/blog-standard">blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">blog details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop-grid">shop Grid</Link>
    </li>
    <li>
      <Link href="/shop-left-sidebar">shop left sidebar</Link>
    </li>
    <li>
      <Link href="/shop-right-sidebar">shop right sidebar</Link>
    </li>
    <li>
      <Link href="/product-details">Product details</Link>
    </li>
    <li>
      <Link href="/cart">cart page</Link>
    </li>
    <li>
      <Link href="/checkout">checkout</Link>
    </li>
    <li>
      <Link href="/wishlist">wishlist</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
