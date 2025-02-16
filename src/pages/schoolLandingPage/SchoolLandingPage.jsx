import { GraduationCap, School, BookOpen, Music } from 'lucide-react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';

function SchoolLandingPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
    {/* Hero Section */}
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Education Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative text-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to Our Learning Community
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 drop-shadow">
          Nurturing minds, inspiring futures, and creating lifelong learners
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Choose Your Educational Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive education programs tailored to different age groups and learning stages
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Play School Card */}
        <Link
          to="/play-school"
          className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587652990400-0d7fd7d3e2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Play School"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <School className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Play School</h3>
            </div>
            <p className="text-white/90 mb-4">Ages 2-5 years</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Play-based Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Social Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Creative Expression</span>
              </li>
            </ul>
            <div className="inline-flex items-center gap-2 text-green-300 group-hover:text-white transition-colors">
              <span>Learn More</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Primary School Card */}
        <Link 
          to="/primary-school"
          className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Primary School"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Primary School</h3>
            </div>
            <p className="text-white/90 mb-4">Grades 1-7</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Comprehensive Curriculum</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Skill Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Academic Excellence</span>
              </li>
            </ul>
            <div className="inline-flex items-center gap-2 text-blue-300 group-hover:text-white transition-colors">
              <span>Learn More</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Teachers</h3>
            <p className="text-gray-600">Dedicated professionals committed to nurturing young minds</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <School className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art learning environments and resources</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Development</h3>
            <p className="text-gray-600">Focus on academic, social, and emotional growth</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default SchoolLandingPage