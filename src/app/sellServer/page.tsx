import React from "react";
import news from "/public/assets/img/MTG-Background-Open-T2-25.png";
import zaloSellSource from "/public/assets/img/zaloSellSource.jpg";
import ExportedImage from "next-image-export-optimizer";

const SellServer = () => {
  return (
    <div>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={news}></ExportedImage>
      <div className="p-20">
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 sm:pb-40  lg:pb-48 ">
            <div className="flex flex-row mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Bán/Thuê Source Game
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Anh em có nhu cầu mua hoặc thuê Source Game vui lòng liên hệ
                  qua zalo sau nhé. Cảm ơn tất cả mọi người đã ủng hộ.
                </p>
              </div>
              <div>
                {/* Decorative image grid */}
                <ExportedImage
                  className="rounded-t-lg"
                  alt="sell source button"
                  width={500}
                  height={500}
                  src={zaloSellSource}></ExportedImage>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default SellServer;
