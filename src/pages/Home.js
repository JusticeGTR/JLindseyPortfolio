import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
// import Resume from "../components/Resume";
import Footer from "../components/Footer";


function Home() {
  return (
      <>
    <Navbar/>
    <Header/>
    <div className="content  m-5">
    <Work/>
    <About/> 
    <Contact/>
    <Footer/> 
    </div>
    </>
  );
};

export default Home;