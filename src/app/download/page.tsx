import React from "react";
import TabDownload from "../components/TabDownload";

const Download = () => {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <div className="text-xl py-12">
          <h1>HƯỚNG DẪN TẢI GAME CHO TỪNG THIẾT BỊ</h1>
        </div>
        <TabDownload />
      </div>
    </div>
  );
};

export default Download;
