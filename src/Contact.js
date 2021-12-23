import React from 'react';
import './Contact.css';
import contactImg from "./img/contact.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">I am available for work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+961 81 34 60 36</strong> or email <strong>basharhamade12@.com</strong></p>
                        </div>
                        <div style={{display:"flex"}} >
                            <a href="https://www.instagram.com/basharhamede/">
                                <i class="fab fa-instagram fa-2x" style={{color: '#F9004D',margin:"0 10px auto"}}> </i>
                            </a>
                            <a href="https://www.facebook.com/bachar.hmede.1/">
                            <i class="fab fa-facebook fa-2x" style={{color: '#F9004D',margin:"0 10px auto"}}> </i>
                        </a>
                        </div>
                        {/*<div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
    </div>*/}
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
