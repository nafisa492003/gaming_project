import React from 'react'
import Container from 'react-bootstrap/Container';
import './Popular.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from'../assets/violant.png';
import img from'../assets/trend-games3 1.png';
const Popular = () => {
  return (
    <section id='popular'>
    <Container>
        <h1>POPULAR GAMES AROUND THE
     <br></br>WORLD </h1>
     <Carousel>
      <Carousel.Item>
        <div className="img">
        <img src={img1} alt="" />
        <img className='trend' src={img} alt="" />
        </div>
        
      </Carousel.Item>
      
      <Carousel.Item>
      <div className="img">
        <img src={img1} alt="" />
        <img className='trend' src={img} alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="img">
        <img src={img1} alt="" />
        <img className='trend' src={img} alt="" />
        </div>
      </Carousel.Item>
    </Carousel>

        </Container> 
    </section>
  )
}

export default Popular