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
    </div>
  )
}

export default About
