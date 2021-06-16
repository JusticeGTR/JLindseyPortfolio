import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

function Home() {
  return (
      <>
    <Header/>
    <Navbar/>
    <div className="container">
    <AboutMe/>
    <Work/>
    <Contact/>
    <Resume/>
    <Footer/>
    </div>
    </>
  );
};

export default Home;