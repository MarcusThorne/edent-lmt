import styled from 'styled-components'
import { AiOutlineCopyrightCircle, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import Header from './components/Header'
import About from './components/About'
import React from 'react'
import Map from './components/Maps'
import Team from './components/Team'
import Services from './components/Services'

const Footer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 630px;
`

const Contact = styled.div`
  background-color: rgb(218, 236, 250);
  padding: 100px 50px;
  display: flex;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0,0,0,0.8);
`

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden !important;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <About />
      <Team />
      <Services />

      <Contact>
        <div>
          <h1>Want to get in Touch?</h1>
          <p><AiOutlinePhone /> Mobile Number - 0738324324</p>
          <p><AiOutlineMail /> Email - Edent@hotmail.com</p>
        </div>
      </Contact>

      <Map />

      <Footer>
        <p>E-dent Limted <AiOutlineCopyrightCircle /></p>
      </Footer>
    </AppWrapper>
  );
}

export default App
