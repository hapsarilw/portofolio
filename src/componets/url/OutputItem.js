import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function OutputItem(props) {
  const [isCopied, setIsCopied] = useState(false);
  const [copyText, setCopyText] = useState(props.urlItem.shortLink);

  return (
    <div className="bg-grey pl-20 pr-20 pb-5">
      <div className="bg-brokenwhite shadow-xl flex items-stretch rounded pl-10 pr-10 pt-2 pb-2">
        <p className="text-left items-stretch w-3/4 flex-1 bg-brokenwhite px-3 py-3 bg-white text-black relative w-full mr-4">
          {props.urlItem.originalLink}
        </p>
        <p
          value={props.urlItem.shortLink}
          href="/"
          className="text-right text-cyan items-stretch w-3/4 flex-1 bg-brokenwhite  px-3 py-3 bg-white w-full mr-4"
        >
          {props.urlItem.shortLink}
        </p>
        <CopyToClipboard
          text={copyText}
          onCopy={() => setIsCopied({ copied: true })}
        >
          <button
            className="bg-cyan hover:bg-cyan text-brokenwhite font-bold py-1 px-1 pl-5 pr-5 border border-cyan rounded"
            type="button"           
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>        
      </div>
    </div>
  );
}
