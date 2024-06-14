import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Pagination = ({ projectPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumbers.push(i);
  }

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get('page')) || 1;

  return (
    <nav className="w-full">
      <ul className="flex gap-5 mt-9 w-full">
        {pageNumbers.map((number) => (
          <li key={number} className="border">
            <NavLink
              to={`?page=${number}`}
              className={`${
                currentPage === number ? "bg-[#596c8b] text-white" : "bg-[#EAF0FB] text-black"
              } cursor-pointer px-2`}
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
