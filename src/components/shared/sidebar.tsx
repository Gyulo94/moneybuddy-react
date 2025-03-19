"use client";
import { SIDEBAR } from "@/lib/constants";
import { LogOut, UserRoundPen } from "lucide-react";
// import { SIDEBAR } from "@/lib/constants";
// import { LogOut, UserRoundPen } from "lucide-react";
import { useState } from "react";
import { LogoutButton } from "./logout-button";

export default function Sidebar() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  const toggleReportMenu = () => {
    setIsReportOpen(!isReportOpen);
  };

  const categoryClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const link = e.currentTarget.querySelector("a");
    if (link) {
      window.location.href = link.href;
    }
  };

  return (
    <div className="w-full h-[calc(100vh-58px)] border-r">
      <div className="pt-3 pr-4 pb-2 pl-6 border-b">
        <span className="text-sm text-gray-500 dark:text-primary">
          {"월 예산 : "}
          <strong className="ml-2.5">100</strong>
          {" 만원"}
        </span>
        <span></span>
      </div>
      <ul className="pt-2 text-sm text-gray-500 dark:text-primary">
        {SIDEBAR.CATEGORY.map((category) => (
          <li
            onClick={categoryClick}
            className="px-6 leading-11 hover:bg-primary-foreground cursor-pointer"
            key={category.title}
          >
            <a href={category.href}>
              <p className="flex items-center">
                <span>
                  <category.icon className="w-4 h-4 -mt-0.5 mr-3" />
                </span>
                {category.title}
              </p>
            </a>
          </li>
        ))}
        <li
          onClick={toggleReportMenu}
          className={`px-6 leading-11 hover:bg-primary-foreground cursor-pointer ${
            isReportOpen && "bg-primary-foreground"
          }`}
        >
          <p className="flex items-center">
            <span>
              <SIDEBAR.REPORT.icon className="w-4 h-4 -mt-0.5 mr-3" />
            </span>
            {SIDEBAR.REPORT.title}
          </p>
        </li>
        {isReportOpen &&
          SIDEBAR.REPORT.items.map((reportItem) => (
            <li
              onClick={categoryClick}
              className={`px-6 leading-11 hover:text-primary curosr-pointer ${
                isReportOpen && "bg-primary-foreground"
              }`}
              key={reportItem.title}
            >
              <a href={reportItem.href}>
                <p className="ml-7">{reportItem.title}</p>
              </a>
            </li>
          ))}
        <li
          onClick={categoryClick}
          className="px-6 leading-11 hover:bg-primary-foreground cursor-pointer"
        >
          <a href={"/profile"}>
            <p className="flex items-center">
              <span>
                <UserRoundPen className="w-4 h-4 -mt-0.5 mr-3" />
              </span>
              {"프로필"}
            </p>
          </a>
        </li>
        <LogoutButton>
          <li className="px-6 leading-11 hover:bg-primary-foreground cursor-pointer">
            <p className=" flex items-center">
              <span>
                <LogOut className="w-4 h-4 -mt-0.5 mr-3" />
              </span>
              {"로그아웃"}
            </p>
          </li>
        </LogoutButton>
      </ul>
    </div>
  );
}
