import React from "react";
import leaf from "../../assets/inverted-leaf.png"
import Card from "../card/Card";

export default function InvertedRadiusComponent() {
  const colors = ["#872341", "#1B2D63", "#D87C26"];

  return (
    <>
    <div className="py-10 px-6  lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:max-w-screen-lg lg:mx-auto md:px-10">
      <div className="lg:w-[48%] flex items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 lg:w-[66%]">
          An Easier Way to be <br /> Sub and Find sub
        </h2>
        <img src={leaf} alt="leaf" className="hidden md:block  md:w-[80px] md:h-[60px] lg:w-[100px] lg:h-[90px]" />
      </div>
        <p className="text-gray-700 mt-4 font-semibold lg:w-[52%] text-justify">
          At SGLFS School, we focus on holistic education that blends academics
          with extracurricular activities. With a dedicated team of teachers, a
          safe learning environment, and modern facilities, we ensure that every
          child receives the best start to their academic journey.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        


      {colors.map((color, index) => (
          <Card key={index} textColor={`text-[${color}]`} />
        ))}
        





      </div>
    </div>
  
    </>
  );
}
