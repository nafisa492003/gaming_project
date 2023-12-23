import React from 'react'
import'./Store_part.css';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import product1 from '../assets/product-one.png';
import product2 from '../assets/product-two.png';
import product3 from '../assets/product-three.png';
const Store_part = () => {
  return (
   <section id='store_part'>
   <Container>
   <h1>WE PROVIDE ALL GAMING ACCESORIES</h1>
   <Carousel>
      <Carousel.Item>
       <div className="product_img">
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product1} alt="" />
       </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="product_img">
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product1} alt="" />
       </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="product_img">
        <img src={product1} alt="" />
        <img src={product2} alt="" />
        <img src={product3} alt="" />
        <img src={product1} alt="" />
       </div>
      </Carousel.Item>
    </Carousel>
   </Container>
   </section>
  )
}

export default Store_part