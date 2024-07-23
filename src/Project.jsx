import React from "react";

import Button from "./Button";
import Cardhover from "./Cardhover";
import img from "./assets/images/01-bg.jpg";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";






function Project() {
  
  return (
    <div>
    
      <div className="img1">
        <div className="bgcolor">
          <div className="childimg1">
            <h2 className="favorite">
              Your Favorite Place for Free <br /> Bootstrap Themes
            </h2>
            <p className=" lorem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
              provident porro tenetur nihil consectetur placeat aliquam nulla
              animi eaque fugit fug
            </p>
            <Button first={"Get started"} />
          </div>
        </div>
       
      </div>
      <div className="main">
        <div className="mainchild">
          <h2> We've got what you need!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            molestias facilis assumenda animi aliquid ipsa dicta eveniet neque
            perspiciatis ullam quis. Repellat, cum totam voluptate doloribus
            aspernatur nemo optio? Tempora.
          </p>
          <Button first={"Get started"} />
        </div>
      </div>
      <About/>
      <Gallery/>
      <div className="free">
        <h2>
          Free Download at Start Bootstrap!
          <hr
            style={{
              width: "10%",
              margin: "0 auto",
              borderBottom: " 3px solid white",
            }}
          />
        </h2>
        <Button first={"Get started"} />
      </div>
      <div className="mainfrom">
        <div className="mainfromchild">
        <h2>
          Let's Get In Touch!
          <hr
            style={{
              width: "10%",
              margin: "0 auto",
              borderBottom: " 3px solid red",
            }}
          />
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          aspernatur fuga velit voluptates ipsam atque dolore adipisci ullam
          labore quasi delectus obcaecati.
        </p>
      </div>
      </div>
      <Contact/>







      
   
    </div>
  );
}

export default Project;
