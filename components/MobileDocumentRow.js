import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function DocumentRow() {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
      >
        <span className="flex items-center truncate space-x-3">
          <span
            className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"
            aria-hidden="true"
          ></span>
          <span className="font-medium truncate text-sm leading-6">
            document_1122ccx2.pdf
          </span>
        </span>
        {/* <!-- Heroicon name: chevron-right --> */}
        <svg
          className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}
