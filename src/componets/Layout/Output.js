import React from "react";

export default function Output() {
  return (
    <div className="bg-grey pl-20 pr-20 pb-5">
      <div className="bg-brokenwhite shadow-xl flex items-stretch rounded pl-10 pr-10 pt-2 pb-2">
        <p
          className="flex items-stretch w-3/4 flex-1 bg-brokenwhite px-3 py-3 bg-white text-black relative w-full mr-4"
        >
            Original Link...
        </p>
        <p
        href="/"
          className="text-cyan flex items-stretch w-3/4 flex-1 bg-brokenwhite  px-3 py-3 bg-white text-right focus:outline-none focus:ring w-full mr-4"
        >
            Generated Link...
        </p>
        <button
          className="bg-cyan hover:bg-cyan text-transparent font-bold py-1 px-1 pl-5 pr-5 border border-cyan rounded"
          type="button"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
