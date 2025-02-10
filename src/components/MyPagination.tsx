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
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300"
        onClick={() => onChangePage(current - 1)}
      >
        Prev
      </button>
    );
  }

  // Add page numbers
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <button
        key={page}
        className={`px-4 py-2 ${page === current ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} hover:bg-blue-600 hover:text-white`}
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
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300"
        onClick={() => onChangePage(current + 1)}
      >
        Next
      </button>
    );
  }

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {items}
    </div>
  );
};

export default MyPagination;
