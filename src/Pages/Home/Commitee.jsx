import React, { useState } from "react";
// import { ChevronRight, Globe, ArrowRight } from "lucide-react";
import sampat from "../../assets/Sampat_Jhabak.jpeg"
import ashok from "../../assets/Ashok_Patel.jpeg"
import nishit from "../../assets/Nishit.jpeg"
import kalpesh from "../../assets/Kalpesh.jpeg"
import vinod from "../../assets/Vinod.jpeg"
import kanu from "../../assets/Kanu.jpeg"
import ritesh from "../../assets/Ritesh.jpeg"
import Ashit from "../../assets/AshitDoshi.png"
import Rishabh from "../../assets/Rishabh.jpeg"
import Bhupesh from "../../assets/Bhupesh.jpeg"
import Gautam from "../../assets/Gautam.jpeg"
import Sachin from "../../assets/Sachin.jpeg"
import Kailash from "../../assets/Kailash.jpeg"
import Suresh from "../../assets/Suresh.jpeg"
import Chirag from "../../assets/Chirag.jpeg"
import Chetan from "../../assets/Chetan.jpeg"
import Anil from "../../assets/Anil.jpeg"
import Ashish from "../../assets/Ashish.jpeg"
import Amrut from "../../assets/Amrut.jpeg"
import Jain from "../../assets/Jain.jpeg"
import Bhavesh from "../../assets/Bhavesh.jpeg"
// import Jayant from "../../assets/Jayant.jpeg"
import Mehta from "../../assets/ChetanMaheta.jpeg"
import Savliya from "../../assets/Savliya.jpeg"
import Rahul from "../../assets/Rahul.jpeg"
import Vikram from "../../assets/Vikram.jpeg"
import Vishal from "../../assets/Vishal.jpeg"
// import Nirav from "../../assets/Nirav.jpeg"
// import Ramesh from "../../assets/Ramesh.jpeg"
import Sandip from "../../assets/Sandip.jpeg"
import Kamlesh from "../../assets/Kamlesh.jpeg"
// import Nirmal from "../../assets/Nirmal.jpeg"
// import Manish from "../../assets/Manish.jpeg"
import Dipak from "../../assets/Dipak.jpeg"
// import Sanjay from "../../assets/Sanjay.jpeg"
import Ankit from "../../assets/Ankit.jpeg"
import sunny from "../../assets/Sunny.jpeg"
import mayank from "../../assets/Mayank.jpeg"
import ajay from "../../assets/Ajay.jpeg"
// import Hiren from "../../assets/Hiren.jpeg"
// import Kaushal from "../../assets/Kaushal.jpeg"

const TABS = [
  "Governing Body",
  "Steering Committee",
  "Ahmedabad & North Gujarat Chapter",
  "South Gujarat Chapter",
  "Saurashtra & Kutch Chapter",
  "Central Gujarat Chapter",
  "New Dehli Chapter",
  "Maharashtra Chapter",
];

const DATA = {
  "Governing Body": [
    { id: 1, name: "Ashit Doshi", role: "Chairman", company: "Doshion Polysciences Pvt. Ltd. President", image: Ashit },
    { id: 2, name: "Rishabh Sanghvi", role: "Vice Chairman", company: "Purosis International LLP. Vice President", image: Rishabh },
    { id: 3, name: "Bhupesh Patel", role: "Secretary", company: "ORG EngiTech Ltd. Secretary", image: Bhupesh },
    { id: 4, name: "Gautam Shah", role: "Joint Secretary", company: "Lexcru Water Tech Pvt. Ltd Treasurer", image: Gautam },
    { id: 7, name: "Kailash Shah", role: "Executive Member", company: "MaxPure Water System Pvt. Ltd. Joint Treasurer", image: Kailash },
    { id: 5, name: "Sachin Ringwala", role: "Treasurer", company: "Aishwaryam Filters Dy. Secretary", image: Sachin },
    // { id: 6, name: "Sunil Raval", role: "Executive Member", company: "Unicare Water Technology Pvt Ltd. Joint Secretary", image: Sunil },
  ],
  "Steering Committee": [
    { id: 1, name: "Sampat Jhabak", role: "Chairman", company: "MaxPure Water System Pvt. Ltd.", image: sampat },
    { id: 2, name: "Ashok Patel", role: "Vice Chairman", company: "Shreya Water Tech LLP", image: ashok },
    { id: 3, name: "Nishit Doshi", role: "Secretary", company: "Fivebro Water Services Pvt. Ltd.", image: nishit },
    { id: 4, name: "Kalpesh Shah", role: "Joint Secretary", company: "Parshwam Filtration LLP", image: kalpesh },
    { id: 5, name: "Vinod Dudhat", role: "Treasurer", company: "Lexus Water Tech Pvt. Ltd.", image: vinod },
    { id: 6, name: "Kanu Mehta", role: "Executive Member", company: "Cosmos Water Solution Pvt. Ltd.", image: kanu },
    { id: 7, name: "Ritesh Desai", role: "Executive Member", company: "Krinovate Systems & Communications", image: ritesh },
  ],
  "Ahmedabad & North Gujarat Chapter": [
    { id: 1, name: "Suresh Patel", role: "Chairman", company: "Shreya Water Tech LLP. Committee Member", image: Suresh },
    { id: 2, name: "Chirag Gajera", role: "Vice Chairman", company: "Orix Aquatech Committee Member", image: Chirag },
    { id: 3, name: "Chetan Tapadiya", role: "Secretary", company: "Nice Industries Committee Member", image: Chetan },
    { id: 4, name: "Anil Jain", role: "Joint Secretary", company: "Zedtech Water Solution Pvt Ltd. Committee Member", image: Anil },
    { id: 5, name: "Ashish Shah", role: "Treasurer", company: "Navakar Water Solution Pvt. Ltd. Committee Member", image: Ashish },
    { id: 6, name: "Amrut Patel", role: "Executive Member", company: "Newpex Enterprise Committee Member", image: Amrut },
    { id: 7, name: "Bhagvatilal Jain", role: "Executive Member", company: "New Tech Water Purifier Systems Pvtl. Ltd. Committee Member", image: Jain },
  ],
  "South Gujarat Chapter": [
    { id: 1, name: "Bhavesh Patel", role: "Chairman", company: "Meera Trade-Impex Committee Member", image: Bhavesh },
    // { id: 2, name: "Jayant Desai", role: "Vice Chairman", company: "Joystick Wellness Products Dy. Chapter Head", image: Jayant },
    { id: 3, name: "Chetan Mehta", role: "Secretary", company: "P Tech Aqua Committee Member", image: Mehta },
    { id: 4, name: "Ashok savaliya", role: "Joint Secretary", company: "Bhojal Filter House & Gas Gyser Committee Member", image: Savliya },
    { id: 5, name: "Rahul Jhabak", role: "Treasurer", company: "Maxpure Water System Pvt. Ltd. Committee Member", image: Rahul },
    { id: 6, name: "Vikram savani", role: "Executive Member", company: "Velient Pec India Pvt. Ltd. Committee Member", image: Vikram },
  ],
  "Saurashtra & Kutch Chapter": [
    { id: 1, name: "Vishal Sharma", role: "Chairman", company: "Flowlance International LLP. Committee Member", image: Vishal },
    // { id: 2, name: "Nirav Dedania", role: "Vice Chairman", company: "H2O Scientific Dy. Chapter Head", image: Nirav },
    // { id: 3, name: "Ramesh Sathwara", role: "Secretary", company: "Shiv Enterprise Committee Member", image: Ramesh },
    { id: 4, name: "Sandip mehta", role: "Joint Secretary", company: "Cloud International LLP. Committee Member", image: Sandip },
    { id: 5, name: "Kamlesh patel", role: "Treasurer", company: "Shakti Aquatech LLP. Committee Member", image: Kamlesh },
    // { id: 6, name: "Nirmal vyas", role: "Executive Member", company: "Life Guard Water Solution Committee Member", image: Nirmal },
    // { id: 7, name: "Manish rupapara", role: "Chairman", company: "Pure H2O Committee Member", image: Manish },
  ],
  "Central Gujarat Chapter": [
    { id: 1, name: "Deepak Chhatriwala", role: "Chairman", company: "Krishna Marketing Committee Member", image: Dipak },
    // { id: 2, name: "Sanjay Khatri", role: "Vice Chairman", company: "Shreeji Home Care Dy. Chapter Head", image: Sanjay },
    { id: 3, name: "Ankit Patel", role: "Secretary", company: "Nexus Committee Member", image: Ankit },
    // { id: 4, name: "Hiren Shah", role: "Joint Secretary", company: "Real Marketing Committee Member", image: Hiren },
    // { id: 5, name: "Kaushal patel", role: "Treasurer", company: "KK Impex Committee Member", image: Kaushal },
  ], 
  "New Dehli Chapter": [
    { id: 2, name: "Mayank Aggarwal", role: "Vice Chairman", company: "AquaX Series Committee Member", image: mayank },
    { id: 1, name: "Sunny Gulia", role: "Chairman", company: "Real Ganga Enterprises Committee Member", image: sunny },
  ],
  "Maharashtra Chapter": [
    { id: 3, name: "Ajay Shroff", role: "Secretary", company: "Pratham Filters Committee Member", image: ajay },
  ]
  // "Expo Committee": [
  //   { id: 1, name: "Bhupesh Patel", role: "Chairman", company: "ORG EngiTech Ltd.", image: Bhupesh },
  //   { id: 2, name: "Kalpesh Shah", role: "Vice Chairman", company: "Parshwam Filtration LLP", image: kalpesh },
  //   { id: 3, name: "Rishabh Sanghvi", role: "Secretary", company: "Sure Water Technologies", image: Rishabh },
  //   { id: 4, name: "Ashish Shah", role: "Joint Secretary", company: "Navakar Water Solution Pvt. Ltd.", image: Ashish },
  //   { id: 5, name: "Anil Jain", role: "Treasurer", company: "Zedtech Water Solution Pvt Ltd.", image: Anil },
  //   { id: 6, name: "Amrutbhai Patel", role: "Executive Member", company: "Newpex Enterprise", image: Amrut },
  //   { id: 7, name: "Chetan Tapadiya", role: "Chairman", company: "Nice Industries", image: Chetan },
  //   { id: 8, name: "Deepak Chhatriwala", role: "Treasurer", company: "Krishna Marketing", image: Deepak },
  //   { id: 9, name: "Bhavesh Patel", role: "Executive Member", company: "Meera Trade-Impex", image: Bhavesh },
  //   { id: 10, name: "Vishal Sharma", role: "Chairman", company: "Newater Technology Pvt. Ltd.", image: Vishal },
  // ],
};

const Committee = () => {
  const [active, setActive] = useState("Governing Body");
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-900 mt-20 ">
      <header className="pt-12 pb-8 px-6 border-b border-slate-100 bg-[#0d5c7f]">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">
            Organization Leadership
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Committee Members
          </h1>
          <p className="mt-2 text-white text-sm max-w-2xl">
            Distinguished professionals leading the industry towards sustainable water management solutions.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:flex gap-16">
         <aside className="lg:w-1/4 mb-10 lg:mb-0">
          <nav className="flex lg:flex-col gap-2 sticky top-24 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`flex items-center justify-between px-5 py-4 text-sm font-medium rounded-lg transition-all
                  ${
                    active === tab
                      ? "bg-slate-50 border-l-4 border-[#0d5c7f] text-[#0d5c7f]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                <span>{tab}</span>
                <span className="text-xs text-slate-400">
                  {DATA[tab]?.length || 0}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="lg:w-3/4">
          <div className="flex items-baseline justify-between mb-10 border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-800">{active}</h2>
            <span className="text-slate-400 text-sm font-mono">{(DATA[active] || []).length} Members</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {(DATA[active] || []).map((member) => (
              <div key={member.id} className="group relative">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm mb-6 hover:grayscale-0 transition-all duration-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    onClick={() => setSelectedImg(member.image)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer
             hover:scale-105"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/600x800?text=Corporate+Portrait")}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 decoration-1">
                    {member.name}
                  </h3>

                    <div className="pt-1">
                      <p className="text-sm text-[#0d5c7f]  font-semibold transform transition-transform duration-300">
                        {member.company}
                      </p>
                    </div>
                  </div>

                <div className="mt-3 w-full h-[1px] bg-slate-100 group-hover:bg-[#0d5c7f] transition-colors duration-500"></div>
              </div>
            ))}
          </div>

               {/* ===== IMAGE MODAL ===== */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>

            {/* Full Image */}
            <img
              src={selectedImg}
              alt="Seminar Full View"
              className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

          {(!DATA[active] || DATA[active].length === 0) && (
            <div className="py-20 text-center border border-dashed border-slate-200 rounded-xl">
              <p className="text-slate-400 italic font-serif text-lg">
                Member list for {active} is currently being updated.
              </p>
            </div>
          )}
        </main>
      </div>

       <footer className="py-10 bg-slate-50 text-center">
        <p className="text-xs tracking-widest text-slate-400 uppercase">
          Commitment • Innovation • Sustainability
        </p>
      </footer>
    </div>
  );
};

export default Committee;