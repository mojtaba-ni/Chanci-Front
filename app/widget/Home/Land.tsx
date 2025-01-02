import Header from "@shared/ui/Header/header";
import Navbar from "@shared/ui/Navbar/navbar";
import React from "react";
import TopTalents from "./Slice/TopTalents/topTalents";

const Land = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TopTalents />
    </div>
  );
};

export default Land;
