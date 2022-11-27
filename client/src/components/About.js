import React from 'react'
import styles from './components.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import CollapsibleExample from './Navbar1'

function About() {
  return (
    <div>
      <div>
        <CollapsibleExample />
      </div>
      <div className='about'>
        Hi, we are students of Jyothi Engineering College, cheruthuruthy,we are presenting this project as a part of Hack-A-Week representing our team bored apes
      </div>
    </div>
  )
}

export default About
