import React from 'react';
import Navbar from './Navbar';
import { Brain, Zap, MessageSquare } from 'lucide-react';
import radius from './images/radius.jpg';
import avinImage from './images/avin.jpg';
import anju from './images/anju.jpg';
import govind from './images/govind.jpg';
import ak from './images/ak.jpg';

const AboutPage = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Assistance",
      description: "Provide accurate and contextual responses to your queries."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Personalized Responses",
      description: "Receive personalized recommendations and solutions, tailored to your needs and preferences."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Response",
      description: "Get immediate answers to your questions, available 24/7, making learning accessible anytime."
    }
  ];

  const teamMembers = [
    {
      name: "Anantha Krishnan",
      role: "Team Member",
      image: ak,
      style : {
        height: '350px',
        width: '800px'
      }
    },
    {
      name: "Anju Tiji",
      role: "Team Member",
      image: anju,
      style: { 
        height: '350px',
        width: '100%',
        position: 'relative',
        top: '0px'
      }
    },
    {
      name: "Avin Madhu",
      role: "Team Member",
      image: avinImage,
      style: { 
        height: '350px',
        width: '100%',
        position: 'relative',
        top: '0px'
      }
    },
    {
      name: "Govind V Namboothiri",
      role: "Team Member",
      image: govind,
      style: { 
        height: '400px',
        width: '100%',
        position: 'relative',
        top: '0px'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 font-['righteous']">
          About RADIUS
        </h1>
        <p className="text-lg md:text-xl text-center text-blue-300 mb-10 md:mb-16">
          Transforming learning experiences with the power of AI technology.
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" style={{ marginLeft: '100px' }}>
          <div className="bg-[#1a2942] p-8 rounded-2xl shadow-2xl aspect-ratio-1 md:aspect-ratio-4/3 lg:aspect-ratio-1 xl:aspect-ratio-4/3">
            <img 
              src={radius} 
              alt="Chatbot" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 px-4 md:px-0">
            <h2 className="text-3xl font-bold mb-6 text-blue-300" style={{ 'marginLeft': '', 'paddingRight': '20px'}}>
              Introducing RADIUS
            </h2>
            <p className="text-gray-300 leading-relaxed" style={{ marginLeft: '' }}>
              Introducing RADIUS, your intelligent assistant designed to simplify learning and communication like never before. With RADIUS, you'll receive personalized support, get quick answers to your questions, and enjoy tailored assistance based on your needs. Whether you're seeking instant help or in-depth insights, RADIUS is here to guide you. Always ready to assist, it ensures smarter interactions, faster solutions, and a more efficient way to elevate your educational journey with RADIUS by your side!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#1a2942] p-6 md:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 md:mb-4 text-blue-300">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Team Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-['righteous']">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={member.style}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;