import React from "react";
import leaf from "../../assets/inverted-leaf.png"
import Card from "../card/Card";

export default function InvertedRadiusComponent() {
  return (
    <>
    <div className="p-10 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          An Easier Way to be Sub and Find sub
        </h2>
        <img src={leaf} alt="leaf" />
        <p className="text-gray-700 mt-4 max-w-2xl">
          At SGLFS School, we focus on holistic education that blends academics
          with extracurricular activities. With a dedicated team of teachers, a
          safe learning environment, and modern facilities, we ensure that every
          child receives the best start to their academic journey.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <div className="border border-blue-900 p-6 rounded-lg shadow-lg relative">
          <p className="text-xl font-semibold text-red-700">
            Empowering Young Minds with Knowledge & Confidence
          </p>
          <p className="text-gray-600 mt-2">
            We don’t just focus on academics—we nurture critical thinking,
            creativity, and confidence in every student.
          </p>
          <div className="absolute bottom-0 right-0 bg-blue-900 text-white p-4 rounded-tl-lg">
            <span className="text-lg">➡</span>
          </div>
        </div> */}


        <Card />
        <Card />
        <Card />




      </div>
    </div>
  
    </>
  );
}
