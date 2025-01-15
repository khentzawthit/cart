import React from "react";
import { Link } from "react-router";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <div className="w-full flex items-center gap-1 mb-6 cursor-pointer">
      <Link to={"/"} className="text-gray-500">
        Home
      </Link>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
      <p className="">{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumb;
