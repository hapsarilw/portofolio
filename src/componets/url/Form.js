import { useState, useEffect } from "react";

const BASE_URL = `https://api.shrtco.de/v2/shorten`;

const Form = (props) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [rawData, setRawData] = useState({id: "", shortLink: "", originalLink: ""}); 

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (originalUrl !== "") {
      fetch(BASE_URL + "?url=" + originalUrl)
        .then((res) => res.json())
        .then((data) => {
          setRawData({            
            id: data.result.code,
            shortLink: data.result.short_link,
            originalLink: data.result.original_link
          });          
        });
    }
    console.log(rawData);
  }, [originalUrl, rawData]);

  return (
    <>
      <div className="pl-20 pr-20 pt-20 pb-2 bg-grey">
        <div className="flex items-stretch rounded p-10 m-3 pt-0 bg-boost-pattern pt-10 pb-10">
          <form onSubmit={handleSubmit}>
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
      </div>
    </>
  );
};

export default Form;
