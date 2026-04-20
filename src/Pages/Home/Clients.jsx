import React, { useState, useEffect, useRef } from "react";

import accord from "../../assets/accord.webp";
import aishfilters from "../../assets/aishfilters.png";
import bhojal from "../../assets/bhojal.webp";
import bio from "../../assets/bio.webp";
import biorich from "../../assets/biorich.webp";
import bluecreek from "../../assets/bluecreek.webp";
import blueshell from "../../assets/blueshell.webp";
import braqqua from "../../assets/braqqua.webp";
import cenox from "../../assets/cenox.webp";
import center from "../../assets/center.webp";
import chasten from "../../assets/chasten.webp";
import claroa from "../../assets/claroa.webp";
import cleanwater from "../../assets/cleanwater.png";
import cloud from "../../assets/cloud.webp";
import cosmos from "../../assets/cosmos.webp";
import dax from "../../assets/dax.webp";
import doshion from "../../assets/doshion.png";
import duken from "../../assets/duken.webp";
import enagic from "../../assets/enagic.webp";
import euroflow from "../../assets/euroflow.webp";
import flexon from "../../assets/flexon.webp";
import gayatri from "../../assets/gayatri.webp";
import hasbromarketing from "../../assets/hasbromarketing.webp";
import healthy from "../../assets/healthy.webp";
import hiten from "../../assets/hiten.webp";
import infinity from "../../assets/infinity.webp";
import intrad from "../../assets/intrad.webp";
import ipc from "../../assets/ipc.webp";
import jalblue from "../../assets/jalblue.webp";
import joystick from "../../assets/joystick.webp";
import keep from "../../assets/keep.webp";
import khushi from "../../assets/khushi.webp";
import krinovate from "../../assets/krinovate.webp";
import lexcru from "../../assets/lexcru.png";
import lfa from "../../assets/lfa.webp";
import lucent from "../../assets/lucent.webp";
import maxpure from "../../assets/maxpure.webp";
import meetec from "../../assets/meetec.webp";
import newtech from "../../assets/newtech.webp";
import nile from "../../assets/nile.png";
import ontoz from "../../assets/ontoz.png";
import org from "../../assets/org.png";
import orix from "../../assets/orix.webp";
import osmotech from "../../assets/osmotech.webp";
import pratham from "../../assets/pratham.png";
import ptech from "../../assets/ptech.webp";
import pureone from "../../assets/pureone.webp";
import refchill from "../../assets/refchill.webp";
import seapure from "../../assets/seapure.webp";
import sheetal from "../../assets/sheetal.webp";
import shreya from "../../assets/shreya.webp";
import sur from "../../assets/sur.webp";
import swastik from "../../assets/swastik.webp";
import uma from "../../assets/uma.webp";
import vidi from "../../assets/vidi.png";
import virat from "../../assets/virat.webp";
import vraj from "../../assets/vraj.webp";
import zetta from "../../assets/zetta.webp";
import pournima from "../../assets/pournima.webp";
import aquapex from "../../assets/aquapex.jpg";
import waterkraft from "../../assets/waterkraft.jpg";
import voneera from "../../assets/voneera.jpg";
import phoenix from "../../assets/phoenix.webp";

const allImages = [
  nile, ontoz, vidi, org, cleanwater, doshion, lexcru,
  pratham, aishfilters, chasten, bio, lfa, euroflow, gayatri,
  hasbromarketing, healthy, keep, infinity, ipc, jalblue, joystick,
  osmotech, pournima, aquapex, seapure, shreya, waterkraft, voneera,
  newtech, orix, flexon, cenox, ptech, pureone, refchill, sheetal,
  sur, uma, swastik, virat, vraj, zetta, biorich, bhojal, phoenix,
  enagic, hiten, intrad, cosmos, bluecreek, khushi, krinovate, lucent,
  meetec, claroa, center, braqqua, accord, cloud, maxpure, blueshell,
  dax, duken
];

// ✅ RESPONSIVE VISIBILITY (IMPORTANT FIX)
const useVisibleItems = () => {
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 480) setVisible(2);        // 📱 mobile
      else if (w < 640) setVisible(3);   // 📱 large mobile
      else if (w < 1024) setVisible(4);  // 📟 tablet
      else setVisible(5);                // 💻 desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
};

const Clients = () => {
  const items = useVisibleItems();
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);

  const total = allImages.length;

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (dir) => {
    setStartIndex((prev) => (prev + dir + total) % total);
    startAuto();
  };

  const visibleImages = Array.from({ length: items }, (_, i) =>
    allImages[(startIndex + i) % total]
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-[#e3f2fd]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* TEXT */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-widest mb-4">
            Our Past <span className="text-[#1c87c9]">EXHIBITORS</span>
          </h2>
          <p className="text-gray-700 max-w-2xl text-sm sm:text-base mt-4">
            A legacy of trust built with industry-leading exhibitors who chose
            our platform to showcase innovation, excellence, and growth.
          </p>
        </div>

        {/* SLIDER ROW */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* LEFT */}
          <button
            onClick={() => goTo(-1)}
            className="group flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-[#1c87c9] bg-white flex items-center justify-center shadow-sm hover:bg-[#1c87c9] transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1c87c9] group-hover:text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* IMAGES */}
          <div className="flex gap-3 sm:gap-4 flex-1 overflow-hidden">
            {visibleImages.map((image, index) => (
              <div
                key={`${startIndex}-${index}`}
                className="flex-1 h-20 sm:h-24 md:h-28 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <img
                  src={image}
                  alt={`Exhibitor ${index}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => goTo(1)}
            className="group flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-[#1c87c9] bg-white flex items-center justify-center shadow-sm hover:bg-[#1c87c9] transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1c87c9] group-hover:text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Clients;