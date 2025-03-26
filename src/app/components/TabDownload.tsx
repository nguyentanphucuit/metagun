import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import WindowsIcon from "/public/assets/img/windows.svg";
import AppleIcon from "/public/assets/img/apple.svg";
import GoogleIcon from "/public/assets/img/google.svg";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const categories = [
  {
    name: "Windows",
    posts: [
      {
        id: 1,
        title: "Bước 1",
        content: "Nhấn vào đây để tải về",
        href: "https://s.net.vn/foyV",
        blank: true,
        icon: WindowsIcon,
      },
      {
        id: 2,
        title: "Bước 2",
        content: "Tải về và sử dụng thôi",
      },
    ],
  },
  {
    name: "IOS",
    posts: [
      {
        id: 1,
        title: "Bước 1",
        content: "Nhấn vào đây để tải về",
        href: "https://testflight.apple.com/join/prdwCcCP",
        blank: true,
        icon: AppleIcon,
      },
      {
        id: 2,
        title: "Bước 2",
        content: "Tải và sử dụng theo dướng dẫn là xong",
      },
      // {
      //   id: 2,
      //   title: "Bước 2",
      //   content:
      //     "Nhấn vào cài đặt, kéo xuống dưới cùng tìm dòng Quản lý VPN & Ứng dụng",
      // },
      // {
      //   id: 3,
      //   title: "Bước 3",
      //   content: "Nhấn vào Sunshine Insurance Group -> Chọn tin tưởng -> OK",
      // },
      // {
      //   id: 4,
      //   title: "Chơi trên mobile",
      //   content: "",
      //   video: "https://metagun.vn/assets/video/TutorialSetup.mp4",
      // },
      // {
      //   id: 5,
      //   title: "Xem hướng dẫn chi tiết",
      //   content: "",
      //   video: "https://metagun.vn/assets/video/DetailSetup.mp4",
      // },
    ],
  },
  {
    name: "Android",
    posts: [
      {
        id: 1,
        title: "Bước 1",
        content: "Nhấn vào đây để tải về",
        href: "https://mega.nz/file/TQtWEIrb#CMb4Jn2paNi94XUHkr8m1YWEqrq27YlaSZ53uhDtMYQ",
        blank: true,
        icon: GoogleIcon,
      },
      {
        id: 2,
        title: "Bước 2",
        content: "Tải về và sử dụng thôi",
      },
      {
        id: 3,
        title: "Chơi trên mobile",
        content: "",
        video: "https://metagun.vn/assets/video/TutorialSetup.mp4",
      },
    ],
  },
  {
    name: "MacOS",
    posts: [
      {
        id: 1,
        title: "Bước 1",
        content: "Nhấn vào đây để tải về",
        href: "https://bom.so/1zO97I",
        blank: true,
        icon: AppleIcon,
      },
      {
        id: 2,
        title: "Bước 2",
        content: "Tải về và sử dụng thôi (Dành cho MacOS 2022+)",
      },
    ],
  },
];

const TabDownload = () => {
  return (
    <TabGroup>
      <TabList className="flex gap-4">
        {categories.map(({ name }) => (
          <Tab
            key={name}
            className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-3">
        {categories.map(({ name, posts }) => (
          <TabPanel key={name} className="rounded-xl bg-black/5 p-3">
            <ul>
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="relative rounded-md p-3 text-sm/6 transition hover:bg-black/5">
                  <span className="inset-0">{post.title}</span>
                  <ul className="flex gap-2 text-black/50" aria-hidden="true">
                    <Link
                      key={post.id}
                      target={post.blank ? "_blank" : "_self"}
                      href={post.href ?? "#"}
                      className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                      {post.icon && (
                        <ExportedImage
                          className=""
                          width={16}
                          height={16}
                          alt="metagun button"
                          src={post.icon}></ExportedImage>
                      )}
                      <span className="w-full px-2">{post.content}</span>

                      {post.icon && (
                        <svg
                          className="w-4 h-4 ms-2 rtl:rotate-180"
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
                      )}
                      {post.video && (
                        <video autoPlay loop muted preload="none">
                          <source src={post.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </Link>
                  </ul>
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default TabDownload;
