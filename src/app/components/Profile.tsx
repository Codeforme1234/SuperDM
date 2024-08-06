// Profile.tsx
import React from "react";
import { mockData } from "../data/mockData";

interface ProfileProps {
  userId: number;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const user = mockData.users.find((user) => user.id === userId);

  if (!user) return null;

  return (
    <div className="p-4 overflow-y-auto border-l">
      <div className="flex flex-col align-center items-center ">
        <div className="mb-2">
          <img src={user.img} alt="Profile" className="w-16 h-16 ml-2 rounded-full" />
        </div>
        <div className="mb-1 text-md font-medium">{user.name}</div>
        <div className="mb-1 text-sm opacity-95">{user.role}</div>
        <div className="text-sm opacity-60">{user.location}</div>
      </div>
      <div className="mt-6">
        <div className="text-xs uppercase font-semibold opacity-70 mb-5">Experience</div>
        <ul className="space-y-2">
          {user.experience.map((exp, index) => (
            <li key={index}>
              <div className="flex align-center justify-between ">
                <div>img</div>
                <div>
                  <div className="text-sm font-medium">{exp.position}</div>
                  <div className="text-xs opacity-95">{exp.company}</div>
                  <div className="text-xs opacity-80">{exp.duration}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
