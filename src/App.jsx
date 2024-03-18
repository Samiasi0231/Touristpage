import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/Index";
import Hero from "./Componets/Hero";
import Features from "./Componets/Features";
import About from "./Componets/About";
import Tour from "./Componets/Tour";
import Offer from "./Componets/Offer";
import Choose from "./Componets/choose";
import Service from "./Componets/Service";
import Team from "./Componets/Team";
import Faq from "./Componets/Faq";
import Testimonial from "./Componets/Testimonial";
import Blog from "./Componets/Blog";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";

const App = () => {
  const [myCount, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);
  return (
    <>
      <BrowserRouter>
        <HomePage myCount={myCount} />
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Offer />
        <Tour />
        <Choose />
        <Service />
        <Team />
        <Faq />
        <Testimonial />
        <Blog />
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
