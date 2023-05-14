import React from "react";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const Sidebar = ({ apply }: any) => {
  return (
    <div className=" md:w-[25%]">
      <Link
        href="/"
        className="mb-5 flex items-center gap-2 text-sm text-blue-500"
      >
        <BsArrowLeftShort />
        Back to search
      </Link>

      {apply && (
        <>
          <h2 className="mb-2 font-bold text-neutral-500">How to apply</h2>
          <p className="text-sm text-neutral-700">Please apply {apply}</p>
        </>
      )}
    </div>
  );
};

export default Sidebar;
