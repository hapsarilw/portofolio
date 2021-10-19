import React, { useState } from "react";
import OutputItemStyles from "./OutputItemStyles";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function OutputItem(props) {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = useState(props.urlItem.shortLink);

  return (
    <OutputItemStyles>
      <div id="itemSection" className="">
        <div
          id="item"
        >
          <p
            id="originalLink"
          >
            {props.urlItem.originalLink}
          </p>
          <p
            id="shortLink"
            value={props.urlItem.shortLink}
            href="/"
          >
            {props.urlItem.shortLink}
          </p>
          <CopyToClipboard
            text={copyText}
            onCopy={() => setIsCopied({ copied: true })}
          >
            <button
              type="button"
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </OutputItemStyles>
  );
}