import React from 'react'
import styled from 'styled-components'
import Mouth from '../mouth-piece.jpg'

const ServiceContainer = styled.div`
  display: flex;

  img {
    width: 800px;
  }

`

const Seperator = styled.div`
  border-top: 2px solid rgba(150,150,150,0.1);
  width: 100%;
  margin-left: auto;
  margin-right: 30%;
  margin-bottom: 80px;
`

const Left = styled.div`
  width: 60%;
  position: relative;
`

const Right = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  width: 40%;
  padding-right: 50px;
  color: rgba(0,0,0,0.6);

  p {
    margin-top: 20px;
  }

  ul {
    margin-top: 20px;
  }

  h1 {
    color: rgba(0,0,0,0.8);
  }
`

const MoreInfoContainer = styled.div`
  width: 100%;
  padding: 500px auto !important;
  margin: 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: rgba(0,0,0,0.8);
  background-color: #daecfa;
  margin-bottom: 3px;
  color: white;
  text-shadow: 1px 1px 10px rgba(0,0,0,0.1);

  h1 {
    padding-top: 100px;
    margin: 0;
  }

  p {
    padding-bottom: 100px;
    margin: 0;
    width: 50%;
    margin: auto;
    margin-top: 10px;
  }
`

function Services() {
  return (
    <>
      <ServiceContainer>
        <Left>
          <img src={Mouth} alt="" />
        </Left>
        <Right>
          <Seperator />
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet doloremque cum, dicta odio voluptas alias quos.</p>
          <ul>
            <li>Crowns (Available in porcelain, and precious metal)</li>
            <li>Bridges</li>
            <li>Porcelain bonded Pontic</li>
            <li>Zirconia Bridges</li>
            <li>Porcelain Veneer</li>
            <li>Composite Inlay</li>
            <li>Mouth Guards and Retainers (Available either clear or in a range of colours and patterns)</li>
            <li>Al supplied with storage boxes</li>
            <li>Study Models</li>
            <li>Denture Repairs</li>
          </ul>
        </Right>
      </ServiceContainer>
      <MoreInfoContainer>
        <h1>More Stuff</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam illum id praesentium repudiandae illo molestias eveniet hic cumque repellendus, perspiciatis consectetur consequatur ipsam in quod pariatur itaque at temporibus.</p>
      </MoreInfoContainer>
    </>
  )
}

export default Services
