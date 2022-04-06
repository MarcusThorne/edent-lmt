import React from 'react'
import styled from 'styled-components'
import Headshot from '../headshot.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = styled.div`
  margin: 7rem auto;
  color: rgba(0,0,0,0.8);
  max-width: 1600px;

  img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
  }
`

const TeamTitle = styled.div`
  font-size: 4rem;
  font-family: 'Open Sans', sans-serif;
  margin-left: 10rem;
  font-weight: 100;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  width: max-content;

  @media(max-width: 500px) {
      margin: 40px;
      font-size: 2rem;
  }
`

const Person = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  transition: 0.3s;
  padding-top: 20px;

  &:hover {
    transform: scale(1.1);
  }

  h1 {
    margin-bottom: 0px;
  }

  p {
    margin-bottom: 50px;
  }
`

const Underline = styled.span`
  width: 40%;
  border-bottom: 3px solid #daecfa;
  margin-left: auto;
`

function Team() {
    const responsive = () => {
        // repsonsive carousel with slick
        var settings = [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

        return settings
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: responsive()
    };

    return (
        <Carousel>
            <TeamTitle>Meet the Team!<Underline /></TeamTitle>
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
