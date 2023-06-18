import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/scss/main.css";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Contact from "./components/Contact";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";
import ScrollTop from "./components/Utility/ScrollTop";
import Services from "./components/Services";
import Story from "./components/Story";
import ServiceDetail from "./components/ServiceDetail";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" exact element={<Index />}></Route>
        <Route path="/Portfolio" exact element={<Portfolio />}></Route>
        <Route path="/Services" exact element={<Services />}></Route>
        <Route path="/Blogs" exact element={<Blog />}></Route>
        <Route path="/BlogDetail" exact element={<BlogDetail />}></Route>
        <Route path="/PortfolioDetail" exact element={<PortfolioDetail />}></Route>
        <Route path="/Contact" exact element={<Contact />}></Route>
        <Route path="/About" exact element={<About />}></Route>
        <Route path="/Story" exact element={<Story />}></Route>
        <Route path="/ServiceDetail" exact element={<ServiceDetail />}></Route>
        <Route path="/Shop" exact element={<Shop />}></Route>
        <Route path="/ShopDetail" exact element={<ShopDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
