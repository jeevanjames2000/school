import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Clock, Calendar, Star, Sparkles, BookOpen, Palette } from 'lucide-react';
import Footer from '../../components/Footer';

export default function PlaySchoolPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587652990399-0864c4759ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Children Playing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/70"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Welcome to Our Preschool
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            Where every child's journey of discovery begins with love, care, and joy
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/school-landingpage" className="flex items-center gap-2 text-green-700 hover:text-green-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-green-600 text-lg font-medium">About Us</a>
              <a href="#programs" className="text-gray-600 hover:text-green-600 text-lg font-medium">Programs</a>
              <a href="#day" className="text-gray-600 hover:text-green-600 text-lg font-medium">A Day at Preschool</a>
              <a href="#gallery" className="text-gray-600 hover:text-green-600 text-lg font-medium">Gallery</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* About Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Our Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe every child is unique and deserves an environment where they can grow, 
              learn, and thrive. Our approach combines play-based learning with structured 
              activities to create a balanced educational experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                <span className="text-gray-700">Nurturing Care</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-500" />
                <span className="text-gray-700">Small Groups</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                <span className="text-gray-700">Quality Education</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-purple-500" />
                <span className="text-gray-700">Creative Learning</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Children Playing" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-green-50 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Opening Hours</p>
                  <p className="font-semibold text-gray-800">7:30 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Toddlers</h3>
              <p className="text-gray-600 mb-6">Ages 2-3 years</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-600">Sensory Play</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-600">Basic Motor Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-600">Social Interaction</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Preschool</h3>
              <p className="text-gray-600 mb-6">Ages 3-4 years</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Early Literacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Number Concepts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">Creative Expression</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pre-K</h3>
              <p className="text-gray-600 mb-6">Ages 4-5 years</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">School Readiness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Advanced Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Independence Skills</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Day at Preschool Section */}
        <section id="day" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">A Day at Our Preschool</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-purple-100 p-4 rounded-2xl h-min">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Morning Welcome</h3>
                  <p className="text-gray-600">
                    Start the day with warm greetings, free play, and morning circle time
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-blue-100 p-4 rounded-2xl h-min">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning Time</h3>
                  <p className="text-gray-600">
                    Engaging activities focused on literacy, numbers, and discovery
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-green-100 p-4 rounded-2xl h-min">
                  <Palette className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Play</h3>
                  <p className="text-gray-600">
                    Art, music, and imaginative play sessions
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Daily Activities" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-yellow-50 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-2xl">
                    <Calendar className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Enrollment</p>
                    <p className="font-semibold text-gray-800">Now Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Life at Preschool</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587652990400-0d7fd7d3e2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Learning Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Learning Through Play</p>
            </div>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587652990223-535e9a755c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Art Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Creative Expression</p>
            </div>
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587652990225-30dc7e28c68e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Outdoor Activities"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold">Outdoor Adventures</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  );
}