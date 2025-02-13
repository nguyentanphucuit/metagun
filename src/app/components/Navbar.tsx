"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import {
  ArchiveBoxXMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import Link from "next/link";

import { usePathname } from "next/navigation";

const navigation = [
  { name: "Trang chủ", href: "/", current: true },
  {
    name: "Tải game",
    href: "/download",
    // href: "https://drive.google.com/drive/folders/1UySJCRnl7k2sJ3mk7PGTeoWljBAuwXlV",
    blank: false,
    current: false,
  },
  { name: "Game Xưa", href: "/oldGame", current: false },
  { name: "Tin Tức", href: "/news", current: false },
  // { name: "Nhận CODE", href: "/code", current: false },
  { name: "Lộ trình", href: "/timeline", current: false },
  // { name: "Bán/Thuê Server", href: "/sellServer", current: false },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathname = usePathname();
  navigation.map((item) => {
    item.href == pathname ? (item.current = true) : (item.current = false);
  });
  return (
    <Disclosure as="nav" className="absolute transparent w-full">
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 bg-orange-400 text-orange-700 hover:bg-orange-00 hover:text-orange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    target={item.blank ? "_blank" : "_self"}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-orange-400 text-white"
                        : "bg-orange-600 text-orange-200 hover:bg-orange-300 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 pl-6">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              target={item.blank ? "_blank" : "_self"}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-orange-400 text-white"
                  : "bg-orange-600 text-orange-200 hover:bg-orange-300 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
