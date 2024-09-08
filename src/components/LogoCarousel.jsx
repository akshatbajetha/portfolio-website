import React from 'react'
import mongoDb from '../assets/Logos/mongoDb.svg'
import Javascript from '../assets/Logos/Javascript.svg'
import Bootstrap5 from '../assets/Logos/Bootstrap5.svg'
import Java from '../assets/Logos/Java.svg'
import NodeJS from '../assets/Logos/NodeJS.svg'
import git from '../assets/Logos/git.svg'
import Postman from '../assets/Logos/Postman.svg'
import ReactLogo from '../assets/Logos/React.svg'
import Tailwind from '../assets/Logos/Tailwind.svg'
import styled, {keyframes, css} from 'styled-components'
import LogoImages from './LogoImages'

function LogoCarousel() {
    const row = [
      {
        src: git,
        name: 'Git',
      },
      {
        src: mongoDb,
        name: 'MongoDB',
      },
      {
        src: Javascript,
        name: 'Javascript',
      },
      {
        src: Bootstrap5,
        name: 'Bootstrap',
      },
      {
        src: Java,
        name: 'Java',
      },
      {
        src: NodeJS,
        name: 'NodeJS',
      },
      {
        src: Postman,
        name: 'Postman',
      },
      {
        src: ReactLogo,
        name: 'React',
      },
      {
        src: Tailwind,
        name: 'TailwindCSS',
      },
      ];
    
  return (
    <AppContainer className='p-4 m-4'>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row.map((el) => (
              <ImageGroup>
                <LogoImages src={el.src} name={el.name}/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((el) => (
              <ImageGroup>
                <LogoImages src={el.src} name={el.name}/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  )
}

export default LogoCarousel

const AppContainer = styled.div`
  width: 100vw;
  padding-top: 10px;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 25s linear infinite;

`;

const MarqueeGroup = styled.div`
  ${common}

  
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);

  
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;