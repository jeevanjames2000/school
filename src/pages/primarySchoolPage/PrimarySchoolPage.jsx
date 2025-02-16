import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, Users, Clock, Calendar, Star, Palette, Trophy } from 'lucide-react';
import Footer from '../../components/Footer';

export default function PrimarySchoolPage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Primary School Education" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/70"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Primary Education
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            Building strong foundations for academic excellence and personal growth
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/school-landingpage" className="flex items-center gap-2 text-blue-700 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 text-lg font-medium">About</a>
              <a href="#grades" className="text-gray-600 hover:text-blue-600 text-lg font-medium">Grades</a>
              <a href="#curriculum" className="text-gray-600 hover:text-blue-600 text-lg font-medium">Curriculum</a>
              <a href="#activities" className="text-gray-600 hover:text-blue-600 text-lg font-medium">Activities</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide a comprehensive education that focuses on academic excellence while nurturing 
              critical thinking, creativity, and character development. Our program is designed to 
              prepare students for future academic success and personal growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-500" />
                <span className="text-gray-700">Academic Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-green-500" />
                <span className="text-gray-700">Small Class Sizes</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                <span className="text-gray-700">Quality Education</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-purple-500" />
                <span className="text-gray-700">Student Achievement</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Primary Education" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-50 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-2xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">School Hours</p>
                  <p className="font-semibold text-gray-800">8:00 AM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grades Section */}
        <section id="grades" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Our Grade Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((grade) => (
              <div key={grade} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">G{grade}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Grade {grade}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">Core Subjects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">Enrichment Programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600">Project-Based Learning</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Our Curriculum</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Subjects</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Mathematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">English Language</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Science</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Social Studies</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Subjects</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">Art & Music</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">Physical Education</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">Computer Science</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">Foreign Language</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enrichment</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">STEM Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Leadership Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Public Speaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Creative Writing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">School Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Academic Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Academic Competitions</p>
            </div>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sports Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Sports & Athletics</p>
            </div>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cultural Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Cultural Events</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  );
}