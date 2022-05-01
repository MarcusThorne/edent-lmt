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
              <p>E-dent is a digital laboratory keeping up with modern times, we keep our business model fresh and constantly adjust to growing technology. Our time and money are best invested in our milling machines and CAD/CAM to provide the best quality implant bars and abutments. It's important to us to not only provide our customers with the highest possible standard of product but also exceptional customer service, so we can help you crack that smile you've always wanted.</p>
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
