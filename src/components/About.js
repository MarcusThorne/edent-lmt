import React from 'react'
import Smile from '../smile.png'
import ToothIcon from '../tooth2.png'
import styled from 'styled-components'

const AboutContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  background-size: cover;
  background-position: center;
  background-color: rgba(0,0,0,0.9);
  padding: 100px 300px;
  color: white;
  display: flex;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  flex-direction: column;
  align-items: center;

p {
  max-width: 700px;
  margin: auto;
}
`

const Icon = styled.img`
  height: 50px !important;
  width: 50px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 70px;
  max-width: 900px;

  h1 {
    font-size: 14px;
  }

  div {
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const Seperator = styled.div`
  border-right: 1px solid rgba(255,255,255,0.2);
  height: 90px;
  margin: 0 80px;
`

function About() {
  return (
    <AboutContainer>
      {/* <img alt="Hands with dental stuff" src={Whitening} /> */}
      <div>
        <h1>About E-Dent</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi minus voluptas cum possimus quos? Fugit provident alias, rem sint eum cumque harum, accusantium possimus quis debitis dignissimos, eveniet consequuntur optio.</p>
      </div>

      <Info>
        <div>
          <Icon src={Smile} />
          <h1>Improvong</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={ToothIcon} />
          <h1>Dental Work</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={Smile} />
          <h1>Improvong</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={ToothIcon} />
          <h1>Dental Work</h1>
        </div>
      </Info>
    </AboutContainer>
  )
}

export default About
