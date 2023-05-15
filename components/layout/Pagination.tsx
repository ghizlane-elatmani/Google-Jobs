import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ page, setPage }: any) => {
  const style =
    "flex h-[36px] w-[36px] items-center justify-center rounded-sm border border-gray-500 text-gray-500 hover:border-blue-500 hover:text-blue-500";

  return (
    <div className="flex justify-end">
      <div className="flex gap-2">
        <button className={`${style}`}>
          <BsChevronLeft />
        </button>

        <button className={`${style}`}>1</button>

        <button className={`${style}`}>2</button>

        <button className={`${style}`}>3</button>

        <button className={`${style}`}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
