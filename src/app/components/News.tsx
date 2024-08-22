import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

interface NewsProps {
  image: any;
  title: string;
  subtitle: string;
  link: string;
  date: string;
}

const News = ({ image, title, subtitle, link }: NewsProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-76 h-40">
        <Link href={link} target="_blank">
          <ExportedImage
            fill
            className="rounded-t-lg"
            alt="metagun button"
            src={image}></ExportedImage>
        </Link>
      </div>
      <div className="p-5 ">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
          {title}
        </p>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Đọc thêm
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default News;
