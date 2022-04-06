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
  width: 98vw;
  overflow: hidden;
  grid-gap: 10px;
  margin: 10px;

  @media(max-width: 600px) {
      grid-template-columns: 1fr
  }
`

const Content = styled.div`
  background-image: url(${props => props.image});
  height: 500px;
  background-position: center;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 40px;
  color: ${props => props.color};
  text-shadow: 1px 1px 10px rgba(0,0,0,0.7);

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
