import React from 'react';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useSpring, config } from 'react-spring';
import Isamm from '../static/isamm.png';
import Enicar from '../static/Enicarthage.png';
import ScrollLink from '../components/utils/scrollLink';
import Heading from '../components/UI/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
 const StyledHeader = styled(animated.header)`
   width: auto;
  
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);

  @media ${props => props.theme.mediaQueries.medium} {
    width: auto;
    
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: auto;
 
  }

 
 `;
const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;
  background-color:white;

 
  @media ${props => props.theme.mediaQueries.medium} {
    width: 10rem;
    height: 10rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 10rem;
    height: 10rem;
    margin: 0 1rem;
    border: 1px solid var(--primary-light);
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 10rem;
    height: 10rem;
    margin: 0 0.8rem;
  }
`;

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  text-align: center;
  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 90%;
    font-size: 1.5rem;

  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.2rem;
    width: 95%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const CustomSpan2 = styled.div`
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


const StackTitle = styled.h2`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 2rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;
const CustomSpan1 = styled.div`
position: relative;
font-style: italic;
color: var(--secondary);
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

// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { 'scroll-link': ScrollLink, span: CustomSpan },
}).Compiler;

const Exp = () => {
  
  return (
    <StyledSection id="academic">
      <Contained>
        <Wrapper>
          <Heading
            title="Academic"
             
          />     
           <AboutText><table><tr><StyledHeader>
           <td>
             <span style={{margin :"40px"  }}>
         <StyledLink
          rel="noreferrer"
          target="_blank"
          
         >
         <img src={Isamm} alt="" width="95 " height="95" />

        
         </StyledLink> </span> 
</td> 
             
             <td ><br></br>
   <CustomSpan> HIGHER INSTITUTE OF ART AND MULTIMEDIA</CustomSpan>   
   
  <CustomSpan> </CustomSpan> <br></br> <CustomSpan> </CustomSpan>Bachelor Degree in Computer Science and Multimedia . <CustomSpan1> MENTION OBTAINED : WELL </CustomSpan1> <CustomSpan2> 2016-2019</CustomSpan2></td>
         
         </StyledHeader>

         </tr>
         <tr><StyledHeader>
           <td  >
             <span style={{margin :"40px" }}>
         <StyledLink
          rel="noreferrer"
          target="_blank"
          
         >
          <img src= {Enicar} alt="" width="75 " height="35" />

        
         </StyledLink> </span> 
</td> 
             
             <td ><br></br>
             <CustomSpan> NATIONAL ENGINEERING SCHOOL OF CARTHAGE</CustomSpan>  
   
   <CustomSpan> </CustomSpan> <br></br>   Software Engineering Degree . <CustomSpan1>MENTION OBTAINED : FAIRLY WELL </CustomSpan1> <CustomSpan2> 2019-2022</CustomSpan2></td>
         
         
         </StyledHeader>

         </tr>
         
         </table>
          
           
  
      
          </AboutText>
         
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Exp;
