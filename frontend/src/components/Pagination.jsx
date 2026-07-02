import React from 'react';
import * as Icons from 'lucide-react';

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  
  const chevronLeftIcon = Icons?.['ChevronLeft'] || Icons.HelpCircle;
  const chevronRightIcon = Icons?.['ChevronRight'] || Icons.HelpCircle;

  // Calculate page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  }

  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-12">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {chevronLeftIcon && <chevronLeftIcon size={20} />}
          </button>
        </li>

        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => paginate(1)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
                } transition-colors`}
              >
                1
              </button>
            </li>
            {startPage > 2 && (
              <li>
                <span className="px-2 text-slate-500">...</span>
              </li>
            )}
          </>
        )}

        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 rounded-lg ${
                currentPage === number
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
              } transition-colors`}
            >
              {number}
            </button>
          </li>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <li>
                <span className="px-2 text-slate-500">...</span>
              </li>
            )}
            <li>
              <button
                onClick={() => paginate(totalPages)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
                } transition-colors`}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {chevronRightIcon && <chevronRightIcon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;