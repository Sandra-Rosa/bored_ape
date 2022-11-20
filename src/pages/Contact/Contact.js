import React from 'react'
import styles from './Contact.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Contact= ()=> {
  return (
    <div className='contact'>
        <header>
        <a href="#" className="logo">Do It Now</a>
        <ul>
          <li><CustomLink to='/home' className="active" >Home</CustomLink></li>
          <li><CustomLink to='/about'>About us</CustomLink></li>
          <li><CustomLink to='/contact'>Contact us</CustomLink></li>
          <li><CustomLink to='/signup'>Sign up</CustomLink></li>
          <li><CustomLink to='/signin'>Sign in</CustomLink></li>
        </ul>
        </header>
        <div className="mainc">
            <h1 id="main_heading">
                Contact us
            </h1>
          <div className="para1c">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum ac enim semper lacinia a ac justo. Sed convallis mauris non lacus fringilla consequat. Mauris tempor est tortor, ac laoreet nisi placerat fermentum. Suspendisse consectetur vitae neque quis pulvinar. Maecenas at elit sem. Sed gravida, magna ut fermentum dapibus, justo eros commodo risus, in gravida erat ante at ante. Fusce efficitur massa vitae urna dictum, vitae placerat ex suscipit. Cras eget ligula lobortis, accumsan massa nec, porttitor urna.</p>
          </div>
        </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Contact;