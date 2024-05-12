import React from "react";
import './header.css'
import people from '../../assets/people.png'
//import ai from '../../assets/ai.png';

const header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s improve our problem solving skills!</h1>
      <p>Get a latest inteview question asked by your dream company eveyday on you mail. And yes, absolutely free of cost!</p>

      <div className="gpt3__header-content__name_input">
        <input type="name" placeholder="Your full name" />
      </div>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt = "people_who_enrolled" />
        <p>600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    {/*. here we can have the image if we want.
    <div className="gpt3__header-image">
      <img src={ai} alt = "header_img"/>
    </div>
     */}

  </div>
    )
}

export default header;  
