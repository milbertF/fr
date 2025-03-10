import React from 'react'
import './../styles/aboutme.css'
import Milbert from './../images/picture.png'

function aboume() {
  return (
    <div className="aboutWrap" id='aboutme'>
        <div className="topF"></div>
        <h2 className='onView'>About Me</h2>
        <div className="aboutCon">
            <div className="aboutImg">
                <img src={Milbert} alt="" />
            </div>
            <div className="aboutDetails">
                <h3 className='onView'>Hi, I'm Milbert</h3>
                <p className='onView'>With three years of expertise creating slick, responsive, 
                    and intuitive online interfaces, I am a dedicated frontend 
                    developer based in the Philippines. Building cutting-edge, 
                    aesthetically pleasing designs with flawless user experiences 
                    is my area of expertise. When I'm not coding, I like to go 
                    on rides, ride my bike, and jog because I'm constantly 
                    searching for new experiences. Let's work together to build 
                    something incredible!
                </p>
                <p className='onView'>Contact Me!</p>
                <div className="abline onView"></div>
                
                <div className="aboutLinks onView">

                    <div className="linkWrap">
                        <a href="https://m.me/falcasantos.elizalde.milbert" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </a>
                        <a href="https://www.instagram.com/milbert__/" target="_blank">
                            <i class="fa-brands fa-square-instagram"></i>
                            <p>Instagram</p>
                        </a>
                    </div>

                    <div className="linkWrap">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mfalcasantos23@gmail.com" target="_blank">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Email</p>
                        </a>
                        <a href="https://www.linkedin.com/messaging/compose/?recipient=mfalcasantos23" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </a>
                    </div>


                </div>
            </div>
        </div>
        <div className="block">

        </div>
    </div>
  )
}

export default aboume