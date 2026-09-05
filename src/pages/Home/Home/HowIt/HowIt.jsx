import React from "react";
import img from "../../../../assets/bookingIcon.png";

const HowIt = () => {
  const data = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl ml-8 mb-9">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 items-center justify-center place-items-center">
        {data.map((item) => (
          <div key={item.id}>
            <div className="bg-white rounded-xl space-y-3 shadow-2xl p-5 h-64 w-72">
              <img src={img} alt="" />
              <h2 className="font-bold text-2xl text-[#03373D]">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowIt;