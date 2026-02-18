import React from "react";

// Images
import facility1 from "../../assets/facilities1.jpg";
import facility2 from "../../assets/facilities2.jpg";

const Facilities = () => {
  return (
    <section className="py-5 px-6 bg-gradient-to-br from-sky-100 via-white to-sky-50 max-w-full h-auto">

      {/* Heading */}

      <div className="text-center py-24 md:py-32">
        <h2 className="text-5xl md:text-6xl font-bold mt-5 text-[#1c87c9] mb-6 tracking-wide">
          Facilities
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore our world-class facilities designed to support business development
          and water testing services for our members.
        </p>
      </div>


      {/* Section 1 */}
      <div className="flex flex-col md:flex-row gap-12 mb-32 items-center justify-center">
        <img
          src={facility1}
          alt="Office Facility"
          className="h-auto max-h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
        />

        <div className="md:w-1/2 flex flex-col justify-start space-y-6">
          <h3 className="text-3xl md:text-4xl text-[#1c87c9] font-bold">
            Members Conference & Training Facilities
          </h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Members of WAPTAI can use the conference room, training room, and meeting room
            with enthusiasm for their business. WAPTAI provides a modern air-conditioned facility
            with all amenities, well-equipped for presentations, fully furnished, and ideal for
            business development.
          </p>

          <h4 className="text-2xl font-semibold text-gray-800">Highlights</h4>
          <ul className="flex flex-wrap gap-4">
            {[
              "Air Conditioned Room",
              "Well Equipped for Presentation",
              "Fully Furnished",
              "Conference Room",
              "Meeting Room",
              "Training Room",
            ].map((item) => (
              <li
                key={item}
                className="bg-white text-[#1c87c9] px-5 py-2 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-[#1c87c9] font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2 (Reverse Layout) */}
      <div className="flex flex-col md:flex-row-reverse gap-12 md:mb-10 items-center justify-center">
        <img
          src={facility2}
          alt="Laboratory Facility"
          className="h-auto max-h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
        />

        <div className="md:w-1/2 flex flex-col justify-start space-y-6">
          <h3 className="text-3xl md:text-4xl text-[#1c87c9] font-bold">
            Get Water Testing Done As per Bureau of Indian Standards (BIS)
          </h3>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At our water testing facility, we strictly follow BIS guidelines, ensuring the highest
            quality and accurate results. Equipped with state-of-the-art lab instruments, our experts
            meticulously analyze samples for reliable results. WAPTAI members enjoy special rates for
            these premium services.
          </p>

          <h4 className="text-2xl font-semibold text-gray-800">Highlights</h4>
          <ul className="flex flex-wrap gap-4">
            {[
              "Advanced Laboratory Instruments",
              "Testing Water by Expert",
              "Most Reliable Water Testing",
              "Concessional Rate for WAPTAI Members",
            ].map((item) => (
              <li
                key={item}
                className="bg-white text-[#1c87c9] px-5 py-2 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-[#1c87c9] font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
