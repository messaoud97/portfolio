import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
  faGit,
  faEthereum,
  faTerminal, faAws,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

const Email = styled.a`
  color: var(--text-highlight);
  font-size: 2rem;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 4rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.4rem;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
  margin-top: 5rem;

  @media ${props => props.theme.mediaQueries.medium} {
    margin-bottom: 8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 6rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 4rem;
    height: 4rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    border: 1px solid var(--primary-light);
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 3rem;
    height: 3rem;
    margin: 0 0.8rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`;

const Tech = () => {


  return (
    <>
      <Email  >

      </Email>
      <SocialWrapper>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Github"
        >
          <StyledIcon icon={faTerminal} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Linkedin"

        >
          <StyledIcon icon={faAws} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Youtube"
        >
          <StyledIcon icon={faEthereum} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Facebook"
        >
          <StyledIcon icon={faDocker} />
        </StyledLink>
        <StyledLink
          rel="git"
          target="git"
          aria-label="git"
        >
          <StyledIcon icon={faGit} />
        </StyledLink>
        <StyledLink
          rel="noreferrer"
          target="_blank"
          aria-label="Facebook"
        >
          <StyledIcon icon={faNodeJs} />
        </StyledLink>
      </SocialWrapper>
    </>
  );
};

export default Tech;
