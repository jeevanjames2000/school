import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiHome, HiUserGroup, HiAcademicCap } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/school-logo.png";
import ApplynowForm from "../Forms/ApplynowForm";
import LoginForm from "../Forms/LoginForm";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ scrollToSection, triggerGalleryRefresh }) {
  const navigation = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showApllyForm, setApplyForm] = useState(false);
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [sidebarDropdown, setSidebarDropdown] = useState(false);
  const dropdownRef = useRef();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("login")) || false;
    setAuth(storedAuth);
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="absolute lg:fixed top-0 left-0 w-full z-50  p-4 lg:transition-all lg:duration-300 lg:backdrop-blur-xs lg:bg-black/10 lg:text-black lg:shadow-md">
      <div className="w-full px-2 lg:px-6 mx-auto flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigation("/")}
        >
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-[#51a2ff] ml-2 whitespace-nowrap hidden md:block">
            Sri Ganesh Little Feets
          </span>
        </div>
        <nav className="hidden lg:flex space-x-3 relative">
          <Link to={"/"}>
            <button className="text-[#51a2ff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold">
              Home
            </button>
          </Link>

          <button
            onClick={() => scrollToSection("about")}
            className="text-[#2b7fff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-[#2b7fff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold"
          >
            Gallery
          </button>
          <Link to={"/tuitions"}>
            <button className="text-[#2b7fff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold">
              Tuitions
            </button>
          </Link>
          <Link to="/dance">
            <button className="text-[#2b7fff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold">
              Dance Class
            </button>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowAcademicsDropdown(true)}
            onMouseLeave={() => setShowAcademicsDropdown(false)}
            onClick={() => setShowAcademicsDropdown(!showAcademicsDropdown)}
          >
            <button className="text-[#2b7fff] flex items-center hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold">
              Academics <IoIosArrowDown className="ml-1 mt-1" />
            </button>
            <div
              className={`absolute top-[40px] w-full left-0 bg-white shadow-lg py-4 px-1.5 flex flex-col space-y-2 rounded-sm transition-transform duration-300 ease-in-out transform ${
                showAcademicsDropdown
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 pointer-events-none"
              }`}
            >
              <button
                onClick={() => scrollToSection("curriculum")}
                className="text-black hover:bg-black hover:text-white hover:rounded-sm p-1"
              >
                Curriculum
              </button>
              <button
                onClick={() => scrollToSection("faculty")}
                className="text-black hover:bg-black hover:text-white hover:rounded-sm p-1"
              >
                Faculty
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-black hover:bg-black hover:text-white hover:rounded-sm p-1"
              >
                Learning Resources
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#2b7fff] hover:bg-white hover:text-black hover:rounded-sm px-2 py-1 text-lg font-semibold"
          >
            Contact Us
          </button>
          {!auth ? (
            <button
              onClick={() => setShowModal(true)}
              className="hidden lg:block bg-white text-black px-3 py-1 rounded"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setShowModal(!showModal)}
              className="hidden lg:block rounded-full hover:bg-gray-200 transition duration-300"
            >
              <AiOutlineUser className="w-8 h-8 p-2 rounded-full text-gray-700 bg-gray-200" />
            </button>
          )}
        </nav>
        {}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <FiMenu size={27} color="#fff" fontWeight={"bold"} />
        </button>
      </div>
      <div
        className={`fixed inset-0 z-50 lg:hidden  flex justify-end ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`bg-black w-full transition-opacity duration-300 ${
            isOpen ? "opacity-40" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`bg-white w-60 p-5 flex flex-col shadow-lg h-full fixed top-0 right-0 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="self-end" onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
          <nav className="flex flex-col mt-4 space-y-4">
            <button
              onClick={() => {
                scrollToSection("home");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <HiHome fontSize={20} /> Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <HiUserGroup fontSize={20} /> About us
            </button>
            <Link to={"/tuitions"}>
              <button
                onClick={() => {
                  // scrollToSection("about");
                  setIsOpen(false);
                }}
                className="text-[#872341] text-left flex items-center gap-2"
              >
                <HiUserGroup fontSize={20} /> Tuitions
              </button>
            </Link>

            <Link to="/dance">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-[#872341] text-left flex items-center gap-2"
              >
                <HiUserGroup fontSize={20} /> Dance Class
              </button>
            </Link>

            <button
              onClick={() => {
                scrollToSection("gallery");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <GrGallery fontSize={20} /> Gallery
            </button>
            <div>
              <button
                onClick={() => setSidebarDropdown(!sidebarDropdown)}
                className="text-[#872341] text-left flex items-center gap-2"
              >
                <HiAcademicCap fontSize={20} /> Academics{" "}
                <IoIosArrowDown className="ml-1" />
              </button>
              <div
                className={`ml-8 overflow-hidden transition-max-h duration-300 ease-in-out ${
                  sidebarDropdown ? "max-h-40" : "max-h-0"
                }`}
              >
                <button
                  onClick={() => scrollToSection("curriculum")}
                  className="text-black hover:text-red-600 block mt-2"
                >
                  Curriculum
                </button>
                <button
                  onClick={() => scrollToSection("faculty")}
                  className="text-black hover:text-red-600 block"
                >
                  Faculty
                </button>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-black hover:text-red-600 block"
                >
                  Learning Resources
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
              className="text-[#872341] text-left flex items-center gap-2"
            >
              <MdOutlineConnectWithoutContact fontSize={20} /> Contact Us
            </button>
          </nav>
          <button
            onClick={() => {
              setApplyForm(true);
              setIsOpen(false);
            }}
            className="bg-black text-white px-4 py-2 mt-4 rounded"
          >
            Apply now
          </button>
          {auth ? (
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
            >
              Upload Files
            </button>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="bg-black text-white px-4 py-2 mt-4 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed lg:relative inset-0 flex flex-col items-center justify-center z-50 h-screen">
          <div className="p-6 rounded-lg">
            {/* <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button> */}
            <LoginForm
              setShowModal={setShowModal}
              setAuth={setAuth}
              auth={auth}
              triggerGalleryRefresh={triggerGalleryRefresh}
            />
          </div>
        </div>
      )}
      {showApllyForm && (
        <div className="fixed lg:relative inset-0  z-50 h-screen">
          <div className="p-6 rounded-lg ">
            {/* <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setApplyForm(false)}
            >
              ✖
            </button> */}
            <ApplynowForm setApplyForm={setApplyForm} />
          </div>
        </div>
      )}{" "}
    </header>
  );
}
