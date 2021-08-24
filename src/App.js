import React from "react";
import Navigation from "./componets/layout/Navigation";
import Form from "./componets/url/Form";
import OutputList from "./componets/url/OutputList";
import Main from "./componets/layout/Main";

import { useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";

function App() {
  const [urlData, setUrlData] = useState([]);

  const handlerUrlChange = (data) => {
    console.log("Parent: " + JSON.stringify(data));
    let result = {
      id: data.id,
      shortLink: data.shortLink,
      originalLink: data.originalLink,
    };
    const newArray = [...urlData, result];
    setUrlData(newArray);
  };

  const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && (
        <div className="bg-grey pl-20 pr-20 pb-5">
          <div className="flex items-stretch pl-10 pr-10 pt-2 pb-2">
            <p className="items-stretch px-3 py-3 bg-white text-black relative w-full">
              Generate shorten link, please wait...
            </p>
          </div>
        </div>
      )
    );
  };

  return (
    <>
      <Navigation />
      <Main />
      <div >
        <Form onAddUrl={handlerUrlChange} />
        <LoadingIndicator/>
        <OutputList listOfData={urlData} />
      </div>
    </>
  );
}

export default App;
