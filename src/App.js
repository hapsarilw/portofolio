import React from 'react'
import Navigation from './componets/layout/Navigation';
import Main from './componets/layout/Main';
import Form from './componets/url/Form';
import OutputList from './componets/url/OutputList';
import { useState } from 'react';

function App() {
  const [urlData, setUrlData] = useState()

  const handlerUrlChange = (data) => {
    setUrlData(JSON.stringify(data))
    console.log("From Parent: "+urlData)
  }

  return (
  <>
    <Navigation />
    <Main />
    <Form onAddUrl={handlerUrlChange}/>
    <OutputList urlData={urlData}/>   
  </>
  );
}

export default App;
