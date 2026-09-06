import React from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const FAQ = () => {
  return (
    <div className=" mt-24">
      <div className="text-center mb-5">
        <h1 className="font-extrabold text-4xl text-secondary">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-sm">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="space-y-4">
        <div
          className="collapse collapse-arrow bg-base-100
                  [&>input:checked~.collapse-title]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:text-[#606060]
                  [&>input:checked~.collapse-title]:border-b
                  [&>input:checked~.collapse-title]:border-gray-400
                  [&:has(input:checked)]:border
                  [&:has(input:checked)]:border-[#067A87]"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div
            className="collapse-title font-semibold group-has-[input:checked]:bg-[#067A87] 
                    group-has-[input:checked]:text-white"
          >
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100
                  [&>input:checked~.collapse-title]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:text-[#606060]
                  [&>input:checked~.collapse-title]:border-b
                  [&>input:checked~.collapse-title]:border-gray-400
                  [&:has(input:checked)]:border
                  [&:has(input:checked)]:border-[#067A87]"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?{" "}
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100
                  [&>input:checked~.collapse-title]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:text-[#606060]
                  [&>input:checked~.collapse-title]:border-b
                  [&>input:checked~.collapse-title]:border-gray-400
                  [&:has(input:checked)]:border
                  [&:has(input:checked)]:border-[#067A87]"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100
                  [&>input:checked~.collapse-title]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:text-[#606060]
                  [&>input:checked~.collapse-title]:border-b
                  [&>input:checked~.collapse-title]:border-gray-400
                  [&:has(input:checked)]:border
                  [&:has(input:checked)]:border-[#067A87]"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100
                  [&>input:checked~.collapse-title]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:bg-[#C3DFE2]
                  [&>input:checked~.collapse-content]:text-[#606060]
                  [&>input:checked~.collapse-title]:border-b
                  [&>input:checked~.collapse-title]:border-gray-400
                  [&:has(input:checked)]:border
                  [&:has(input:checked)]:border-[#067A87]"
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-4">
        <button className="font-bold text-2xl bg-primary px-3 py-3 rounded-xl hover:pointer">
          See More FAQ’s
        </button>
        <IoArrowUpCircleSharp className="text-5xl rotate-45 rounded-full bg-primary"/>
      </div>
    </div>
  );
};

export default FAQ;