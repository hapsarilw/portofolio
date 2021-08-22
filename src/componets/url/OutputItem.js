import React from "react";

export default function OutputItem() {
  return (
    <div className="bg-grey pl-20 pr-20 pb-5">
      <div className="bg-brokenwhite shadow-xl flex items-stretch rounded pl-10 pr-10 pt-2 pb-2">
        <p
          className="text-left items-stretch w-3/4 flex-1 bg-brokenwhite px-3 py-3 bg-white text-black relative w-full mr-4"
        >
            Original Link...
        </p>
        <p
        href="/"
          className="text-right text-cyan items-stretch w-3/4 flex-1 bg-brokenwhite  px-3 py-3 bg-white w-full mr-4"
        >
            Generated Link...
        </p>
        <button
          className="bg-cyan hover:bg-cyan text-brokenwhite font-bold py-1 px-1 pl-5 pr-5 border border-cyan rounded"
          type="button"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
