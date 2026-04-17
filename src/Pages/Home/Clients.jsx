import React from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.jpg";
import img31 from "../../assets/img31.jpg";
import img32 from "../../assets/img32.jpg";
import img33 from "../../assets/img33.jpg";
import img34 from "../../assets/img34.jpg";
import img35 from "../../assets/img35.jpg";
import img36 from "../../assets/img36.jpg";
import img37 from "../../assets/img37.jpg";
import img38 from "../../assets/img38.jpg";
import img39 from "../../assets/img39.jpg";
import img40 from "../../assets/img40.jpg";
import img41 from "../../assets/img41.jpg";
import img42 from "../../assets/img42.jpg";
import img43 from "../../assets/img43.jpg";
import img44 from "../../assets/img44.jpg";
import img45 from "../../assets/img45.jpg";
import img46 from "../../assets/img46.jpg";
import img47 from "../../assets/img47.jpg";
import img48 from "../../assets/img48.jpg";
import img49 from "../../assets/img49.jpg";
import img50 from "../../assets/img50.jpg";
import img51 from "../../assets/img51.jpg";
import img52 from "../../assets/img52.jpg";
import img53 from "../../assets/img53.jpg";
import img54 from "../../assets/img54.jpg";
import img55 from "../../assets/img55.jpg";
import img56 from "../../assets/img56.jpg";
import img57 from "../../assets/img57.jpg";
import img58 from "../../assets/img58.jpg";
import img59 from "../../assets/img59.jpg";
import img60 from "../../assets/img60.jpg";
import img61 from "../../assets/img61.jpg";
import img62 from "../../assets/img62.jpg";
import img63 from "../../assets/img63.jpg";
import img64 from "../../assets/img64.jpg";

const Clients = () => {
  const images = [
    img54, img55, img56, img57, img58, img59, img60,
    img61, img62, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img63, img64
  ];

  return (
    <section className="flex items-center justify-center px-6 py-20 bg-[#e3f2fd]/50 overflow-hidden">
      <div className="max-w-7xl w-full">

        {/* ===== TEXT ===== */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-widest mb-6">
            Our Past <span className="text-[#1c87c9]">EXHIBITORS</span>
          </h2>

          <p className="text-gray-700 max-w-2xl mt-6">
            A legacy of trust built with industry-leading exhibitors who chose
            our platform to showcase innovation, excellence, and growth.
          </p>
        </div>

        {/* ===== MARQUEE ===== */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-6 w-max">

            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="h-28 min-w-[150px] bg-white rounded-xl flex items-center justify-center p-4 shadow-md hover:shadow-xl transition"
              >
                <img
                  src={image}
                  alt={`Exhibitor ${index}`}
                  className="h-full object-contain"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;