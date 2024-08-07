"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./Chatbox";
import Profile from "./Profile";
import Link from "next/link";
import { mockData } from "../data/mockData";

const Layout: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);
  const user = mockData.users.find((user) => user.id === selectedUserId);
  if (!user) return null;

  return (
    <div>
      <div className="relative w-full max-h-screen overflow-y-hidden">
        <div className="flex flex-col max-w-vw ">
          <div className="bg-[#0d6efd] flex min-h-[17vh]"></div>
          <div className="bg-[#98ccfd] min-h-[83vh] opacity-20"></div>
        </div>
      </div>
      <div className="min-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:min-w-[85vw] min-h-full">
        <div className="">
          <div className="hidden sm:block">
            <div className="flex justify-between items-center my-3 min-h-[6vh]">
              <div>
                <img
                  src={
                    "https://media.superdm.me/images/company/superdm/superdm-logo.jpeg"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <Link href="https://drive.google.com/file/d/1jQahLU0aqH7IpDBpRf8oOhSmKIKN9fPL/view">
                <div className="flex justify-center items-center">
                  <div className="text-white text-sm font-normal bg-blue-500 p-2 rounded-lg">
                    Get my Resume link
                  </div>
                  <div className="">
                    <img
                      src={
                        "https://media.superdm.me/images/profile/90a4797b1db0be1798c/yrl045h.jpeg"
                      }
                      alt="Profile"
                      className="w-10 h-10 ml-2 rounded-full"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className=" sm:hidden">
            <div className=" items-center my-3 min-h-[5vh]">
              <div className="flex ms-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M21 12a.75.75 0 0 1-.75.75H5.56l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 1.06l-5.47 5.47h14.69A.75.75 0 0 1 21 12Z"
                    ></path>
                  </svg>
                </div>
                <div className="">
                  <img
                    src={user.img}
                    alt="Profile"
                    className="w-8 h-8 ml-2 rounded-full"
                  />
                </div>
                <div className="ms-2 text-white font-medium">{user.name}</div>
              </div>
            </div>
          </div>

          <div className="flex bg-white lg:rounded-2xl min-h-[90vh]">
            <div className=" hidden sm:block w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
              <Sidebar onSelectUser={setSelectedUserId} />
            </div>
            <div className=" sm:w-3/5 lg:w-2/4 xl:w-2/4 2xl:w-2/4">
              <ChatBox userId={selectedUserId} />
            </div>
            <div className=" hidden xl:block lg:block 2xl:block lg:w-1/4 xl:w-1/4 2xl:w-1/4  z-0">
              <Profile userId={selectedUserId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
