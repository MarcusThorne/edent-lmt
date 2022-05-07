import React from 'react'
import Smile from '../smile.png'
import ToothIcon from '../tooth2.png'
import Teeth from '../teeth-cartoon.png'
import Quality from '../quality.png'
import { AboutContainer, Icon, Info, AboutTitle, Seperator } from '../styles/AboutStyle'
import styled from 'styled-components'

function About() {
  return (
    <AboutContainer id="About">
      <div>
        <div>
          <AboutTitle>About E-Dent</AboutTitle>
          <p>E-dent is a digital laboratory keeping up with modern times, we keep our business model fresh and constantly adjust to growing technology. Our time and money are best invested in our milling machines and CAD/CAM to provide the best quality implant bars and abutments. It's important to us to not only provide our customers with the highest possible standard of product but also exceptional customer service, so we can help you crack that smile you've always wanted.</p>
        </div>
      </div>

      <Info>
        <div>
          <Icon src={Smile} />
          <h1>Improving Smiles</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={ToothIcon} />
          <h1>Building Implant</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={Teeth} />
          <h1>Creating Prosthetics</h1>
        </div>
        <Seperator />
        <div>
          <Icon style={{objectFit: "cover"}} src={Quality} />
          <h1>Providing Quality</h1>
        </div>
      </Info>
    </AboutContainer>
  )
}

export default About
