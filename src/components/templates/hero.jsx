import React, { Component } from 'react'
import './../styles/hero.css'
import tooltipHover from "./../javascript/tooltip.js";

import BlueWaters from './../images/companyLogo/blueWaters.png'
import Cramatix from './../images/companyLogo/cramatix.svg'
import Sienne from './../images/companyLogo/sienne.svg'
import Viaje from './../images/companyLogo/viaje.png'
import Bidwave from './../images/projects/bidwave.png'

export class hero extends Component {
  render() {
    return (
      <div className='heroWrap'>
        <div className="companies">
          <div className="companyWrap">
            <div className="company">
              <img src={BlueWaters} alt="" />
              <p>Blue Waters</p>
            </div>
            <div className="company">
              <img src={Cramatix} alt="" />
              <p>Cramatix</p>
            </div>
          </div>
          <div className="companyWrap">
            <div className="company">
              <img src={Sienne} alt="" />
              <p>Sienne</p>
            </div>
            <div className="company">
              <img src={Viaje} alt="" />
              <p>Viaje</p>
            </div>
            <div className="company">
              <img src={Bidwave} alt="" />
              <p>Bidwave</p>
            </div>
          </div>
        </div>
        <h1 className='onLoad'><a>Turning ideas into interactive experiences.</a></h1>
        <p className='onLoad'>Frontend Developer dedicated to crafting seamless, responsive, and
        visually engaging digital experiences that bring ideas to life.</p>

        <i class="fa-solid fa-arrow-down-long onLoads"
            onMouseOver={(e) => tooltipHover(e, "Go Down")}
            onMouseOut={() => tooltipHover(null, "")}
        ></i>
      </div>
    )
  }
}

export default hero