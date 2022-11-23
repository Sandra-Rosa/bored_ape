import styles from './components.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react'
import CollapsibleExample from './Navbar1'

function Contact() {
  return (
    <div>
      <div>
      <CollapsibleExample />
      </div>
    </div>
  )
}

export default Contact