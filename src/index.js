import React from 'react';
 import ReactDOM from 'react-dom';

import Layout from './components/layout/layout';

// Sections
import Home from './sections/home';
import About from './sections/about';
import Portfolio from './sections/portfolio';
import Contact from './sections/contact';
import Acad from './sections/academic';
import Exp from './sections/experience';

ReactDOM.render(
  <Layout>
  <Home />
  <About />
  <Acad></Acad>
  <Exp></Exp>
  <Portfolio />
  <Contact />
</Layout>,
  document.querySelector('#root')
);
 
 