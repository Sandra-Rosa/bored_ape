import React from 'react'
import Navbar2 from './Navbar2.js'
import { Link } from "react-router-dom";

export const Careerinfo = () => {
  return (
    <div>
      <Navbar2 />
      <ul>
        <li>
          <Link to="/engineering">Engineering and allied courses</Link>
        </li>
        <li>
          <Link to="/generalsciences">General sciences</Link>
        </li>
        <li>
          <Link to="/medicine">Medicine</Link>
        </li>
        <li>
          <Link to="/commerce">Commerce</Link>
        </li>
        <li>
          <Link to="/management">Management</Link>
        </li>
      </ul>
    </div>
  )
}
export default Careerinfo