import React from "react"
import Carousel from 'nuka-carousel';
import StyledHero from "./Hero.style"

const content = [{
  image: 'https://loremflickr.com/640/360',
  title: 'Já somos quase 1000 no nosso Discord!',
  button: 'Inscreva-se'
}]

const Hero = () => {
  return (
    <StyledHero>
      <Carousel wrapAround autoplay slidesToShow={1} cellAlign="center">
        {content.map((item, index) => (
          <div
            key={index}
            className="hero-image"
            style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover' }}
          >
            <div className="center hero-text">
              <h1>{item.title}</h1>
              <a href="/">{item.button}</a>
            </div> 
          </div>
        ))}
      </Carousel>
    </StyledHero>
  )
}

export default Hero
