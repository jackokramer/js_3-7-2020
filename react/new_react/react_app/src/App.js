import React from 'react';
import "./style.css";

const App = () => {
  return(
    <div className="contact-card mx-auto p-5 m-5">
	    <img src="https://via.placeholder.com/150" alt="profile" />
	<div className="user-details">
		    <p>Name: Jenny Han</p>
		    <p>Email: Jenny.Han@notreal.com</p>
		    <p>Age: 25</p>
	  </div>
  </div>
  );
};

export default App;

//export default ContactCard;