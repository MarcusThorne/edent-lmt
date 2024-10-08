import React from 'react'
import styled from 'styled-components'
import Milling from '../milling.jpg'
import Prosthetics from '../prosthetics.jpg'
// import Tube from '../tube.jpg'
import Women from '../smile-women.jpg'
import Smiling from '../people-smiling.jpg'
import DLALogo from '../DLA-logo.png'

const GridContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90vw;
  grid-gap: 40px;
  margin: 100px auto;
  margin-top: 0;
  border-top: 2px solid rgba(100,100,100,0.1);
  padding-top: 100px;

  @media(max-width: 750px) {
      grid-template-columns: 1fr;

      p {
        font-size: 14px;
      }
  }
`

const DLA = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 80px;
  width: 120px;
`

const Content = styled.div`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${props => props.image});
  height: 500px;
  background-position: center;
  position: relative;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 40px;
  color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  font-size: 16px;
  transition: 0.3s;

  &:hover {
      p, h1 {
        transition: 0.3s;
          transform: scale(1.10);
      }

    box-shadow: 5px 5px 20px rgba(0,0,0,0.8);
  }

  p, h1 {
    max-width: 80%;
    margin: 10px auto;

    @media(min-width: 800px) {
      max-width: 50%;
    }
  }
`

const DAMAS = styled.a`
  position: absolute;
  right: 0;
  padding-right: 20px;
  background-color: #0154a4;
  padding: 10px;
  color: rgba(255,255,255,0.7);
  border-radius: 4px 0 0 4px;
  text-decoration: none;
  font-size: 14px;
  top: 40px;

`

function Grid() {
  return (
    <GridContainer id="Achievements">
      <Content image={Smiling} color="black">
        <h1>Denture Repair Service</h1>
        <p>We provide a same day denture repair service direct to the public,
          Appointments are not always necessary, call 01271 327383</p>
      </Content>
      <Content image={Milling} color="white">
        <h1>Advanced Technology</h1>
        <p>We accept all types of intraoral scan files in a STL format and with our scanner, provide a variety of restorations. Metal and metal free crown and bridge, partial dentures, flexi dentures, implants, orthodontic aligners. We produce 3D printed models, which combined, give accurate and consistent results.</p>
        {/* <DAMAS href="https://www.damas.co.uk/about-damas/" target="_blank">Take a Look</DAMAS> */}
      </Content>
      <Content image={Prosthetics} color="white">
        <h1>Prosthetics</h1>
        <p>We work closely alongside our surgeons using all the best materials, to make functional and aesthetically pleasing dentures for the patient.</p>
      </Content>
      <Content image={Women} color="black">
        <DLA src={DLALogo} />
        <h1>The Dental Laboratories Association</h1>
        <p>The Dental Laboratories Association Ltd (DLA) is a professional body for dental laboratory owners in the UK.</p>
        <DAMAS href="https://dla.org.uk/" target="blank">Check It Out!</DAMAS>
      </Content>
    </GridContainer>
  )
}

export default Grid
