import React from 'react'
import './../styles/projects.css'

import Lineshub from './../images/projects/linesHub.png'
import Periodic from './../images/projects/PeriodicToE.png'
import SWH from './../images/projects/SWH.png'


function projects() {
  return (
    <div className="projectsWrap" id='projects'>
        <div className="topF"></div>
        <div className="project" id='project1'>
            <div className="proCount">
                <p><a href="#project1">Project 1</a></p>
            </div>
            <div className="projectCon">
                <img src={Lineshub} alt="" />
            </div>
            <h3>Lines Hub: Lines Printing Services</h3>
        </div>

        <div className="project" id='project2'>
            <div className="proCount proCount2">
                <p><a href="#project2">Project 2</a></p>
            </div>
            <div className="projectCon">
                <img src={Periodic} alt="" />
            </div>
            <h3>Periodic Table of Elements</h3>
        </div>

        <div className="project" id='project3'>
            <div className="proCount proCount3">
                <p><a href="#project3">Project 3</a></p>
            </div>
            <div className="projectCon">
                <img src={SWH} alt="" />
            </div>
            <h3>Sleep Well Hub</h3>
        </div>
    </div>
  )
}

export default projects