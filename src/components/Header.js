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

  &:hover {
    background-color: #97a3ad;
    color: white;
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
      color: #adbbc6;
    }
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
  color: white;
  background-position-y: ${props => props.transform};

  h1 {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }

  p {
    font-size: 52px;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }
`

const HeaderText = styled.div`
  width: 800px;
  /* background-color: rgba(0,0,0,0.1); */
  border-radius: 8px;
  padding: 20px;
  padding-top: 100px;
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
            <h1>About</h1>
            <h1>Meet the Team</h1>
            <h1>Service</h1>
            <h1>Contact</h1>
          </Links>
        </Nav>
      </NavContainer>

        <HeaderInfo>
          <animated.div style={style1}>
            <HeaderText>
              <h1 className='headerText'>Trusted Dental Technicians</h1>
              <p className='headerText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Button>Contact Us</Button>
              <Facebook />
              <Linkedin />
            </HeaderText>
          </animated.div>
        </HeaderInfo>
    </HeaderContainer>
  )
}

export default Header
