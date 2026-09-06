import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";

const data = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    images: img1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    images: img2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    images: img2,
  },
];

const Parcel = () => {
  return (
    <div>
      <div className="border-dashed border-t m-9"></div>
      {data.map((parcel, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center gap-9 bg-white space-y-4 shadow-sm m-5 p-4 rounded-xl"
        >
          <img src={parcel.images} alt="" />
          <div className="w-full h-0 border-t border-dashed  lg:w-0 lg:h-40 lg:border-l lg:border-t-0"></div>
          <div className="space-y-2.5">
            <h1 className="font-extrabold text-2xl text-secondary">
              {parcel.title}
            </h1>
            <p className="font-medium text-xs">{parcel.description}</p>
          </div>
        </div>
      ))}
      <div className=" border-b border-dashed m-9"></div>
    </div>
  );
};

export default Parcel;
