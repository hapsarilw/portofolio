import React from 'react'
import Navigation from './Navigation';
import Main from './Main';
import Form from '../url/Form';
import OutputList from '../url/OutputList';

function Layout() {
  return (
  <>
    <Navigation />
    <Main />
    <Form />
    <OutputList />    
  </>
  );
}

export default Layout;