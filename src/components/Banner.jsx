import React from 'react'
import Container from 'react-bootstrap/Container';
import'./Banner.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
const Banner = () => {
  return (
   <section id='banner'>
<Container>
<div className="banner_text">
    <h4>LIFE TIME</h4>
    <h1>GAMING EXPERIENCE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias voluptas optio. 
Veritatis recusandae pariatur qui dignissimos dolore similique ad adipisci eum. Quos 
aliquid fugiat magni illum eius?</p>
<button>View More <svg className='double_right' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7.27915 7.87547L2.84363 13.3987C2.53705 13.7805 2.04132 13.7805 1.73801 13.3987L1.00093 12.4809C0.694353 12.0991 0.694353 11.4818 1.00093 11.1041L4.14493 7.18912L1.00093 3.27409C0.694353 2.89234 0.694353 2.27503 1.00093 1.89734L1.73474 0.971375C2.04132 0.58962 2.53705 0.58962 2.84036 0.971375L7.27589 6.49465C7.58572 6.8764 7.58572 7.49371 7.27915 7.87547ZM13.5411 6.49465L9.10554 0.971375C8.79897 0.58962 8.30323 0.58962 7.99992 0.971375L7.26284 1.88921C6.95627 2.27097 6.95627 2.88828 7.26284 3.26597L10.4068 7.181L7.26284 11.096C6.95627 11.4778 6.95627 12.0951 7.26284 12.4728L7.99992 13.3906C8.3065 13.7724 8.80223 13.7724 9.10554 13.3906L13.5411 7.86734C13.8476 7.49371 13.8476 6.8764 13.5411 6.49465Z" fill="#121212"/>
</svg></button>
</div>
<div className="social_icons">
<span><FaFacebook /></span>
<span><FaLinkedin /></span>
<span><AiFillTwitterCircle /></span>
<span><FaSquareInstagram /></span>
</div>
</Container>
   </section>
  )
}

export default Banner