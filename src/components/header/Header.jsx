// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../assets/school-logo.png";
// import { HiHome } from "react-icons/hi";
// import { HiUserGroup } from "react-icons/hi";
// import { HiAcademicCap } from "react-icons/hi2";
// import { GrGallery } from "react-icons/gr";
// import { MdOutlineConnectWithoutContact } from "react-icons/md";
// import ApplynowForm from "../Forms/ApplynowForm";

// export default function Header({ scrollToSection }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <header className="bg-white shadow-md p-4 pl-8 pr-8 flex justify-between items-center flex-wrap">
//       {}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10" />
//         <span className="text-xl font-bold text-red-600 ml-2 whitespace-nowrap hidden md:block">
//           Sri Ganesh Little Feet School
//         </span>
//       </div>
//       {}
//       <nav className="hidden lg:flex space-x-6">
//         <button
//           onClick={() => scrollToSection("home")}
//           className="text-red-600 hover:underline"
//         >
//           Home
//         </button>
//         <button
//           onClick={() => scrollToSection("about")}
//           className="text-red-600 hover:underline"
//         >
//           About us
//         </button>
//         <button
//           onClick={() => scrollToSection("gallery")}
//           className="text-red-600 hover:underline"
//         >
//           Gallery
//         </button>
//         <button
//           onClick={() => scrollToSection("heroes")}
//           className="text-red-600 hover:underline"
//         >
//           Academics
//         </button>
//         <button
//           onClick={() => scrollToSection("contact")}
//           className="text-red-600 hover:underline"
//         >
//           Contact Us
//         </button>
//       </nav>
//       <button
//         onClick={() => setShowModal(true)}
//         className="hidden lg:block bg-black text-white px-4 py-2 rounded"
//       >
//         Apply now
//       </button>
//       <button className="lg:hidden" onClick={() => setIsOpen(true)}>
//         <FiMenu size={24} />
//       </button>

//       {/* Sidebar Menu (Animated) */}
//       <div
//         className={`fixed inset-0 z-50 flex justify-end ${
//           isOpen ? "visible" : "invisible"
//         }`}
//       >
//         {/* Background Overlay */}
//         <div
//           className={`bg-black w-full transition-opacity duration-300 ease ${
//             isOpen ? "opacity-40" : "opacity-0 pointer-events-none"
//           }`}
//           onClick={() => setIsOpen(false)}
//         ></div>

//         {/* Sidebar Panel */}
//         <div
//           className={`bg-white w-60 p-5 flex flex-col shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="self-end" onClick={() => setIsOpen(false)}>
//             <FiX size={24} />
//           </button>

//           <nav className="flex flex-col mt-4 space-y-4">
//             <button
//               onClick={() => {
//                 scrollToSection("home");
//                 setIsOpen(false);
//               }}
//               className="text-[#872341] text-left flex items-center gap-2"
//             >
//               <HiHome fontSize={20} />
//               Home
//             </button>
//             <button
//               onClick={() => {
//                 scrollToSection("about");
//                 setIsOpen(false);
//               }}
//               className="text-[#872341] text-left flex items-center gap-2"
//             >
//               <HiUserGroup fontSize={20} />
//               About us
//             </button>
//             <button
//               onClick={() => {
//                 scrollToSection("gallery");
//                 setIsOpen(false);
//               }}
//               className="text-[#872341] text-left flex items-center gap-2"
//             >
//               <GrGallery fontSize={20} />
//               Gallery
//             </button>
//             <button
//               onClick={() => {
//                 scrollToSection("heroes");
//                 setIsOpen(false);
//               }}
//               className="text-[#872341] text-left flex items-center gap-2"
//             >
//               <HiAcademicCap fontSize={20} />
//               Academics
//             </button>
//             <button
//               onClick={() => {
//                 scrollToSection("contact");
//                 setIsOpen(false);
//               }}
//               className="text-[#872341] text-left flex items-center gap-2"
//             >
//               <MdOutlineConnectWithoutContact fontSize={20} />
//               Contact Us
//             </button>
//           </nav>

//           <button
//             onClick={() => {
//               setShowModal(true);
//               setIsOpen(false);
//             }}
//             className="bg-black text-white px-4 py-2 mt-4 rounded"
//           >
//             Apply now
//           </button>
//           {showModal && (
//             <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 ">
//               <ApplynowForm setShowModal={setShowModal} />
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiHome, HiUserGroup, HiAcademicCap } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ApplynowForm from "../Forms/ApplynowForm";
import logo from "../../assets/school-logo.png";



export default function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [sidebarDropdown, setSidebarDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 pl-8 pr-8 flex justify-between items-center flex-wrap">
      <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-10" />

        <span className="text-xl font-bold text-red-600 ml-2 whitespace-nowrap hidden md:block">
          Sri Ganesh Little Feet School
        </span>
      </div>
      
      <nav className="hidden lg:flex space-x-6 relative">
        <button onClick={() => scrollToSection("home")} className="text-red-600 hover:underline">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="text-red-600 hover:underline">
          About us
        </button>
        <button onClick={() => scrollToSection("gallery")} className="text-red-600 hover:underline">
          Gallery
        </button>
        
        <div
          className="relative"
          onMouseEnter={() => setShowAcademicsDropdown(true)}
          onMouseLeave={() => setShowAcademicsDropdown(false)}
        >
          <button className="text-red-600 flex items-center hover:underline">
            Academics <IoIosArrowDown className="ml-1 mt-1" />
          </button>
          <div
            className={`absolute top-6 w-[160px] left-0 bg-white shadow-lg py-4 px-1.5 flex flex-col space-y-2  rounded-sm transition-transform  duration-300 ease-in-out transform ${showAcademicsDropdown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
          >
            <button onClick={() => scrollToSection("curriculum")} className="text-black hover:bg-[#872341] hover:text-white hover:rounded-sm  p-1 ">
              Curriculum
            </button>
            <button onClick={() => scrollToSection("faculty")} className="text-black hover:bg-[#872341] hover:text-white hover:rounded-sm  p-1 ">
              Faculty
            </button>
            <button onClick={() => scrollToSection("resources")} className="text-black hover:bg-[#872341] hover:text-white hover:rounded-sm  p-1 ">
              Learning Resources
            </button>
          </div>
        </div>

        <button onClick={() => scrollToSection("contact")} className="text-red-600 hover:underline  ">
          Contact Us
        </button>
      </nav>

      <button onClick={() => setShowModal(true)} className="hidden lg:block bg-black text-white px-4 py-2 rounded">
        Apply now
      </button>
      <button className="lg:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>

      <div className={`fixed inset-0 z-50 flex justify-end ${isOpen ? "visible" : "invisible"}`}>
        <div className={`bg-black w-full transition-opacity duration-300 ${isOpen ? "opacity-40" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}></div>
        
        <div className={`bg-white w-60 p-5 flex flex-col shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <button className="self-end" onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>

          <nav className="flex flex-col mt-4 space-y-4">
            <button onClick={() => { scrollToSection("home"); setIsOpen(false); }} className="text-[#872341] text-left flex items-center gap-2">
              <HiHome fontSize={20} /> Home
            </button>
            <button onClick={() => { scrollToSection("about"); setIsOpen(false); }} className="text-[#872341] text-left flex items-center gap-2">
              <HiUserGroup fontSize={20} /> About us
            </button>
            <button onClick={() => { scrollToSection("gallery"); setIsOpen(false); }} className="text-[#872341] text-left flex items-center gap-2">
              <GrGallery fontSize={20} /> Gallery
            </button>
            
            <div>
              <button onClick={() => setSidebarDropdown(!sidebarDropdown)} className="text-[#872341] text-left flex items-center gap-2">
                <HiAcademicCap fontSize={20} /> Academics <IoIosArrowDown className="ml-1" />
              </button>
              <div className={`ml-8 overflow-hidden transition-max-h duration-300 ease-in-out ${sidebarDropdown ? "max-h-40" : "max-h-0"}`}>
                <button onClick={() => scrollToSection("curriculum")} className="text-black hover:text-red-600 block mt-2">Curriculum</button>
                <button onClick={() => scrollToSection("faculty")} className="text-black hover:text-red-600 block">Faculty</button>
                <button onClick={() => scrollToSection("resources")} className="text-black hover:text-red-600 block">Learning Resources</button>
              </div>
            </div>

            <button onClick={() => { scrollToSection("contact"); setIsOpen(false); }} className="text-[#872341] text-left flex items-center gap-2">
              <MdOutlineConnectWithoutContact fontSize={20} /> Contact Us
            </button>
          </nav>

          <button onClick={() => { setShowModal(true); setIsOpen(false); }} className="bg-black text-white px-4 py-2 mt-4 rounded">
            Apply now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
              <ApplynowForm setShowModal={setShowModal} />

        </div>
      )}
    </header>
  );
}
