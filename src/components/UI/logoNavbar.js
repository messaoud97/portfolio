import React, { useState } from 'react';
 import styled from 'styled-components';
import { Link } from 'react-scroll';
  import useDarkMode from 'use-dark-mode';
import { useTransition, animated } from 'react-spring';

import ScrollToTop from '../UI/scrollToTop';

 
 

const LogoNavBar = ({ notOnePageSection, setMenuOpened }) => {
  // State to show or hide scroll to top component, gets trigged based on the scroll link component
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Animation
  const ScrollTopTransition = useTransition(showScrollTop, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);
  // Animation
  const LogoNavBarTransition = useTransition(darkMode, null, {
    config: { duration: 200 },
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Query for logos
  

  // Render dark or light logo
  return ( <>
    </>
  );
};

export default LogoNavBar;
