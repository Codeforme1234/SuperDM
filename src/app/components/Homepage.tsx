// Layout.tsx
"use client"
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./Chatbox";
import Profile from "./Profile";

const Layout: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);

  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="flex flex-col max-w-vw ">
          <div className="bg-[#0d6efd] flex min-h-[17vh] "></div>
          <div className="bg-[#98ccfd] min-h-[83vh] opacity-20"></div>
        </div>
      </div>
      <div className="max-w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:min-w-[85vw] min-h-full">
        <div className="">
          <div className="flex justify-between items-center my-3 min-h-[6vh]">
            <div>logo</div>
            <div className="flex justify-center items-center">
              <div className="text-white text-sm font-normal bg-blue-500 p-2 rounded-lg">
                Get your SuperDM link
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
          </div>
          <div className="flex bg-white rounded-2xl min-h-[90vh]">
            <div className="w-1/4">
              <Sidebar onSelectUser={setSelectedUserId} />
            </div>
            <div className="w-2/4">
              <ChatBox userId={selectedUserId} />
            </div>
            <div className="w-1/4">
              <Profile userId={selectedUserId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
