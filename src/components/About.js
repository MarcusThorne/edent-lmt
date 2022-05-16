import React from 'react'
import Smile from '../smile.png'
import ToothIcon from '../tooth2.png'
import Teeth from '../teeth-cartoon.png'
import Quality from '../quality.png'
import Tech from '../tech.png'
import { AboutContainer, Icon, Info, AboutTitle, Seperator } from '../styles/AboutStyle'

function About() {
  return (
    <AboutContainer id="About">
      <div>
        <div>
          <AboutTitle>About E-Dent</AboutTitle>
          <p style={{fontSize: "20px"}}>Edent is a full service Dental Laboratory. We use traditional techniques alongside Digital technology. This allows us to use the latest materials, giving accuracy and consistency at competitive prices.</p>
        </div>
      </div>

      <Info>
        <div>
          <Icon style={{ objectFit: "contain" }} src={Smile} />
          <h1>Orthodontic aligners</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={ToothIcon} />
          <h1>Creating Proshetics</h1>
        </div>
        <Seperator />
        <div>
          <Icon src={Teeth} />
          <h1>Crown and Bridge</h1>
        </div>
        <Seperator />
        <div>
          <Icon style={{objectFit: "cover"}} src={Tech} />
          <h1>CAD CAM Technology</h1>
        </div>
        <Seperator />
        <div>
          <Icon style={{ objectFit: "cover" }} src={Quality} />
          <h1>Providing Quality</h1>
        </div>
      </Info>
    </AboutContainer>
  )
}

export default About
