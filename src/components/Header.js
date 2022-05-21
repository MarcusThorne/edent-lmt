import React from 'react'
import styled from 'styled-components'
import Image from '../hands.jpg'
import LogoImg from '../logo-tooth-blue.png'
import LogoTransparent from '../logo-transparent.png'
import { FiFacebook, FiLinkedin } from 'react-icons/fi'
import { useSpring, animated } from 'react-spring'


const HeaderContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`

const NavContainer = styled.div`
  padding: 0 50px;
  background-color: white;
  width: 100%;
  height: max-content;
  z-index: 50;
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

  @media(max-width: 425px) {
    padding: 0;
  }
`

const Nav = styled.div`
  height: 40px;
  /* background-color: rgb(255, 255, 255); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  z-index: 50;
`

const Button = styled.div`
  background-color: white;
  padding: 20px 60px !important;
  width: max-content !important;
  color: rgba(0,0,0,0.8);
  transition: 0.3s;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);

  &:hover {
    background-color: #1da7a3;
    color: white;
  }

  @media(max-width: 900px) {
    display: none;
  }
`

const Links = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 8px;

  h1 {
    margin: 0 20px;
    color: rgba(50, 50, 50, 0.9);
    transition: 0.3s;

    &:hover {
      color: #1ca6a2;
    }
  }

  @media(max-width: 750px) {
      display: none;
  }
`

const Logo = styled.img`
  height: 60px;
  margin-left: 40px;
  width: 120px;
`

const LogoHeader = styled.img`
  position: absolute;
  width: 900px;
  z-index: -1;
  top: 50%;
    height: 400px;
    transform: translate(50%, -10%);
    right: -140px;
    transition: 0.5s;
    opacity: 0.5;

  @media(min-width: 501px) {
    right: 100px;
        height: 400px;
  }

  @media(min-width: 1280px) {
      height: 500px;
  transform: translate(50%, -40%);
  right: 200px;

  }
`

const HeaderInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  /* background-image: url(${Image}); */
  background-color: rgba(34, 204, 199, 0.3);
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-position-y: top;
  background-size: cover;
  padding: 10% 10%;
  background-position-y: ${props => props.transform};
  color: rgba(50,50,50, 0.9);
  position: relative;

  h1 {
    text-shadow: 0px 0px 10px rgba(255,255,255,0.3);
    font-weight: 400;
  }

  p {
    font-size: 52px;
    text-shadow: 0px 0px 10px rgba(255,255,255,0.3);
    color: rgba(50,50,50, 0.9);
    font-weight: 700;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`

const HeaderText = styled.div`
  width: 800px;
  /* background-color: rgba(0,0,0,0.1); */
  border-radius: 8px;
  padding: 20px;
  padding-top: 100px;
  text-shadow: 2px 2px 10px white;

  @media(max-width: 900px) {
      width: 75%;

      p {
        font-size: 34px;
      }

      h1 {
        font-size: 28px
      }
  }
`

const Facebook = styled(FiFacebook)`
  color: black;
  font-size: 30px;
  position: absolute;
  right: 30px;
  bottom: 40px;
  `

const Linkedin = styled(FiLinkedin)`
  color: black;
  font-size: 30px;
  position: absolute;
  right: 70px;
  bottom: 40px;
`

function Header() {
  const style1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })

  return (
    <HeaderContainer>
      <NavContainer>
        <Nav>
          <Logo src={LogoImg} />

          <Links>
            <a style={{ textDecoration: "none" }} href="#About"><h1>About</h1></a>
            <a style={{ textDecoration: "none" }} href="#Services"><h1>Services</h1></a>
            <a style={{ textDecoration: "none" }} href="#Achievements"><h1>Achievements</h1></a>
            <a style={{ textDecoration: "none" }} href="#Contact"><h1>Contact</h1></a>
          </Links>
        </Nav>
      </NavContainer>

        <HeaderInfo>
          <animated.div style={style1}>
            <LogoHeader src={LogoTransparent} />
            <HeaderText>
              <h1>Trusted Dental Technicians</h1>
              <p>Providing Quality Dental Services!</p>
              <a style={{textDecoration: "none"}} href="#Contact"><Button>Contact Us</Button></a>
              <a href="https://en-gb.facebook.com/edentdentallab/"><Facebook /></a>
              <a href="https://www.linkedin.com/company/edentlimited/about/" target="blank"><Linkedin /></a>
            </HeaderText>
          </animated.div>
        </HeaderInfo>
    </HeaderContainer>
  )
}

export default Header
