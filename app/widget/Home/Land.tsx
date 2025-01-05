import Navbar from "@shared/ui/Navbar/navbar";
import React from "react";
import TopTalents from "./Slice/TopTalents/topTalents";
import AboutUs from "./Slice/AbouUs/aboutUs";
import Footer from "@/shared/ui/Footer/footer";

const Land = () => {
  return (
    <div>
      <Navbar />
      <TopTalents />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Land;
