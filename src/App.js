import styled from 'styled-components'
import { AiOutlineCopyrightCircle, AiOutlinePhone, AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { FaRegAddressBook } from 'react-icons/fa'
import Header from './components/Header'
import About from './components/About'
import React from 'react'
import Map from './components/Maps'
import Team from './components/Sevices'
import './app.css'
import Grid from './components/Grid'

const Footer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin: 80px 100px 0 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  color: rgba(0,0,0,0.2);
  border-top: 1px solid rgba(0,0,0,0.1);
`

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0,0,0,0.8);
  margin-top: 550px;
  margin-left: 300px;

  h1 {
    color: rgba(34, 204, 199, 0.5);
    font-size: 40px;
  }

  @media(max-width: 1400px) {
      margin-left: 50px;
  }
`

const ContactInfo = styled.div`
  width: 50%;
  margin-top: 100px;

  div {
    width: 50%;
  }
`

const AppContainer = styled.div`
  width: 100%;
  overflow: hidden !important;
`


function App() {
  return (
    <AppContainer>
      <Header />
      <About />
      <Team />
      <Grid />

      <Map />
      <Contact id="Contact">
        <ContactInfo>
          <h1>Located in Barnstaple, <br />Devon.</h1>
          <p style={{ fontSize: '26px', color: 'rgba(0,0,0,0.6)' }}>Please contact us if you'd like <br /> any further assistance!
          </p>
          <p><FaRegAddressBook /> Address: Unit 4 Abbey Road EX31 1JU </p>
          <p><AiOutlinePhone /> Phone Number: 01271327383 <br /><AiOutlineMobile /> Mobile Number (<b>Out of Hours Emergeny Only</b>): 07837201431</p>
          <p><AiOutlineMail /> Email: e-dent@hotmail.co.uk</p>
        </ContactInfo>
      </Contact>


      <Footer>
        <p>E-dent Limted <AiOutlineCopyrightCircle /></p>
      </Footer>
    </AppContainer>
  );
}

export default App
