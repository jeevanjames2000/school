import { Music } from 'lucide-react'
import { School } from 'lucide-react'
import { BookOpen } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ExcellenceSection() {
    const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className=" bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iI2JmYmZiZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen flex flex-col">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to Excellence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your path to learning and growth
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl w-full">
          {/* School Card */}
          <Link
            to="/school-landingpage"
            className="group relative"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${hoveredCard === 0 ? 'transform -translate-y-4 shadow-2xl' : 'hover:shadow-xl'}`}>
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="School Education"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <School className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">School</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Comprehensive education from playschool to grade 7
                  </p>
                  <div className="flex items-center gap-2 text-blue-200 group-hover:text-white transition-colors">
                    <span>Explore Programs</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Tuitions Card */}
          <Link 
            to="/tuitions"
            className="group relative"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${hoveredCard === 1 ? 'transform -translate-y-4 shadow-2xl' : 'hover:shadow-xl'}`}>
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Tuition Classes"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Tuitions</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Expert guidance for academic excellence
                  </p>
                  <div className="flex items-center gap-2 text-purple-200 group-hover:text-white transition-colors">
                    <span>View Subjects</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Dance School Card */}
          <Link 
            to="/dance"
            className="group relative"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${hoveredCard === 2 ? 'transform -translate-y-4 shadow-2xl' : 'hover:shadow-xl'}`}>
              <div className="aspect-[1/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Dance School"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-pink-500/20 p-3 rounded-xl">
                      <Music
                       className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Dance School</h3>
                  </div>
                  <p className="text-white/90 mb-4">
                    Express yourself through movement and rhythm
                  </p>
                  <div className="flex items-center gap-2 text-pink-200 group-hover:text-white transition-colors">
                    <span>Discover Classes</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExcellenceSection