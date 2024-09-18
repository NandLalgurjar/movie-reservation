import React from "react";
import Headers from "./index/Header";
import Slider from "./index/Slider";
import Movies from "./index/Movies";
import ActionBox from "./index/ActionBox";
import TradingMovies from "./index/TradingMovies";
import Feedback from "./index/Feedback.jsx";
import Footer from "./index/Footer.jsx";

const Dashboard = () => {
  return (
    <>
      <Headers />
      <Slider />
      <Movies />
      <ActionBox />
      <TradingMovies />
      <Feedback />
      <Footer />
    </>
  )
};

export default Dashboard;
