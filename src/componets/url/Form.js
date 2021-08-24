import { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';

const BASE_URL = `https://api.shrtco.de/v2/shorten`;

const Form = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [originalUrl, setOriginalUrl] = useState("");
  const [rawData, setRawData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
  };

  useEffect(() => {
    console.log("oriUrl:" + originalUrl + " " + isSending);
    if (isSending === true && originalUrl !== "") {
      console.log("Sending Url");
      console.log("BASE_URL: " + BASE_URL + "?url=" + originalUrl);
      trackPromise(fetch(BASE_URL + "?url=" + originalUrl)
      .then((res) => res.json())
      .then((data) => {
        let result = {
          id: data.result.code,
          shortLink: data.result.short_link,
          originalLink: data.result.original_link,
        };
        console.log("URL Result: "+ JSON.stringify(result))
        setRawData(result);
        console.log("Raw Data: " + JSON.stringify(rawData))
        props.onAddUrl(rawData);
        console.log("Data Sending")
        setIsSending(false);
      }));       
    }
  }, [originalUrl, isSending, rawData]);

  return (
    <>
      <div className="pl-20 pr-20 pt-20 pb-2 bg-grey">
        <form
          onSubmit={handleSubmit}
          className="flex items-stretch rounded p-10 m-3 pt-0 bg-boost-pattern pt-10 pb-10"
        >
          <input
            type="text"
            placeholder="Insert a Link"
            onChange={(e) => {
              setOriginalUrl(e.target.value);
            }}
            required
            className="w-3/4 flex-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mr-4"
          />
          <button className="bg-cyan hover:bg-cyan text-brokenwhite font-bold py-2 px-4 border border-cyan rounded">
            Shorten It!
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
