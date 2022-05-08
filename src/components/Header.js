import React from 'react'
import styled from 'styled-components'
import Image from '../hands.jpg'
import LogoImg from '../logo-tooth-blue.png'
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
    background-color: #97a3ad;
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
    color: rgb(50, 50, 50);
    transition: 0.3s;

    &:hover {
      color: rgb(50, 50, 50);
    }
  }

  @media(max-width: 425px) {
      display: none;
  }
`

const Logo = styled.img`
  height: 40px;
  margin-left: 40px;
`

const HeaderInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  background-image: url(${Image});
  background-color: black;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: top;
  background-size: cover;
  padding: 10% 10%;
  background-position-y: ${props => props.transform};
  color: rgb(50,50,50);


  h1 {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }

  p {
    font-size: 52px;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.2);
    color: #3f3f3f;
  }
`

const HeaderText = styled.div`
  width: 800px;
  /* background-color: rgba(0,0,0,0.1); */
  border-radius: 8px;
  padding: 20px;
  padding-top: 100px;

  @media(max-width: 900px) {
      width: 75%;

      p {
        font-size: 40px;
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
            <HeaderText>
              <h1>Trusted Dental Technicians</h1>
              <p>Providing Quality Dental Services Since 2001!</p>
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
