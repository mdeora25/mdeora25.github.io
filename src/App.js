import React from "react";
import "./App.css";

import background from './images/beach.JPG'
import headshot from './images/headshot1.png'
// import About from "./Component/about";
import Home from "./Component/home";
import instagram from "./images/instagram.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import resume from "./images/resume.png";
import email from "./images/email.png";
import PDF from "./images/resume.pdf";

import {
  Welcome_text
} from "./Component/text";
function App() {
  const style_back = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '900px'} 

  

  return (
    <div style={style_back} >
       
      <Home
          subtitle={Welcome_text}
          dark={true}
          id="Home"
          img_src={headshot}
          pic1={github}
          pic2={linkedin}
          pic3={instagram}
          pic4={twitter}
          pic5={resume}
          pic6={email}
          Pdf={PDF}
        />
      
    </div>
  );
}

export default App;

