// Sidebar.tsx
import React from "react";
import { mockData } from "../data/mockData";

interface SidebarProps {
  onSelectUser: (userId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectUser }) => {
  const users = mockData.users;

  return (
    <div className="p-4 overflow-y-auto border-r">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex space-y-2 items-center space-x-2 cursor-pointer"
          onClick={() => onSelectUser(user.id)}
        >
          <div>
            <img src={user.img} alt="Profile" className="w-14 h-14 ml-2 rounded-full" />
          </div>
          <div>
            <div className="text-xs font-medium ">{user.name}</div>
            <div className="text-[0.7rem] mt-1 opacity-70">{user.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
