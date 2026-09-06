import React from "react";
import icon from "../../../assets/location-merchant.png"
import bg from "../../../assets/be-a-merchant-bg.png"

const CustomerSatisfaction = () => {
  return (
    <div className=" relative">
      <img className="absolute hidden lg:block" src={bg} alt="" />
      <div className="bg-secondary flex flex-col-reverse lg:flex-row items-center p-10 rounded-xl">
        <div className="space-y-3.5">
          <h1 className="font-extrabold text-4xl text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-xs text-white">
            We offer the lowest delivery charge with the highest value along
            with <br /> 100% safety of your product. Pathao courier delivers
            your parcels in every <br /> corner of Bangladesh right on time.
          </p>
          <div className="space-x-4 flex sm:mt-2">
            <button className="font-bold text-sm py-1.5 px-4 rounded-xl bg-primary">
              Become a Merchant
            </button>
            <button className="font-bold text-sm text-primary py-1.5 px-4 rounded-xl border border-primary">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;