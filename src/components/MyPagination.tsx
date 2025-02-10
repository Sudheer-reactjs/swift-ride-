import { LeftIcon, RightIcon } from "@/lib/svg";
import React from "react";

interface MyPaginationProps {
  totalPages: number;
  current: number;
  onChangePage: (page: number) => void;
}

const MyPagination: React.FC<MyPaginationProps> = ({ totalPages, current, onChangePage }) => {
  // eslint-disable-next-line prefer-const
  let items = [];

  // Add "Previous" button
  if (current > 1) {
    items.push(
      <button
        key="prev"
        className=""
        onClick={() => onChangePage(current - 1)}
      >
        <LeftIcon />
      </button>
    );
  }

  // Add page numbers
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <button
        key={page}
        className={`px-2 w-[32px] h-[32px] py-1 ${page === current ? 'button-gradient text-[#1D2125]' : ' text-[#6B7280]'} bg-transparent  `}
        onClick={() => onChangePage(page)}
      >
        {page}
      </button>
    );
  }

  // Add "Next" button
  if (current < totalPages) {
    items.push(
      <button
        key="next"
        className=""
        onClick={() => onChangePage(current + 1)}
      >
        <RightIcon />
      </button>
    );
  }

  return (
    <div className="flex flex-wrap  space-x-2 mt-[40px] md:mt-[60px]">
      {items}
    </div>
  );
};

export default MyPagination;
