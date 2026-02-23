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
  { id: 1, name: "Ashit Doshi", role: "President", company: "Doshion Polysciences Pvt. Ltd.", image: Ashit },
  { id: 2, name: "Rishabh Sanghvi", role: "Vice President", company: "Purosis International LLP", image: Rishabh },
  { id: 3, name: "Bhupesh Patel", role: "Secretary", company: "ORG EngiTech Ltd.", image: Bhupesh },
  { id: 4, name: "Gautam Shah", role: "Treasurer", company: "Lexcru Water Tech Pvt. Ltd", image: Gautam },
  { id: 7, name: "Kailash Shah", role: "Joint Treasurer", company: "MaxPure Water System Pvt. Ltd.", image: Kailash },
  { id: 5, name: "Sachin Ringwala", role: "Dy. Secretary", company: "Aishwaryam Filters", image: Sachin },
  // { id: 6, name: "Sunil Raval", role: "Joint Secretary", company: "Unicare Water Technology Pvt Ltd.", image: Sunil },
],

  "Steering Committee": [
    { id: 1, name: "Sampat Jhabak", role: "Committee Member", company: "MaxPure Water System Pvt. Ltd.", image: sampat },
    { id: 2, name: "Ashok Patel", role: "Committee Member", company: "Shreya Water Tech LLP", image: ashok },
    { id: 3, name: "Nishit Doshi", role: "Committee Member", company: "Fivebro Water Services Pvt. Ltd.", image: nishit },
    { id: 4, name: "Kalpesh Shah", role: "Committee Member", company: "Parshwam Filtration LLP", image: kalpesh },
    { id: 5, name: "Vinod Dudhat", role: "Committee Member", company: "Lexus Water Tech Pvt. Ltd.", image: vinod },
    { id: 6, name: "Kanu Mehta", role: "Committee Member", company: "Cosmos Water Solution Pvt. Ltd.", image: kanu },
    { id: 7, name: "Ritesh Desai", role: "Committee Member", company: "Krinovate Systems & Communications", image: ritesh },
  ],
  "Ahmedabad & North Gujarat Chapter": [
    { id: 1, name: "Suresh Patel", role: "Committee Member", company: "Shreya Water Tech LLP.", image: Suresh },
    { id: 2, name: "Chirag Gajera", role: "Committee Member", company: "Orix Aquatech", image: Chirag },
    { id: 3, name: "Chetan Tapadiya", role: "Committee Member", company: "Nice Industries", image: Chetan },
    { id: 4, name: "Anil Jain", role: "Committee Member", company: "Zedtech Water Solution Pvt Ltd.", image: Anil },
    { id: 5, name: "Ashish Shah", role: "Committee Member", company: "Navakar Water Solution Pvt. Ltd.", image: Ashish },
    { id: 6, name: "Amrut Patel", role: "Committee Member", company: "Newpex Enterprise", image: Amrut },
    { id: 7, name: "Bhagvatilal Jain", role: "Committee Member", company: "New Tech Water Purifier Systems Pvtl. Ltd.", image: Jain },
  ],
  "South Gujarat Chapter": [
    { id: 1, name: "Bhavesh Patel", role: "Committee Member", company: "Meera Trade-Impex", image: Bhavesh },
    { id: 3, name: "Chetan Mehta", role: "Committee Member", company: "P Tech Aqua", image: Mehta },
    { id: 4, name: "Ashok Savaliya", role: "Committee Member", company: "Bhojal Filter House & Gas Gyser", image: Savliya },
    { id: 5, name: "Rahul Jhabak", role: "Committee Member", company: "Maxpure Water System Pvt. Ltd.", image: Rahul },
    { id: 6, name: "Vikram Savani", role: "Committee Member", company: "Velient Pec India Pvt. Ltd.", image: Vikram },
  ],
  "Saurashtra & Kutch Chapter": [
    { id: 1, name: "Vishal Sharma", role: "Committee Member", company: "Flowlance International LLP.", image: Vishal },
    { id: 4, name: "Sandip Mehta", role: "Committee Member", company: "Cloud International LLP.", image: Sandip },
    { id: 5, name: "Kamlesh Patel", role: "Committee Member", company: "Shakti Aquatech LLP.", image: Kamlesh },
  ],
  "Central Gujarat Chapter": [
    { id: 1, name: "Deepak Chhatriwala", role: "Committee Member", company: "Krishna Marketing", image: Dipak },
    { id: 3, name: "Ankit Patel", role: "Committee Member", company: "Nexus", image: Ankit },
  ], 
  "New Dehli Chapter": [
    { id: 2, name: "Mayank Aggarwal", role: "Committee Member", company: "AquaX Series", image: mayank },
    { id: 1, name: "Sunny Gulia", role: "Committee Member", company: "Real Ganga Enterprises", image: sunny },
  ],
  "Maharashtra Chapter": [
    { id: 3, name: "Ajay Shroff", role: "Committee Member", company: "Pratham Filters", image: ajay },
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
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            {member.name}
          </h3>
          <span className="text-xs font-semibold bg-[#0d5c7f] text-white px-2 py-1 rounded-full whitespace-nowrap">
            {member.role}
          </span>
        </div>

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