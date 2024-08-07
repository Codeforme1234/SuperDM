// Sidebar.tsx
import React, { useState } from "react";
import { mockData } from "../data/mockData";

interface SidebarProps {
  onSelectUser: (userId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectUser }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const users = mockData.users;

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    onSelectUser(userId);
  };

  return (
    <div className="pt-4  overflow-y-auto space-y-3 border-r">
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex space-y-2 items-center space-x-2 cursor-pointer p-2 ${
            selectedUserId === user.id ? "bg-gray-0" : ""
          }`}
          onClick={() => handleUserClick(user.id)}
        >
          <div>
            {user.id < 4 && (
              <img
                src={user.img}
                alt="Profile"
                className="w-14 h-14 ml-2 rounded-full"
              />
            )}
          </div>
          {user.id != 4 && (
            <div>
              <div className="text-xs font-medium">{user.name}</div>
              <div className="text-[0.7rem] mt-1 opacity-70">{user.role}</div>
            </div>
          )}
          {
            user.id==4 && (
              <div className=" justify-center items-center">
              <div className="text-xs ml-10 border p-4 rounded-xl text-center font-medium">{user.name}</div>
            </div>
            )
          }
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
