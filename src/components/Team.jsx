import React from 'react'
import"./Team.css";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import team1 from '../assets/team-1 1.png';
import team2 from '../assets/team-2 1.png';
import team3 from '../assets/team-3 1.png';
import team4 from '../assets/team-4 1.png';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
const Team = () => {
  return (
   <section id='team_part'>
<Container>
    <h1>MEET OUR PROFESSIONAL ELITE <br></br>
TEAM</h1>
  <div className="card_img">
  <Card className="bg-dark text-white">
      <Card.Img className='team_img' src={team1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Paladins</Card.Title>
        <Card.Text className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Ut elit tellus, luctus nec ullamcorper
        </Card.Text>
       <div className="btn_icon">
        <button>Know more</button>
        <div className="icon">
        <FaFacebook />
        <FaLinkedin />
        <AiFillTwitterCircle />
        </div>
       </div>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img className='team_img' src={team2} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>CS:GO</Card.Title>
        <Card.Text className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Ut elit tellus, luctus nec ullamcorper
        </Card.Text>
       <div className="btn_icon">
        <button>Know more</button>
        <div className="icon">
        <FaFacebook />
        <FaLinkedin />
        <AiFillTwitterCircle />
        </div>
       </div>
      </Card.ImgOverlay>
    </Card>
  </div>
  <div className="card_imgs">
  <Card className="bg-dark text-white">
      <Card.Img className='team_img' src={team3} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>CS:GO</Card.Title>
        <Card.Text className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Ut elit tellus, luctus nec ullamcorper
        </Card.Text>
       <div className="btn_icon">
        <button>Know more</button>
        <div className="icon">
        <FaFacebook />
        <FaLinkedin />
        <AiFillTwitterCircle />
        </div>
       </div>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img className='team_img' src={team4} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>CS:GO</Card.Title>
        <Card.Text className='text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Ut elit tellus, luctus nec ullamcorper
        </Card.Text>
       <div className="btn_icon">
        <button>Know more</button>
        <div className="icon">
        <FaFacebook />
        <FaLinkedin />
        <AiFillTwitterCircle />
        </div>
       </div>
      </Card.ImgOverlay>
    </Card>
  </div>
</Container>
   </section>
  )
}

export default Team