import React from "react";
import HMButton from "./HMButton";

function BannerContent({ mainHeader, description = "", buttonArr = [] }) {
  return (
    <div>
      <h3 class="text-white font-bold text-4xl leading-5 mb-10">
        {mainHeader}
      </h3>
      <p class="text-white text-xs">{description}</p>
      <ul class="flex justify-center mt-4">
        {buttonArr.map((btn) => {
          return (
            <li>
              <HMButton btnName={btn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BannerContent;
