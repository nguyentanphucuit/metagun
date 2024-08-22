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

const ACCESS_TOKEN =
  "EAALlbvtst7ABO9nDaNgb5E3LUjZAL7XefieZCZCU7tyFpYYAmFugee0tgyTuReorLllxWeSk3ZAZBZBjp2wd67klYp30pzUrGHTZAknzMN5OqGSSqNVIu7ZBxa9418E53p4kSgFvRpZA0dVHOrtZBKTnrmxNxx58oH15K1WloJD9JMWVpwUituGimVEuS7x2TKUnE3pvr4DI7ICAbiAtnV5UzfclnRm62S3809EzZCVU00i";
const NewsList = async () => {
  const data = await fetch(
    `https://graph.facebook.com/v20.0/332634076590995/posts?limit=5&fields=id,message,permalink_url,attachments{media_type,media_url,source},full_picture&access_token=${ACCESS_TOKEN}`
  ).then((res) => res.json());
  news.map((item, index) => {
    item.title = data.data[index].message;
    item.image = data.data[index].full_picture;
    item.link = data.data[index].permalink_url;
  });
  return (
    <>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={news1}></ExportedImage>
      <div className="p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {news.map((news) => (
            <News key={news.id} {...news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
