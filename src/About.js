import React from "react";
import "./About.css";
import aboutImg from "./img/about2.jpg";
import CV from "./CV.pdf";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My Name is Bashar Hamade,I am a 19 year old software developer
                with a wide variety of skillsets that includes:
              </p>
              <p className="about__text p__color">
<<<<<<< HEAD
                Front-end web development,Back-end web development,Algorithmic
                Problem solving,Game development,Machine Learning & AI,and a
                little bit of 3D-modelling and Graphics.
=======
                Front-end web development,Back-end web development,Algorithmic Problem solving,Android development(using Java),Game development,Machine Learning & AI,and a little bit of 3D-modelling and Graphics.
>>>>>>> 2bee76a9511185115f3625cc9af7773833d7e60a
              </p>
              <p className="about__text p__color">
                I'm currently in my 3rd year in the Lebanese University,where I
                am studying my Computer Science Bachelor
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={CV} download>
                  <button className="about btn pointer">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
