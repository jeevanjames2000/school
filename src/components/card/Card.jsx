import React from 'react'
import './card.css'
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({ textColor }) => {
  return (

    <div className="card">
      <div className="card-inner h-66 md:h-78 lg:h-74" style={{ "--clr": "#fff" }}>  
        <div className="box border-2 border-black ">
          <div className="imgBox pt-8 md:pt-4 xl:pt-8 px-0.5 sm:px-2 lg:px-4 ">

            <div className={`h-full  p-4 ${textColor}`}>
              <h3 className='text-base  lg:text-xl font-bold mb-4 md:mb-6 lg:mb-3'>Empowering Young Minds with Knowledge & Confidence.</h3>
              <p className='text-sm lg:text-md xl:text-base font-semibold w-[90%] sm:w-[60%] md:w-[90%] lg:w-3/4'>We don’t just focus on academics—we nurture critical thinking, creativity, and confidence in every student.</p>

            </div>
          </div>
          <div className="icon border-2 border-black">
            <a href="#" className="iconBox "> <span className="material-symbols-outlined">
              <MdOutlineArrowOutward className='text-[#872341] hover:text-[#fff] text-4xl font-bold' />
            </span></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card;