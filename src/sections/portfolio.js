import React from 'react';
import styled from 'styled-components';

import Heading from '../components/UI/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
//import PortfolioItem from '../templates/portfolioItem';

const PortfolioWrapper = styled.div`
  width: 100%;

  & > div:nth-child(odd) > div {
    flex-direction: row-reverse;
  }
`;

const Portfolio = () => {

  return (
    <StyledSection id="portfolio">
      <Contained>
        <Wrapper>
          <Heading
            title="Portfolio (SOON !!!)"
            subtitle={`Check <span>what</span> I've been doing <span>lately</span>`}
          />
          <PortfolioWrapper />
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Portfolio;
