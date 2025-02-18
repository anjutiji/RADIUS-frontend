// import React from 'react';
// import Navbar from './Navbar';
// import { Brain, Zap, MessageSquare } from 'lucide-react';
// import radius from './images/radius.jpg';
// import avin from './images/avin.jpg';

// const AboutPage = () => {
//   const features = [
//     {
//       icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
//       title: "Intelligent Assistance",
//       description: "Provide accurate and contextual responses to your queries."
//     },
//     {
//       icon: <Brain className="w-8 h-8 text-purple-400" />,
//       title: "Personalized Responses",
//       description: "Receive personalized recommendations and solutions, tailored to your needs and preferences."
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-yellow-400" />,
//       title: "Instant Response",
//       description: "Get immediate answers to your questions, available 24/7, making learning accessible anytime."
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "Anantha Krishnan",
//       image: "/api/placeholder/200/200",
//     },
//     {
//       name: "Anju Tiji",
//       image: "/api/placeholder/200/200",
//     },
//     {
//       name: "Avin Madhu",
//       image: avin,
//     },
//     {
//       name: "Govind V Namboothiri",
//       image: "/api/placeholder/200/200",

//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a192f] text-white">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-24">
//         <h1 className="text-5xl font-bold text-center mb-6 font-['righteous']">
//           About RADIUS
//         </h1>
//         <p className="text-xl text-center text-blue-300 mb-16">
//           Transforming learning experiences with the power of AI technology.
//         </p>

//         {/* Main Content */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20" style={{ marginLeft: '100px' }}>

//           <div style={{height:'500px', width:'500px'}} className="bg-[#1a2942] p-8 rounded-2xl shadow-2xl">
//             <img src={radius} 
//               style={{height:'450px', width:'450px'}}
//               alt="Chatbot" 
//               className="rounded-lg w-full"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold mb-6 text-blue-300" style={{ marginLeft: '-150px' }}>
//               Introducing RADIUS
//             </h2>
//             <p className="text-gray-300 leading-relaxed"style={{ marginLeft: '-150px' }}>
//             Introducing RADIUS, your intelligent assistant designed to simplify learning and communication like never before. With RADIUS, you'll receive personalized support, get quick answers to your questions, and enjoy tailored assistance based on your needs. Whether you're seeking instant help or in-depth insights, RADIUS is here to guide you. Always ready to assist, it ensures smarter interactions, faster solutions, and a more efficient way to elevate your educational journey with RADIUS by your side!
//             </p>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-[#1a2942] p-8 rounded-xl shadow-lg 
//                         transform hover:scale-105 transition-transform duration-300"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold mb-4 text-blue-300">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-300">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Team Section */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-12 font-['righteous']">
//             Meet Our Team
//           </h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#1a2942] rounded-xl overflow-hidden shadow-lg
//                           transform hover:scale-105 transition-transform duration-300"
//               >
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-64 h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-blue-300">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-blue-400 mb-4">{member.role}</p>
//                   <p className="text-gray-300">{member.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
import React from 'react';
import Navbar from './Navbar';
import { Brain, Zap, MessageSquare } from 'lucide-react';
import radius from './images/radius.jpg';
import avinImage from './images/avin.jpg'; // Import Avin's image
import anju from './images/anju.jpg';
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
      image: "/api/placeholder/200/200",
    },
    {
      name: "Anju Tiji",
      image: anju,
      style: { 
        marginTop: '250px',
        position: 'relative',
        top: '20px',
        paddingTop: '20px'
      }
    },
    {
      name: "Avin Madhu",
      image: avinImage,
    },
    {
      name: "Govind V Namboothiri",
      image: "/api/placeholder/200/200",
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
        <div style={{height:'500px', width:'500px'}} className="bg-[#1a2942] p-8 rounded-2xl shadow-2xl">
            <img 
              src={radius} 
              alt="Chatbot" 
              style={{height:'450px', width:'450px'}}
              className="rounded-lg w-full h-auto max-h-96 md:max-h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-6 text-blue-300" style={{ marginLeft: '-150px' }}>
              Introducing RADIUS
            </h2>
            <p className="text-gray-300 leading-relaxed"style={{ marginLeft: '-150px' }}>
              Introducing RADIUS, your intelligent assistant designed to simplify learning and communication like never before. With RADIUS, you'll receive personalized support, get quick answers to your questions, and enjoy tailored assistance based on your needs. Whether you're seeking instant help or in-depth insights, RADIUS is here to guide you. Always ready to assist, it ensures smarter interactions, faster solutions, and a more efficient way to elevate your educational journey with RADIUS by your side!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
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

        {/* Team Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-['righteous']">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-[#1a2942] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3 md:mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm md:text-base">{member.description}</p>
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