import React from 'react'
import Container from 'react-bootstrap/Container';
import './Tournament.css';
import tour1 from'../assets/tournament-item1.png';
import tour2 from '../assets/tournament-item3.png';
import tour3 from '../assets/tour-content2.png';
import contest1 from '../assets/contest1 1.png';
import contest2 from '../assets/contest2 1.png';
import contest3 from '../assets/contest3 1.png';
import contest4 from '../assets/contest4 1.png';
const Tournament = () => {
  return (
   <section id='tournament'>
<Container>
<h1>LIVE STREAMIN VIDEO BY 
HANCOK</h1>
<div className="tournament_img">
<img src={tour1} alt="" />
<img src={tour3} alt="" />
<img src={tour2} alt="" />
</div>
<h2>PREVIOUS MATCHES</h2>
<div className="previous_match">
    <div className="one">
        <div className="team">
           <img src={contest1} alt="" /> 
           <h5>TEAM DELTA</h5>
        </div>
        <h3>9:12</h3>
        <div className="teams">
            <h5>TEAM ALPHA</h5>
            <img src={contest2} alt="" />
        </div>
    </div>
    <div className="two">
        <div className="team">
            <img src={contest3} alt="" />
            <h5>TEAM DEVILS</h5>
        </div>
        <h3>17:8</h3>
        <div className="teams">
            <h5>TEAM NINJA</h5>
            <img src={contest4} alt="" />
        </div>
    </div>
</div>
</Container>
   </section>
  )
}

export default Tournament