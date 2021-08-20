import React from "react";

export default function Form() {
  return (
    <>
      <div className="p-20 bg-grey">
        <div className="flex items-stretch rounded p-10 m-3 pt-0 bg-boost-pattern pt-10 pb-10">
          <input
            type="text"
            placeholder="Insert a Link"
            className="w-3/4 flex-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mr-4"
          />
          <button
            className="bg-cyan hover:bg-cyan text-transparent font-bold py-2 px-4 border border-cyan rounded"
            type="button"
          >Shorten It!</button>
        </div>
      </div>
    </>
  );
}
