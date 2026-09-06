import React from "react";
import Banner from "../Banner/Banner";
import HowIt from "../HowIt/HowIt";
import OurService from "../OurService/OurService";
import Parcel from "../Parcel/Parcel";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import CustomerSaying from "../CustomerSaying/CustomerSaying";
import FAQ from "../FAQ/FAQ";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Banner />
      <HowIt />
      <OurService />
      <Brands/>
      <Parcel />
      <CustomerSatisfaction />
      <CustomerSaying />
      <Reviews/>
      <FAQ />
    </div>
  );
};

export default Home;
