import React from "react";
import News from "../components/News";
import { title } from "process";
import news1 from "/public/assets/img/bgmetagun1.jpg";
import ExportedImage from "next-image-export-optimizer";

const news = [
  {
    id: 0,
    title: "Noteworthy technology acquisitions 2021",
    subtitle:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date: "date",
    image: news1,
    link: "#",
  },
  {
    id: 1,
    title: "Noteworthy technology acquisitions 2021",
    subtitle:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date: "date",
    image: news1,
    link: "#",
  },
  {
    id: 2,
    title: "Noteworthy technology acquisitions 2021",
    subtitle:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date: "date",
    image: news1,
    link: "#",
  },
  {
    id: 3,
    title: "Noteworthy technology acquisitions 2021",
    subtitle:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date: "date",
    image: news1,
    link: "#",
  },
];

const NewsList = () => {
  return (
    <>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={news1}></ExportedImage>
      {/* <div className="pt-20 flex justify-center items-center gap-4">
        {news.map((news) => (
          <News key={news.id} {...news} />
        ))}
      </div> */}
    </>
  );
};

export default NewsList;
