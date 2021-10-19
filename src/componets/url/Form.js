import { useState, useEffect } from "react";
import { trackPromise } from 'react-promise-tracker';
import FormStyles from "./FormStyles";

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
  }, [originalUrl, isSending, rawData, props]);

  return (
    <FormStyles>
      <div id="formSection">
        <form
          className="bg-boost-pattern"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Insert a Link"
            onChange={(e) => {
              setOriginalUrl(e.target.value);
            }}
            required
            
          />
          <button >
            Shorten It!
          </button>
        </form>
      </div>
    </FormStyles>
  );
};

export default Form;
