import React, { useState } from "react";

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
  { id: 1, name: "Ashit Doshi", role: "President", company: "Doshion Polysciences Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464194/AshitDoshi_iaz8my.png" },
  { id: 2, name: "Rishabh Sanghvi", role: "Vice President", company: "Purosis International LLP", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464608/Rishabh_uij4zv.jpg" },
  { id: 3, name: "Bhupesh Patel", role: "Secretary", company: "ORG EngiTech Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464210/Bhupesh_kejmhd.jpg" },
  { id: 4, name: "Gautam Shah", role: "Treasurer", company: "Lexcru Water Tech Pvt. Ltd", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464285/Gautam_z2crwn.jpg" },
  { id: 7, name: "Kailash Shah", role: "Joint Treasurer", company: "MaxPure Water System Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464418/Kailash_svjct2.jpg" },
  { id: 5, name: "Sachin Ringwala", role: "Dy. Secretary", company: "Aishwaryam Filters", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464612/Sachin_eecthu.jpg" },
  // { id: 6, name: "Sunil Raval", role: "Joint Secretary", company: "Unicare Water Technology Pvt Ltd.", image: Sunil },
],

  "Steering Committee": [
    { id: 1, name: "Sampat Jhabak", role: "Committee Member", company: "MaxPure Water System Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464614/Sampat_Jhabak_xwbdvu.jpg" },
    { id: 2, name: "Ashok Patel", role: "Committee Member", company: "Shreya Water Tech LLP", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464195/Ashok_Patel_uipkrv.jpg" },
    { id: 3, name: "Nishit Doshi", role: "Committee Member", company: "Fivebro Water Services Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464507/Nishit_k8cwhc.jpg" },
    { id: 4, name: "Kalpesh Shah", role: "Committee Member", company: "Parshwam Filtration LLP", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464420/Kalpesh_ihinob.jpg" },
    { id: 5, name: "Vinod Dudhat", role: "Committee Member", company: "Lexus Water Tech Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464698/Vinod_b0enkh.jpg" },
    { id: 6, name: "Kanu Mehta", role: "Committee Member", company: "Cosmos Water Solution Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464424/Kanu_ydcqxy.jpg" },
    { id: 7, name: "Ritesh Desai", role: "Committee Member", company: "Krinovate Systems & Communications", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464610/Ritesh_j7x0yj.jpg" },
  ],
  "Ahmedabad & North Gujarat Chapter": [
    { id: 1, name: "Suresh Patel", role: "Committee Member", company: "Shreya Water Tech LLP.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464677/Suresh_awtg73.jpg" },
    { id: 2, name: "Chirag Gajera", role: "Committee Member", company: "Orix Aquatech", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464235/Chirag_nr9q19.jpg" },
    { id: 3, name: "Chetan Tapadiya", role: "Committee Member", company: "Nice Industries", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464232/Chetan_uhakhe.jpg" },
    { id: 4, name: "Anil Jain", role: "Committee Member", company: "Zedtech Water Solution Pvt Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464190/Anil_uj0ntv.jpg" },
    { id: 5, name: "Ashish Shah", role: "Committee Member", company: "Navakar Water Solution Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464193/Ashish_etcsny.png" },
    { id: 6, name: "Amrut Patel", role: "Committee Member", company: "Newpex Enterprise", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464188/Amrut_j0pynk.jpg" },
    { id: 7, name: "Bhagvatilal Jain", role: "Committee Member", company: "New Tech Water Purifier Systems Pvtl. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464414/Jain_dup26w.jpg" },
  ],
  "South Gujarat Chapter": [
    { id: 1, name: "Bhavesh Patel", role: "Committee Member", company: "Meera Trade-Impex", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464209/Bhavesh_xzck0f.jpg" },
    { id: 3, name: "Chetan Mehta", role: "Committee Member", company: "P Tech Aqua", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464233/ChetanMaheta_sre6zz.jpg" },
    { id: 4, name: "Ashok Savaliya", role: "Committee Member", company: "Bhojal Filter House & Gas Gyser", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464620/Savliya_rdbsmb.jpg" },
    { id: 5, name: "Rahul Jhabak", role: "Committee Member", company: "Maxpure Water System Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464587/Rahul_xvcqkj.jpg" },
    { id: 6, name: "Vikram Savani", role: "Committee Member", company: "Velient Pec India Pvt. Ltd.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464695/Vikram_jr5w6f.jpg" },
  ],
  "Saurashtra & Kutch Chapter": [
    { id: 1, name: "Vishal Sharma", role: "Committee Member", company: "Flowlance International LLP.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464700/Vishal_j6sjsa.jpg" },
    { id: 4, name: "Sandip Mehta", role: "Committee Member", company: "Cloud International LLP.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464616/Sandip_kut4gp.jpg" },
    { id: 5, name: "Kamlesh Patel", role: "Committee Member", company: "Shakti Aquatech LLP.", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464423/Kamlesh_mrrdup.jpg" },
  ],
  "Central Gujarat Chapter": [
    { id: 1, name: "Deepak Chhatriwala", role: "Committee Member", company: "Krishna Marketing", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464241/Dipak_dg9iav.jpg" },
    { id: 3, name: "Ankit Patel", role: "Committee Member", company: "Nexus", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464191/Ankit_ss1al1.jpg" },
  ], 
  "New Dehli Chapter": [
    { id: 2, name: "Mayank Aggarwal", role: "Committee Member", company: "AquaX Series", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464450/Mayank_qfdkwk.jpg" },
    { id: 1, name: "Sunny Gulia", role: "Committee Member", company: "Real Ganga Enterprises", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464644/Sunny_ibxbjj.jpg" },
  ],
  "Maharashtra Chapter": [
    { id: 3, name: "Ajay Shroff", role: "Committee Member", company: "Pratham Filters", image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777464187/Ajay_bzjrdn.jpg" },
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
    <div className="bg-white min-h-screen font-sans antialiased text-slate-900">
      <header className="pt-5 pb-8 px-6 border-b border-slate-100 bg-[#0d5c7f]">
        <div className="max-w-7xl mx-auto p-4 md:p-0">
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