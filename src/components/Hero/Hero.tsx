import React from "react"
import Carousel from 'nuka-carousel';
import StyledHero from "./Hero.style"

const content = [{
  image: 'https://loremflickr.com/640/360',
  title: 'Já somos quase 1000 no nosso Discord!',
  button: 'Inscreva-se'
<<<<<<< HEAD
=======
},
{
  image: 'https://loremflickr.com/640/360',
  title: 'Nossos plantões estão a todo vapor!',
  button: 'Entenda os plantões'
>>>>>>> 798583205f9fdd6d3a3ec09c7375643fe0a321e1
}]

const Hero = () => {
  return (
    <StyledHero>
<<<<<<< HEAD
      <Carousel wrapAround autoplay slidesToShow={1} cellAlign="center">
=======
      <Carousel wrapAround slidesToShow={1} cellAlign="center">
>>>>>>> 798583205f9fdd6d3a3ec09c7375643fe0a321e1
        {content.map((item, index) => (
          <div
            key={index}
            className="hero-image"
            style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover' }}
          >
            <div className="center hero-text">
              <h1>{item.title}</h1>
              <a href="/">{item.button}</a>
<<<<<<< HEAD
            </div> 
=======
            </div>
>>>>>>> 798583205f9fdd6d3a3ec09c7375643fe0a321e1
          </div>
        ))}
      </Carousel>
    </StyledHero>
  )
}

export default Hero
