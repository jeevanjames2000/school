import React from "react";

export default function InvertedRadiusComponent() {
  return (
    <div className="p-10 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          An Easier Way to be Sub and Find sub
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl">
          At SGLFS School, we focus on holistic education that blends academics
          with extracurricular activities. With a dedicated team of teachers, a
          safe learning environment, and modern facilities, we ensure that every
          child receives the best start to their academic journey.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-blue-900 p-6 rounded-lg shadow-lg relative">
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
        </div>
        <div className="border border-red-500 p-6 rounded-lg shadow-lg relative">
          <p className="text-xl font-semibold text-blue-900">
            A better way to connect students and teachers
          </p>
          <p className="text-gray-600 mt-2">
            We believe that effective learning happens when students and
            teachers are well-connected.
          </p>
          <div className="absolute bottom-0 right-0 bg-blue-900 text-white p-4 rounded-tl-lg">
            <span className="text-lg">➡</span>
          </div>
        </div>
        <div className="border border-blue-900 p-6 rounded-lg shadow-lg relative">
          <p className="text-xl font-semibold text-orange-600">
            Student learning stays on track to meet their academic goals
          </p>
          <p className="text-gray-600 mt-2">
            We are committed to ensuring that every student progresses
            consistently and confidently toward their academic goals.
          </p>
          <div className="absolute bottom-0 right-0 bg-blue-900 text-white p-4 rounded-tl-lg">
            <span className="text-lg">➡</span>
          </div>
        </div>
      </div>
    </div>
  );
}
