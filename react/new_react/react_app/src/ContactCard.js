import React, { useState } from 'react';
import "./style.css";

const ContactCard = () => {
    const [showAge, setShowAge] = useState(false);
    return (
      <div className="contact-card mx-auto m-4">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className="user-details">
          <p>Name: Jenny Huanng</p>
          <p>Email: Jenny@hotmail.com</p>
          {showAge === true ? <p>Age: 32</p> : null}
          <button onClick={()=> setShowAge((!showAge))}>Toggle Age</button>
        </div>
      </div>
    );
  }

  
  
  export default ContactCard;
