import React from "react";

const Banner = ({ children, src = "", srcSet = "", showGrayShade = false }) => {
  return (
    <div class="flex justify-center">
      <div class="relative bg-cover bg-no-repeat w-1/2 h-2/4 flex justify-center">
        {/* Took from HM Site */}
        <span class="box-border block overflow-hidden min-w-full h-full bg-none opacity-100 border-0 m-0 p-0 absolute inset-0">
          <img
            alt="Campaign"
            sizes="(max-width: 1024px) 70vw, 600px"
            srcset={srcSet}
            src={src}
            decoding="async"
            class="absolute inset-0 box-border p-0 border-0 m-auto block min-w-full max-w-full min-h-full max-h-full object-fill object-center after:"
          />
        </span>
        <div class="absolute bottom-0 py-11 left-1/2 transform -translate-x-1/2 z-10">
          {children}
        </div>
        {showGrayShade ? (
          <span
            class="absolute top-0 bottom-0 left-0 right-0 z-1"
            style={{
              background:
                "linear-gradient(180deg,transparent 50%,rgba(0,0,0,.35))",
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Banner;
