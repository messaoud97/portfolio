import React from 'react';
 import ReactDOM from 'react-dom';

import Layout from './components/layout/layout';

// Sections
import Home from './sections/home';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Contact from './sections/contact';
import Academic from './sections/academic';
import Experience from './sections/experience';

ReactDOM.render(
  <Layout>
  <Home/>
  <About/>
  <Academic/>
  <Experience/>
  <Portfolio/>
  <Contact/>
</Layout>,
  document.querySelector('#root')
);
 
 