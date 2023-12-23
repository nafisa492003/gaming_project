import React from 'react'
import { Container } from 'react-bootstrap'
import'./Faq_part.css';
const Faq_part = () => {
  return (
   <section id='faq_part'>
 <Container>
  <h1>FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”</h1>
   <div className="all_faq_part_one">
   <div className="faq_one">
      <h4>1</h4>
      <div className="faq_text">
        <h3>HOW TO DOWNLOAD THE GAME ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, 
sed error at adipisci repellat rem maiores provident voluptatem ipsum 
autem fugiat.</p>
      </div>
   </div>
   <div className="faq_two">
      <h4>2</h4>
      <div className="faq_text">
        <h3>IS THERE ANY AGE RESTRICTIONS ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, 
sed error at adipisci repellat rem maiores provident voluptatem ipsum 
autem fugiat.</p>
      </div>
   </div>
   </div>
   <hr className='x_line' />
   <hr className='y_line' />
   <div className="all_faq_part_two">
    <div className="faq_three">
     <h4>3</h4>
     <div className="faq_text">
        <h3>HOW TO BECOME A TEAM MEMBER ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, 
sed error at adipisci repellat rem maiores provident voluptatem ipsum 
autem fugiat.</p>
      </div>
    </div>
    <div className="faq_four">
     <h4>4</h4>
     <div className="faq_text">
        <h3>HOW TO BECOME A TEAM MEMBER ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste, 
sed error at adipisci repellat rem maiores provident voluptatem ipsum 
autem fugiat.</p>
      </div>
    </div>
    </div> 
 </Container>
   </section>
  )
}

export default Faq_part