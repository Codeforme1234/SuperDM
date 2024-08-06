// Profile.tsx
import React from "react";
import { mockData } from "../data/mockData";
import Link from "next/link";

interface ProfileProps {
  userId: number;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const user = mockData.users.find((user) => user.id === userId);

  if (!user) return null;

  return (
    <div className="p-4 overflow-y-auto scroll-smooth focus:scroll-auto overflow-auto max-h-[90vh] border-l">
      <div className="flex flex-col align-center items-center ">
        <div className="mb-2">
          <img
            src={user.img}
            alt="Profile"
            className="w-16 h-16 ml-2 rounded-full"
          />
        </div>
        <div className="mb-1 text-md font-medium">{user.name}</div>
        <div className="mb-1 text-sm opacity-95">{user.role}</div>
        <div className="text-sm opacity-60">{user.location}</div>
      </div>
      <div className="mt-6">
        <div className="text-xs uppercase font-semibold opacity-70 mb-5">
          Experience
        </div>
        <ul className="space-y-4">
          {user.experience.map((exp, index) => (
            <li key={index}>
              <div className="flex align-center  ">
                <div className="mr-2">
                  <img
                    src={exp.img}
                    alt="Profile"
                    className="w-10 h-10 mr-1 rounded"
                  />
                </div>
                <div className="max-w-[80%]">
                  <div className="text-sm font-medium">{exp.position}</div>
                  <div className="text-xs  opacity-95">{exp.company}</div>
                  <div className="text-xs font-light opacity-80">
                    {exp.duration}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <div className="text-xs uppercase font-semibold opacity-70 mb-5">
          Education
        </div>
        <ul className="space-y-2">
          {user.education.map((exp, index) => (
            <li key={index}>
              <div className="flex align-center  ">
                <div className="mr-2 ">
                  <img
                    src={exp.img}
                    alt="Profile"
                    className="w-10 h-10 mr-1 rounded"
                  />
                </div>
                <div className="max-w-[80%]">
                  <div className="text-sm font-medium">{exp.institution}</div>
                  <div className="text-xs opacity-95">{exp.degree}</div>
                  <div className="text-xs font-light opacity-80">
                    {exp.duration}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-blue-100 text-sm text-blue-500 font-medium  rounded-xl mt-4 r text-center p-3">
        {" "}
        View full profile{" "}
      </div>
      <Link href="https://www.linkedin.com/in/hridyanshsahu/">
        <div className=" text-sm text-blue-500 font-medium  rounded-xl mt-2 r text-center flex items-center justify-center p-3">
          <div className="mr-1">LinkedIn</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                stroke="#0080FF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.5v3a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3M7.5 1.5h3v3M5 7l5.5-5.5"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
