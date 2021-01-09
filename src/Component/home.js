import React from "react";

export default function Home({
  title,
  subtitle,
  id,
  contact_text,
  img_src,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  Pdf,
}) {
  const image_style = {
    width:340,
    height:340,
    float: "left",
    padding:"10px",
    margin: "100px",
    
    borderRadius: 340/1,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red"
    
  }
  return (
    <div>
      <img className="image" src={img_src} style={image_style} alt="" >
      </img>
      <div className="section-content" id={id}>
      
        <h1 className="section-header">{title}</h1>
        <p className="section-text">
          {subtitle}
        </p>
        <a href="https://github.com/mdeora25?tab=stars">
          <img className="icon" src={pic1} width="65px" alt=""></img>
        </a>
        <a href="https://www.linkedin.com/in/mahip-deora/">
          <img className="icon" src={pic2} width="65px"alt=""></img>
        </a>
        <a href="https://www.instagram.com/mahip_deor25/">
          <img className="icon" src={pic3} width="65px"alt=""></img>
        </a>
        <a href="https://twitter.com/mahip_deor25">
          <img className="icon" src={pic4} width="65px"alt=""></img>
        </a>
        <a href={Pdf}>
          <img className="icon" src={pic5} width="65px"alt=""></img>
        </a>
        <a href="mailto:mahip.deora@gmail.com">
          <img className="icon" src={pic6} width="65px"alt=""></img>
        </a>
      </div>
    </div>
  );
}
