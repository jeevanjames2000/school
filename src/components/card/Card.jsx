import React from 'react'
import './card.css'
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = () => {
  return (
  
    <div className="card">
    <div className="card-inner" style={{"--clr":"#fff"}}>
      <div className="box border-2 border-black">
        <div className="imgBox ">

          {/* <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co." /> */}
          <div className=" h-full  p-4 text-[#872341]">
      <h3 className='text-3xl font-bold '>Empowering Young Minds with Knowledge & Confidence.</h3>
      <p className='text-base'>We don’t just focus on academics—we nurture critical thinking, creativity, and confidence in every student.</p>
     
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