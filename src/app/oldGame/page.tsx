import React from "react";
import news from "/public/assets/img/MTG-Background-Open-T2-25.png";
import ExportedImage from "next-image-export-optimizer";

const OldGame = () => {
  return (
    <div>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={news}></ExportedImage>
      <div className="p-20">
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 sm:pb-40 lg:pb-48 mt-4">
            <div className="flex flex-row mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  TỔNG HỢP GAME HAY THỜI XƯA
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Tổng hợp những tựa game huyền thoại gắn liền với tuổi thơ anh
                  em 9x.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default OldGame;
