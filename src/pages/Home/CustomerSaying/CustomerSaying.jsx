import React from "react";
import image from "../../../assets/customer-top.png";

const CustomerSaying = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>
      <div className="text-center mt-10">
        <h1 className="font-extrabold text-4xl mb-6">
          What our customers are sayings
        </h1>
        <p className="text-sm">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
    </div>
  );
};

export default CustomerSaying;
