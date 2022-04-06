import React from 'react'
import Smile from '../smile.png'
import ToothIcon from '../tooth2.png'
import { AboutContainer, Icon, Info, AboutTitle, Seperator } from '../styles/AboutStyle'

function About() {
  return (
    <AboutContainer>
      {/* <img alt="Hands with dental stuff" src={Whitening} /> */}
      <div>
        <AboutTitle>About E-Dent</AboutTitle>
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
