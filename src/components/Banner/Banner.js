import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6 mb-5">
            <h1 className="title">
            <span className='Scolor'> এসো </span>   <span className='Qcolor'> কোরআন </span> শিখি 
            </h1>
            <p className="text-white text-center m-4">
            কুরআন শব্দের অর্থ: পাঠ করা, যা পাঠ করা হয়। আর পরিভাষায়-আল্লাহ তা‘আলা জিবরাঈল আলাইহিস সালামের মাধ্যমে সুদীর্ঘ ২৩ বছরে মানব জাতির হেদায়াত হিসাবে রাসূলুল্লাহ সল্লাল্লাহু আলাইহি ওয়াসাল্লাম যে কিতাব অবতীর্ণ করেছেন তার নাম আলকুরআন।
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
