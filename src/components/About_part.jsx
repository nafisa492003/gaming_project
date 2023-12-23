import React from 'react'
import Container from 'react-bootstrap/Container';
import './About_part.css'
import img from '../assets/about_img.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TiTick } from "react-icons/ti";
import { FaAnglesRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
const About_part = () => {
  return (
    <section id='about_part'>
<Container>
<h1>ABOUT THE BIGGEST HANCOK 
COMMUNITY</h1>
<Row>
        <Col><img src={img} alt="" /></Col>
        <Col>
            
            <ul>
            <h4>MOST POPULAR GAMING PLATFORM.</h4>
                <li><TiTick className='tick' />World Bigghest Community & Gaming Server</li>
                <li><TiTick className='tick' />Friendly Clan & Mates</li>
                <li><TiTick className='tick' />We Provide Gaming Accesories</li>
                <li><TiTick className='tick' />Largest Online Gaming Community & Shop</li>
                <li><TiTick className='tick' />Hancok reaches more than 150 million monthly users</li>
                <li><TiTick className='tick' />We are leading global media brand for games</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo sed odio 
temporibus magni quia eveniet odit placeat repellat quod ipsum modi 
necessitatibus, dolorum officia!</p>
<button>View More <FaAnglesRight /> </button>
            </ul>
        </Col>
      </Row>
      <div className="counter_part">
          <div className="counter_parts">
            <h2>112k<GoDotFill className='dot' /></h2>
            <h5>Community Earning</h5>
          </div>
          <div className="counter_parts">
            <h2>12M<GoDotFill className='dot' /></h2>
            <h5>Total Member</h5>
          </div>
          <div className="counter_parts">
            <h2>100k<GoDotFill className='dot' /></h2>
            <h5>Streams Complete</h5>
          </div>
          <div className="counter_parts">
            <h2>844<GoDotFill className='dot' /></h2>
            <h5>Total Sponsers</h5>
          </div>
       </div>
       
</Container>
    </section>
  )
}

export default About_part