import React, { useState } from "react";
import { NavLink } from "react-router";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");
  const data = [
    {
      id: "story",
      label: "Story",
      content:
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    },
    {
      id: "mission",
      label: "Mission",
      content:
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    },
    {
      id: "success",
      label: "Success",
      content:
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    },
    {
      id: "team",
      label: "Team & Others",
      content:
        "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    },
  ];

  return (
    <div className="mt-24 p-10 bg-white mx-6 mb-24 rounded-xl shadow-xl">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">About Us</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="flex gap-12 mt-24 mb-12">
        {data.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={
              activeTab === tab.id ? "font-extrabold text-[#5B6A2E]" : ""
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{data.find((tab) => tab.id === activeTab).content}</div>
      <br />
      <div>{data.find((tab) => tab.id === activeTab).content}</div>
      <br />
      <div>{data.find((tab) => tab.id === activeTab).content}</div>
    </div>
  );
};

export default AboutUs;
