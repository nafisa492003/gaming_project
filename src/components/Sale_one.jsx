import React from 'react'
import { Container } from 'react-bootstrap'
import'./Sale_one.css';
import sale1 from'../assets/sale1 1.png';
import sale2 from'../assets/sale3 1.png';
import sale3 from'../assets/sale4 1.png';
import sale4 from'../assets/sale5 1.png';
import slide from '../assets/slide-img.png';
const Sale_one = () => {
  return (
    <section id='sale_one'>
    <Container>
     <h1>TOP GAMES ON BLACK FRIDAY<br></br>
 SALE</h1>
 <div className="sale_one_img">
<div className="sale_imges">
    <img src={sale1} alt="" />
    <h2>Horizon Zero Dawn™ Complet...</h2>
    <h3>Guerrilla Games</h3>
    <div className="game_price">
        <h4>-40%</h4>
        <h5>$19.99</h5>
        <h6>$7.99</h6>
    </div>
</div>
<div className="sale_imges">
    <img src={sale2} alt="" />
    <h2>Disciples: Liberation</h2>
    <h3>Frima Studio</h3>
    <div className="game_price">
    <h4>-40%</h4>
        <h5>$19.99</h5>
        <h6>$7.99</h6>
    </div>
</div>
<div className="sale_imges">
    <img src={sale3} alt="" />
    <h2>Horizon Zero Dawn™ Complet...</h2>
    <h3>Guerrilla Games</h3>
    <div className="game_price">
    <h4>-40%</h4>
        <h5>$19.99</h5>
        <h6>$7.99</h6>
    </div>
</div>
<div className="sale_imges">
    <img src={sale4} alt="" />
    <h2>Industries of Titan</h2>
    <h3>Brace Yourself Games</h3>
    <div className="game_price">
    <h4>-40%</h4>
        <h5>$19.99</h5>
        <h6>$7.99</h6>
    </div>
</div>
 </div>
 <div className="catalog">
    <h2>Hancok Games Catalog</h2>
    <div className="catalog_part">
        <div className="catalog_one">
            <h3>Choose Your Favourite Game</h3>
            <h4>Explore hancok catalog for your next 
favorite game!</h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus culpa ratione enim maiores 
nisi cupiditate non nesciunt officia labore aut? Et, vero!</p>
<button>Browse All</button>
        </div>
        <div className="catalog_two">
<img src={slide} alt="" />
        </div>
    </div>
 </div>
    </Container>
    </section>
  )
}

export default Sale_one