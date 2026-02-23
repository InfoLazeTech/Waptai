import React from "react";
import { FaUsers, FaLightbulb, FaIndustry } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Networking Opportunities",
      description:
        "Connect with global industry leaders, innovators, and water experts.",
      bgColor: "bg-gradient-to-tr from-[#0288d1]/20 to-[#03a9f4]/20",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovative Exhibits",
      description:
        "Discover cutting-edge technologies and sustainable solutions in water management.",
      bgColor: "bg-gradient-to-tr from-[#26c6da]/20 to-[#00acc1]/20",
    },
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Business Opportunities",
      description:
        "Explore partnerships, collaborations, and market expansion opportunities.",
      bgColor: "bg-gradient-to-tr from-[#0288d1]/20 to-[#1976d2]/20",
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d47a1] mb-4">
          Why Attend WAPTAI 2026?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Join the premier water innovation expo and experience a platform that
          brings together experts, innovators, and businesses for a sustainable future.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white backdrop-blur-md ${feature.bgColor}`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/70 mb-6 text-[#0288d1]">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0d47a1] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
