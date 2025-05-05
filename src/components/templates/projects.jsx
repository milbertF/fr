import React from 'react'
import './../styles/projects.css'

import Bidwave from './../images/projectsSS/bidwave.png';
import Shopease from './../images/projectsSS/shopease.png';
import Table from './../images/projectsSS/tableofelements.png';
import SWH from './../images/projectsSS/sleep.png';
import Lineshub from './../images/projectsSS/lineshub.png';
import Viaje from './../images/projectsSS/viaje.png';
import Todolist from './../images/projectsSS/todolist.png';
import Calculator from './../images/projectsSS/calculator.png';
import Pokemon from './../images/projectsSS/pokemon.png';

function projects() {
  return (
    <div className="projects">
        <div className="topF"></div>
        <div className="topF"></div>
        <div className="projectCon">
            <div className="tit">
                <h2 className='onView'>Projects</h2>
            </div>
            <div className="proCardCon">
                <div className="procard onView">
                    <div className="img">
                        <img src={Shopease} alt="Unavailable" />
                    </div>
                    <h5>ShopEase</h5>
                    <h6>Tester</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Django</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Unavailable</button>
                        <button>Github</button>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Bidwave} alt="" />
                    </div>
                    <h5>Bidwave</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Javascript</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Unavailable</button>
                        <button>Github</button>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Table} alt="" />
                    </div>
                    <h5>Table of Elements</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Django</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Unavailable</button>
                        <button>Github</button>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={SWH} alt="" />
                    </div>
                    <h5>Sleep Well Hub</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Django</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Unavailable</button>
                        <button>Github</button>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Lineshub} alt="" />
                    </div>
                    <h5>Lines Printing Services</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Javascript</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a href="https://bis.free.nf/" target="_blank">
                            <button >Visit</button>
                        </a>
                        <a href="https://github.com/jademeeoow/lineshub.git" target="_blank">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Viaje} alt="" />
                    </div>
                    <h5>Viaje</h5>
                    <h6>Fullstack Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>Javascript</p>
                        </div>
                        <div className="langcard">
                            <p>HTML</p>
                        </div>
                        <div className="langcard">
                            <p>CSS</p>
                        </div>
                        <div className="langcard">
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a href="https://viajeride.xscpry.com/" target="_blank">
                            <button >Visit</button>
                        </a>
                        <a href="https://github.com/jademeeoow/lineshub.git" target="_blank">
                            <button>Github</button>
                        </a>
                    </div>
                </div>
                <div className="procard onView">
                    <div className="img">
                        <img src={Todolist} alt="" />
                    </div>
                    <h5>Weekly Project / To-do List</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>React</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a href="https://todolistapp-falcasantos-villarez.netlify.app/" target="_blank">
                            <button >Visit</button>
                        </a>
                        <a href="https://github.com/milbertF/project-todolist" target="_blank">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Calculator} alt="" />
                    </div>
                    <h5>Weekly Project / Scientific Calculator</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>React</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a href="https://scientific-calculator-v07.netlify.app/" target="_blank">
                            <button >Visit</button>
                        </a>
                        <a href="https://github.com/milbertF/project-scientificCalculator" target="_blank">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className="procard onView">
                    <div className="img">
                        <img src={Pokemon} alt="" />
                    </div>
                    <h5>Weekly Project / Pokemon</h5>
                    <h6>FrontEnd Developer</h6>
                    <div className="lang">
                        <div className="langcard">
                            <p>React</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a>
                            <button >Unavailable</button>
                        </a>
                        <a>
                            <button>Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects