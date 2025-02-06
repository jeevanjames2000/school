import React from "react";
import leaf from "../../assets/inverted-leaf.png";
import Card from "../card/Card";

export default function InvertedRadiusComponent() {
  const data = [
    { id: 1, title: "Empowering Young Minds with Knowledge & Confidence", desc: "We don’t just focus on academics—we nurture critical thinking, creativity, and confidence in every student.", color: "text-[#872341]" },
    { id: 2, title: "A better way to connect students and teachers", desc: "We believe that effective learning happens when students and teachers are well-connected.", color: "text-[#1B2D63]" },
    { id: 3, title: "Student learning stays on track to meet their academic goals", desc: "We are committed to ensuring that every student progresses consistently and confidently toward their academic goals.", color: "text-[#D87C26]" },
  ];

  return (
    <div className="py-10 px-6 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:max-w-screen-lg lg:mx-auto">
        <div className="lg:w-[48%] flex items-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 lg:w-[66%]">
            An Easier Way to be <br /> Sub and Find sub
          </h2>
          <img src={leaf} alt="leaf" className="hidden md:block md:w-[80px] md:h-[60px] lg:w-[100px] lg:h-[90px]" />
        </div>
        <p className="text-gray-700 mt-4 font-semibold lg:w-[52%] text-justify">
          At SGLFS School, we focus on holistic education that blends academics
          with extracurricular activities. With a dedicated team of teachers, a
          safe learning environment, and modern facilities, we ensure that every
          child receives the best start to their academic journey.
        </p>
      </div>
      <div className="mt-8 md:mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(({ id, title, desc, color }) => (
          <Card
            key={id}
            title={title}
            description={desc}
            textColor={color}
          />
        ))}
      </div>
    </div>
  );
}
