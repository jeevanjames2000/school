import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";


function Tuitions() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (

    <>
    <Header />
     <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80")',
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
            Tuitions (Up to 10th Grade)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Flexible Evening Hours
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Expert Guidance</h2>
              <p className="text-gray-600 mb-6">
                Our experienced teachers provide personalized attention to help students
                excel in their academics. We offer flexible evening hours to accommodate
                school schedules.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized attention',
                  'Regular progress tracking',
                  'Homework assistance',
                  'Practice tests',
                  'Doubt clearing sessions',
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-linear-to-r from-[#872341] to-[#1B2D63] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Subjects Offered</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Mathematics',
                  'Science',
                  'English',
                  'Social Studies',
                  'Languages',
                  'Computer Science',
                ].map((subject) => (
                  <div
                    key={subject}
                    className="bg-white p-4 rounded shadow-md text-center"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya S.',
                grade: '10th Grade',
                text: 'The tutors helped me improve my mathematics score significantly.',
                rating: 5,
              },
              {
                name: 'Rahul M.',
                grade: '8th Grade',
                text: 'Regular practice tests helped me prepare better for exams.',
                rating: 5,
              },
              {
                name: 'Anjali K.',
                grade: '9th Grade',
                text: 'The flexible timing helped me manage school and tuitions effectively.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
   
  );
}

export default Tuitions;