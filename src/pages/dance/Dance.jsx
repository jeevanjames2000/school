import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";


function DanceClasses() {
  return (
    <>
   
    <Header />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Dance Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Professional Training for All Ages
          </motion.p>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Dance Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                style: 'Bharatanatyam',
                image: 'https://images.unsplash.com/photo-1504699523589-2c4f4fde2f9c?auto=format&fit=crop&q=80',
                description: 'Classical Indian dance form',
              },
              {
                style: 'Contemporary',
                image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80',
                description: 'Modern expressive dance',
              },
              {
                style: 'Hip Hop',
                image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80',
                description: 'Urban dance styles',
              },
            ].map((dance, index) => (
              <motion.div
                key={dance.style}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={dance.image}
                  alt={dance.style}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dance.style}</h3>
                  <p className="text-gray-600">{dance.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Class Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Weekday Classes</h3>
              <ul className="space-y-4">
                {[
                  'Bharatanatyam: Mon & Wed (4:00 PM - 5:30 PM)',
                  'Contemporary: Tue & Thu (5:30 PM - 7:00 PM)',
                  'Hip Hop: Wed & Fri (6:00 PM - 7:30 PM)',
                ].map((schedule, index) => (
                  <motion.li
                    key={schedule}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Clock size={20} className="text-indigo-600" />
                    <span>{schedule}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Weekend Workshops</h3>
              <ul className="space-y-4">
                {[
                  'Special Choreography Sessions',
                  'Dance Fitness Classes',
                  'Performance Practice',
                ].map((workshop, index) => (
                  <motion.li
                    key={workshop}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Calendar size={20} className="text-indigo-600" />
                    <span>{workshop}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Dance Family</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Users size={48} className="text-indigo-600" />
             </div>
            <p className="text-gray-600 mb-8">
              Experience the joy of dance with our expert instructors. Join our classes
              and discover your passion for movement and expression.
            </p>
            <div className="space-y-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Register Now
              </button>
              <p className="text-sm text-gray-500">
                * New batch starting every month
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default DanceClasses;