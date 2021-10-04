import React from "react";
import Course from "../Course/Course";
import Footer from "../Footer/Footer";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-success m-5">Our Available crouse </h1>
       <Course/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
