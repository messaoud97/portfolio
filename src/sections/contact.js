import React from 'react';
import styled from 'styled-components';
 import useDarkMode from 'use-dark-mode';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import Heading from '../components/UI/heading';
import Social from '../components/UI/social';
 

const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

const Contact = () => {
  const { value: darkMode } = useDarkMode(false);
  

  return (
    <StyledSection id="contact">
      <Contained>
        <Wrapper>
          <Heading
            title="Contact me"
            subtitle="Do you want to get in <span>touch</span>? Drop a <span>mail</span> below and I will get back to you soon!
            "
          />
          <Social />
          <CopyRight>Copyright © {new Date().getFullYear()}, Ahmed Messaoud</CopyRight>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Contact;
