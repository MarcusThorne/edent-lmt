import React from 'react'
import styled from 'styled-components'
import Mirror from '../mirror.jpg'
import Fillin from '../fillin.jpg'
import Tube from '../tube.jpg'

const GridContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Open Sans', sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90vw;
  grid-gap: 40px;
  margin: 100px auto;

  @media(max-width: 600px) {
      grid-template-columns: 1fr
  }
`

const Content = styled.div`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${props => props.image});
  height: 500px;
  background-position: center;
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
    max-width: 50%;
    margin: 10px auto;
  }
`

function Grid() {
  return (
    <GridContainer>
      <Content image={Mirror} color="black">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel sunt soluta delectus in velit quidem cupiditate optio. Beatae nisi veritatis obcaecati iure quis, dolorum ea ratione non eaque error?</p>
      </Content>
      <Content image={Fillin} color="white">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel sunt soluta delectus in velit quidem cupiditate optio. Beatae nisi veritatis obcaecati iure quis, dolorum ea ratione non eaque error?</p>
      </Content>
      <Content image={Tube} color="white">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel sunt soluta delectus in velit quidem cupiditate optio. Beatae nisi veritatis obcaecati iure quis, dolorum ea ratione non eaque error?</p>
      </Content>
      <Content image={Mirror} color="black">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel sunt soluta delectus in velit quidem cupiditate optio. Beatae nisi veritatis obcaecati iure quis, dolorum ea ratione non eaque error?</p>
      </Content>
    </GridContainer>
  )
}

export default Grid
