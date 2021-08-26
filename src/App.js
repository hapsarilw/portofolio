import React from "react";
import Navigation from "./componets/layout/Navigation";
import Form from "./componets/url/Form";
import OutputList from "./componets/url/OutputList";
import Main from "./componets/layout/Main";
import Features from "./componets/layout/Features";
import Footer from "./componets/layout/Footer";

import { useState, useEffect, useReducer } from "react";
import { usePromiseTracker } from "react-promise-tracker";

function App() {
  const [urlData, setUrlData] = useState([]);

  useEffect(() => {
    // Get the item from local storage. JSON.parse(null) returns null rather than throws
    // Get from local storage before setting it
    const localTodos = JSON.parse(localStorage.getItem("urlData")) || [];
    setUrlData(localTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("urlData", JSON.stringify(urlData));
  }, [urlData]);

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
    <div>
      <Navigation />
      <Main />
      <Form onAddUrl={handlerUrlChange} />
      <LoadingIndicator />
      <OutputList listOfData={urlData} />
      <Features />
      <Footer/>
    </div>
  );
}

export default App;
