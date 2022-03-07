import React from 'react'
import styled from 'styled-components'
import Headshot from '../headshot.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = styled.div`
  /* display: flex;
  width: 100%;
  overflow: hidden; */
  margin: 7rem 0;
  color: rgba(0,0,0,0.8);

  img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
  }
`

const TeamTitle = styled.h1`
  font-size: 4rem;
  font-family: 'Open Sans', sans-serif;
  margin-left: 10rem;
  font-weight: 100;
  margin-bottom: 5rem;
`

const Person = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  text-align: center;

  h1 {
    margin-bottom: 0px;
  }

  p {
    margin-bottom: 50px;
  }
`

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <Carousel>
      <TeamTitle>Meet the Team!</TeamTitle>
      <Slider {...settings}>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Lead Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Mid Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>CEO</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Lead Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Lead Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Lead Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
        <Person>
          <img src={Headshot} alt="Headshot" />
          <h1>Lead Technician</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Person>
      </Slider>
    </Carousel>
  )
}

export default Team
