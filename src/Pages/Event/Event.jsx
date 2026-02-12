import React, { useState } from "react";

// --------------------- IMAGE IMPORTS ---------------------
import bisHero from "../../assets/BIS-Invitation.jpg";
import bis1 from "../../assets/bis1.jpg";
import bis2 from "../../assets/bis2.jpg";
import bis3 from "../../assets/bis3.jpg";
import bis4 from "../../assets/bis4.jpg";
import bis5 from "../../assets/bis5.jpg";
import bis6 from "../../assets/bis6.jpg";
import bis7 from "../../assets/bis7.jpg";
import bis8 from "../../assets/bis8.jpg";
import bis9 from "../../assets/bis9.jpg";
import bis10 from "../../assets/bis10.jpg";
import bis11 from "../../assets/bis11.jpg";

// Industrial Meeting Tab Images
import invitaionMeet from "../../assets/InvitationMeet1.jpg";
import indus1 from "../../assets/indus1.jpg";
import indus2 from "../../assets/indus2.jpg";
import indus3 from "../../assets/indus3.jpg";
import indus4 from "../../assets/indus4.jpg";
import indus5 from "../../assets/indus5.jpg";
import indus6 from "../../assets/indus6.jpg";
import indus7 from "../../assets/indus7.jpg";
import indus8 from "../../assets/indus8.jpg";


import meetHero from "../../assets/meet-invitaion.jpg";
import meet1 from "../../assets/meet1.jpg";
import meet2 from "../../assets/meet2.jpg";
import meet3 from "../../assets/meet3.jpg";
import meet4 from "../../assets/meet4.jpg";
import meet5 from "../../assets/meet5.jpg";


import suratHero from "../../assets/InvitationMeet2.jpg";
import surat1 from "../../assets/suratt1.jpg";
import surat2 from "../../assets/suratt2.jpg";
import surat3 from "../../assets/suratt3.jpg";
import surat4 from "../../assets/suratt4.jpg";
import surat5 from "../../assets/suratt5.jpg";
import surat6 from "../../assets/suratt6.jpg";
import surat7 from "../../assets/suratt7.jpg";
import surat8 from "../../assets/suratt8.jpg";
import surat9 from "../../assets/suratt9.jpg";
import surat10 from "../../assets/suratt10.jpg";
import surat11 from "../../assets/suratt11.jpg";
import surat12 from "../../assets/suratt12.jpg";


import nadiadHero from "../../assets/invitationMeet3.jpg";
import nadiad1 from "../../assets/nadiad1.jpg";
import nadiad2 from "../../assets/nadiad2.jpg";
import nadiad3 from "../../assets/nadiad3.jpg";
import nadiad4 from "../../assets/nadiad4.jpg";
import nadiad5 from "../../assets/nadiad5.jpg";
import nadiad6 from "../../assets/nadiad6.jpg";

import motivationHero1 from "../../assets/motivation-invitaion1.jpg";
// import motivationHero2 from "../../assets/motivation-invitaion2.jpg";

import motivationVideo from "../../assets/motivation-video.mp4";

import motivation1 from "../../assets/motivation1.jpg";
import motivation2 from "../../assets/motivation2.jpg";
import motivation3 from "../../assets/motivation3.jpg";
import motivation4 from "../../assets/motivation4.jpg";
import motivation5 from "../../assets/motivation5.jpg";
import motivation6 from "../../assets/motivation6.jpg";
import motivation7 from "../../assets/motivation7.jpg";
import motivation8 from "../../assets/motivation8.jpg";
import motivation9 from "../../assets/motivation9.jpg";
import motivation10 from "../../assets/motivation10.jpg";
import motivation11 from "../../assets/motivation11.jpg";



import rajkotHero from "../../assets/ahemdabad-invitaion.jpg";

import rajkot1 from "../../assets/rajkot1.jpg";
import rajkot2 from "../../assets/rajkot2.jpg";
import rajkot3 from "../../assets/rajkot3.jpg";
import rajkot4 from "../../assets/rajkot4.jpg";
import rajkot5 from "../../assets/rajkot5.jpg";
import rajkot6 from "../../assets/rajkot6.jpg";
import rajkot7 from "../../assets/rajkot7.jpg";

import barodaHero from "../../assets/baroda-invitaion.jpg";

import barodaPromoVideo from "../../assets/baroda-pramotion.mp4";
import barodaVideo from "../../assets/baroda-video.mp4";

import barodaa1 from "../../assets/barodaa1.jpg";
import barodaa2 from "../../assets/barodaa2.jpg";
import barodaa3 from "../../assets/barodaa3.jpg";
import barodaa4 from "../../assets/barodaa4.jpg";
import barodaa5 from "../../assets/barodaa5.jpg";


import suratOfficeHero1 from "../../assets/officee-invitaion2.jpg";
// import suratOfficeHero2 from "../../assets/officee-invitaion2.jpg";

import officeVideo1 from "../../assets/officee1-video.mp4";
import officeVideo2 from "../../assets/officee2-video.mp4";

import officee1 from "../../assets/officee1.jpg";
import officee2 from "../../assets/officee2.jpg";
import officee3 from "../../assets/officee3.jpg";
import officee4 from "../../assets/officee4.jpg";
import officee5 from "../../assets/officee5.jpg";
import officee6 from "../../assets/officee6.jpg";
import officee7 from "../../assets/officee7.jpg";
import officee8 from "../../assets/officee8.jpg";
import officee9 from "../../assets/officee9.jpg";
import officee10 from "../../assets/officee10.jpg";
import officee11 from "../../assets/officee11.jpg";
import officee12 from "../../assets/officee12.jpg";
import officee13 from "../../assets/officee13.jpg";
import officee14 from "../../assets/officee14.jpg";
import officee15 from "../../assets/officee15.jpg";
import officee16 from "../../assets/officee16.jpg";
import officee17 from "../../assets/officee17.jpg";
import officee18 from "../../assets/officee18.jpg";
import officee19 from "../../assets/officee19.jpg";
import officee20 from "../../assets/officee20.jpg";
import officee21 from "../../assets/officee21.jpg";
import officee22 from "../../assets/officee22.jpg";
import officee23 from "../../assets/officee23.jpg";
import officee24 from "../../assets/officee24.jpg";
import officee25 from "../../assets/officee25.jpg";
import officee26 from "../../assets/officee26.jpg";

import podcaste1 from "../../assets/podcaste1.jpg";
import podcaste2 from "../../assets/podcaste2.jpg";

const tabs = [
  {
    name: "WAPTAI GST PODCAST 31st Jan 2026",
    hero: podcaste1,
    images: [podcaste1, podcaste2],
    youtubeId: "ukBT4wr9CiI",
    videos: [],
    reels: [
      "https://www.instagram.com/reel/DUQh3UqjBHo/embed"
    ],
  },
  {
    name: "29th May 2025 BIS Training Meeting Ahemedabad",
    hero: bisHero,
    images: [bis1, bis2, bis3, bis4, bis5, bis6, bis7, bis8, bis9, bis10, bis11],
    videos: [],
  },
  {
    name: "28th Dec 2024 Industrial Meeting & Motivational Training",
    hero: invitaionMeet,
    images: [indus1, indus2, indus3, indus4, indus5, indus6, indus7, indus8],
    videos: [],
  },
  {
    name: "24th May Waptai Member Meet Ahmedabad",
    hero: meetHero,
    images: [meet1, meet2, meet3, meet4, meet5],
    videos: [],
  },


  {
    name: "24th July Surat Member Meet",
    hero: suratHero,
    images: [
      surat1, surat2, surat3, surat4, surat5, surat6,
      surat7, surat8, surat9, surat10, surat11, surat12
    ],
    videos: [],
  },
  {
    name: "19th April 2025 Nadiad Member Meet & Industrial Training",
    hero: nadiadHero,
    images: [nadiad1, nadiad2, nadiad3, nadiad4, nadiad5, nadiad6],
    videos: [],
  },
  {
    name: "18th Sep 2025 Motivation & Entertainment Ahmedabad",
    hero: motivationHero1,//  multiple invitations
    images: [
      motivation1, motivation2, motivation3, motivation4, motivation5,
      motivation6, motivation7, motivation8, motivation9, motivation10, motivation11
    ],
    videos: [motivationVideo],
  },
  {
    name: "18th April 2025 Rajkot Member Meet & Industrial Training",
    hero: rajkotHero,
    images: [
      rajkot1,
      rajkot2,
      rajkot3,
      rajkot4,
      rajkot5,
      rajkot6,
      rajkot7,
    ],
    videos: [],
  },
  {
    name: "5th Sep 2025 Motivation Event Baroda",
    hero: barodaHero,
    images: [barodaa1, barodaa2, barodaa3, barodaa4, barodaa5],
    videos: [barodaPromoVideo, barodaVideo],
  },


  {
    name: "5th Oct 2025 Surat Office Inauguration",
    hero: suratOfficeHero1, // 👈 2 invitations
    images: [
      officee1, officee2, officee3, officee4, officee5, officee6,
      officee7, officee8, officee9, officee10, officee11, officee12,
      officee13, officee14, officee15, officee16, officee17, officee18,
      officee19, officee20, officee21, officee22, officee23, officee24,
      officee25, officee26,
    ],
    videos: [officeVideo1, officeVideo2],
  },



];

export default function EventTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="bg-gradient-to-br from-sky-100 via-white to-sky-50 min-h-screen">
      <div className="w-full px-10 pt-35 pb-16">

        {/* ================= PAGE HEADING ================= */}
        <div className="md:mb-20 md:mt-10">
          <h1 className="text-3xl md:text-5xl md:font-extrabold font-bold text-center text-gray-800">
            Our <span className="text-sky-600">Events</span> & Celebrations
          </h1>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mt-5">
            Explore our meetings, trainings, motivational programs and memorable moments.
          </p>
        </div>




        {/* ================= TABS ================= */}
  <div className="w-full mx-auto md:px-6 py-12 lg:flex lg:gap-8 justify-between">

  {/* ================= SIDEBAR ================= */}
  <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:ml-12">
    <nav className="flex flex-col gap-3 sticky top-24">

      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`
            w-full px-4 py-3 rounded-lg text-sm font-medium transition-all text-left break-words
            ${activeTab === index
              ? "bg-slate-50 border-l-4 border-sky-600 text-sky-700"
              : "text-slate-600 hover:bg-slate-50"
            }
          `}
        >
          {/* ===== Text responsive wrapping ===== */}
          <div className="w-full overflow-hidden text-ellipsis leading-snug 
                          md:whitespace-normal lg:whitespace-nowrap">
            {tab.name}
          </div>
        </button>
      ))}

    </nav>
  </aside>




          {/* ================= RIGHT : INVITATION CONTENT ================= */}

          <main className="lg:w-4xl">



            {/* Invitation Card */}
            {/* Invitation Card */}
            <div className="bg-transparent md:bg-white max-w-full mt-10 md:mt-0 rounded-none md:rounded-2xl shadow-none md:shadow-xl p-0 md:p-8">

              {/* Card Title */}
              <div className="flex items-center gap-3 mb-6 md:mb-6">
                {tabs[activeTab].name !== "WAPTAI GST PODCAST 31st Jan 2026" && (
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <h3 className="text-xl font-bold text-slate-800">
                      Event Invitation
                    </h3>
                  </div>
                )}
              </div>

              <div className="aspect-[4/3] rounded-none md:rounded-xl bg-transparent md:bg-slate-100 ">
                {tabs[activeTab].youtubeId ? (
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${tabs[activeTab].youtubeId}`}
                    title="WAPTAI GST PODCAST"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={tabs[activeTab].hero}
                    alt="Event Invitation"
                    className="w-full h-auto  cursor-pointer transition-transform duration-500 md:rounded-xl"
                    onClick={() => openModal(tabs[activeTab].hero)}
                  />
                )}
              </div>
            </div>


            {/* EMPTY STATE */}
            {!tabs[activeTab]?.hero && (
              <div className="py-20 text-center border border-dashed border-slate-200 rounded-xl mt-10">
                <p className="text-slate-400 italic font-serif text-lg">
                  Invitation for this event is being updated.
                </p>
              </div>
            )}
          </main>
        </div>



        {/* ================= IMAGE GALLERY ================= */}
        <div className="md:mt-16">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M3 7h18M3 17h18M5 7v10M19 7v10" />
            </svg>

            {tabs[activeTab].name === "WAPTAI GST PODCAST 31st Jan 2026" ? (
              <h3 className="text-xl font-bold text-gray-800">
                Podcast Images
              </h3>
            ) : (
              <h3 className="text-xl font-bold text-gray-800">
                Event Moments
              </h3>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {tabs[activeTab].images.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                />
                {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition">
                  View Image
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* ================= VIDEOS ================= */}
        {tabs[activeTab].videos.length > 0 && (
          <div className="mt-20">

            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>

              <h3 className="text-xl font-bold text-gray-800">
                Event Videos
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {tabs[activeTab].videos.map((vid, idx) => (
                <video
                  key={idx}
                  src={vid}
                  controls
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* ================= REELS ================= */}
        {tabs[activeTab].reels?.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>

              <h3 className="text-xl font-bold text-gray-800">
                Podcast Reels
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {tabs[activeTab].reels.map((reel, idx) => (
                <iframe
                  key={idx}
                  src={reel}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-lg"
                  title={`reel-${idx}`}
                ></iframe>
              ))}
            </div>
          </div>
        )}


        {/* ================= IMAGE MODAL ================= */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full 
                 text-white text-3xl hover:bg-white/5 transition"
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="animate-[zoomIn_0.25s_ease-out]">
              <img
                src={modalImage}
                alt=""
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
