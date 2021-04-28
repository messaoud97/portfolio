import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';
import ButtonLink from '../components/UI/buttonLink';
import { faPaperPlane, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import BackgroundLogo from '../components/UI/backgroundLogo';
import ScrollDown from '../components/UI/scrollDown';
import Button from '../components/UI/button';
import WordsFading from '../components/UI/wordsFading';

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`;
const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 3rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    justify-content: space-around;
    width: 100%;

    & a:first-of-type {
      margin-right: 0rem;
    }
  }
`;
const Title = styled(animated.h1)`
  font-weight: 200;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 6rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 4rem;
  }

  & span {
    font-weight: 600;
    color: var(--primary-light);
    transition: color 0.2s ease-out;
  }
`;

const SubTitle = styled(animated.h2)`
  color: var(--text);
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.5rem;
  }
`;
const CustomSpan = styled.span`
  position: relative;
  font-style: italic;
  color: var(--primary);
  font-weight: 600;
  display: inline-block;
  word-break: break-word;
  white-space: normal;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    background: var(--primary);
  }
`;
const Home = () => {
  // Title animation
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  // Sub title animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  // Button animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledSection fullHeight id="header">
      <BackgroundLogo />
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title style={TitleSpring}>
              <CustomSpan><div style={{color:'white'}}>Hey ! , </div></CustomSpan>
               
              
              <br />
              I'm <span>Ahmed</span>
            </Title>
            <SubTitle style={SubTitleSpring}>
              A <WordsFading /> Full-stack Developer & Blockchain Enthusiast
            </SubTitle>

            <ButtonsWrapper>
            <Link to="about-me" spy={true} smooth={true}>

            <ButtonLink
              target="_blank"
              rel="noreferrer"
             
            >
              <StyledIcon icon={faFile} />
              About
            </ButtonLink></Link>
            <ButtonLink
              solid
              target="_blank"
              rel="noreferrer"
              href="https://mohetn-my.sharepoint.com/:b:/g/personal/ahmed_messaoud_enicar_u-carthage_tn/EUV3XRT5kbtBjRuKEpOP12wBnzdCNotE8beuTCwbJp2DiQ?e=2jhIGT"
            >
              <StyledIcon icon={faPaperPlane} />
              Resume
            </ButtonLink>
          </ButtonsWrapper>

 
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Home;
