import React from "react";
import Navigation from "./componets/layout/Navigation";
import Main from "./componets/layout/Main";
import Form from "./componets/url/Form";
import OutputList from "./componets/url/OutputList";
import { useState } from "react";

function App() {
  const [urlData, setUrlData] = useState([
    {
      id: "data1",
      shortLink: "sL1",
      originalLink: "oL2",
    },
    {
      id: "data2",
      shortLink: "sL2",
      originalLink: "oL2",
    },
  ]);

  const handlerUrlChange = (data) => {
    console.log("Parent: " + JSON.stringify(data))
    let result = {
      id: data.id,
      shortLink: data.shortLink,
      originalLink: data.originalLink,
    };   
    const newArray = [...urlData, result]
    setUrlData(newArray)
  };

  return (
    <>
      <Navigation />
      <Main />
      <Form onAddUrl={handlerUrlChange} />
      <OutputList listOfData={urlData} />
    </>
  );
}

export default App;
