import React from "react";

const Formpage = () => {
  return (
    <div className="w-full md:min-h-screen bg-gray-50 flex items-center justify-center md:py-25 py-25 pb-0">

      {/* Iframe Container */}
      <div className="w-full max-w-4xl h-[95vh] md:h-[65vh] overflow-hidden relative md:pt-12">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScw9UcDrxfhIRHVySZd5uxkGZLGEIYz_xFf5si1EyEIjiqJpw/viewform?embedded=true"
          className="w-full h-full border-0"
          title="Membership Form"
        />
      </div>

    </div>
  );
};

export default Formpage;