import React from 'react';
import '../styles/contact.css';

function Contact() {
  const lat = 6.992313;
  const lng = 121.9275;
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="contact">
        <div className="topF" />
        <div className="topF" />
        <div className="contactCon">
            <div className="tit">
                <h2 className='onView'>Contact Me</h2>
            </div>
            <div className="contactCard">
                <div className="form">
                    <div className="part">
                        <label htmlFor="fullnameInputContact">Fullname</label>
                        <div className="inp">
                            <input type="text" id="fullnameInputContact" />
                        </div>
                    </div>
                    <div className="part">
                        <label htmlFor="emailInputContact">Email Address</label>
                        <div className="inp">
                            <input type="email" id="emailInputContact" />
                        </div>
                    </div>
                    <div className="part partflex">
                        <label htmlFor="messageInputContact">Message</label>
                        <div className="inp">
                            <textarea id="messageInputContact" />
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        title="Location Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={src}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
