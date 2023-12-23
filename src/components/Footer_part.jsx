import React from 'react'
import'./Footer_part.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import img from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import footer from'../assets/footer-img.png';
const Footer_part = () => {
  return (
   <section id='footer_part'>
<Container>
    <div className="footer_top">
        <h2>subscribe us to get latest news in your inbox 
from hancok community</h2>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        SUBSCRIBE
        </Button>
      </InputGroup>
    </div>
    <div className="footer_content">
        <div className="footer_one">
<img src={img} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero 
officiis rem consectetur sunt cupiditate eius obcaecati, culpa, 
aspernatur aperiam id.</p>
<div className="footer_icon">
<FaFacebook className='icons' />
<FaLinkedin className='icons' />
<AiFillTwitterCircle className='icons' />
<FaSquareInstagram className='icons' />
</div>
        </div>
        <div className="footer_two">
            
            <ul>
            <h1>LINKS</h1>   
             <li>Home</li>
             <li>About</li>
             <li>Tournament</li>
             <li>Contact</li>
            </ul>
        </div>
        <div className="footer_three">
            
            <ul>
            <h1>TEAMS</h1>
                <li>PALADINS</li>
                <li>CS:GO</li>
                <li>DOTA 2</li>
                <li>VALORANT</li>
            </ul>
        </div>
        <div className="footer_four">
            <h1>GALLERY</h1>
<img src={footer} alt="" />
        </div>
    </div>
   
   <hr className='bottom' />
   <h5>© 2021 All rights reserved by<span> Themebea</span>.</h5>
</Container>
   </section>
  )
}

export default Footer_part