import React from "react";
import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-44">
        <div className="col-span-3 pt-5 px-3">
          <div className="text-3xl h-fit w-fit hover:bg-gray-400 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 font-semibold">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-400 rounded-full px-4 py-2 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
              <div className="mt-3 px-2">
                <button className="text-sm font-bold bg-sky-500 p-3 rounded-full w-full">
                  Tweet
                </button>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-span-3 "></div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-200"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
