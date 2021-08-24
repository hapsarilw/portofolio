import React from "react";
import Navigation from "./componets/layout/Navigation";
import Main from "./componets/layout/Main";
import Form from "./componets/url/Form";
import OutputList from "./componets/url/OutputList";
import { useState } from "react";

function App() {
  const [urlData, setUrlData] = useState([
    {
      id: 'url1',
      shortLink: 'chr.kj/5db8',
      originalLink: 'gsdhav.com/nwjns709duqwn',
    },
  ]);

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
