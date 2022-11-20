import styles from './Home.css'
import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Home = () => {
  return (
    <div className="Home">
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
      <div className="div2">
        <h2 id="text"><span>Let's see</span><br /> what you've got</h2>
        <img src="/assets/Home/crow1.png" id='crow1' alt="crow" />
        <img src="/assets/Home/crow2.png" id='crow2' alt="crow" />
        <img src="/assets/Home/school.png" id='school' alt="school" />
        <CustomLink to='/signup' id="btn">Sign up</CustomLink>
        <img src="/assets/Home/grass.png" id='grass' alt="grass" />
      </div>
      <div className="sec">
        <h2>Do It Now</h2>
        <p>
          In order to realise the goal of demographic divide, every citizen of the country needs to be educated for job, be it a scientist, a doctor, engineer or whatever to meet not only the needs of our society but also the other societies elsewhere in the world.
          Every student aspires to become a great person and self reliant, but their passion and likings are diverse.
          In order to cater to the aspirations of the students and facilitate them to aim it high, they are required to be informed about the number and type of jobs this country has in the future years, as also the number of business persons, entrepreneurs, workforce in all areas of employment.
          A national database of actual requirement of workforce, category-wise by both Government and Industry, the type of educational or skill qualification required, nature of job, eligibility criteria, salary and perks, career development /progression in every field / sector of employment is urgently required.
          As each individual nurtures different desires to become in their life, there is a need for career dendrogram, so that one can put forth a concerted efforts to become the best in his vocation and excel in life rather than make umpteen number of mistakes of wrong selection of course of education or career and repent later and go on trying different things losing his precious time/life.
          <br />
          Summary: A national database of actual requirement of workforce, category-wise by both Government and Industry, the type of educational or skill qualification required, nature of job, eligibility criteria, salary and perks, career development /progression in every field / sector of employment is urgently required.
          As each individual nurtures different desires to become in their life, there is a need for career dendrogram, so that one can put forth a concerted efforts to become the best in his vocation and excel in life rather than make umpteen number of mistakes of wrong selection of course of education or career and repent later and go on trying different things losing his precious time/life.
        </p>
      </div>
    </div>
  );
}
let text = document.getElementById('text');
let crow1 = document.getElementById('crow1');
let crow2 = document.getElementById('crow2');
let btn = document.getElementById('btn');
let school = document.getElementById('school');
let grass = document.getElementById('grass');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY

  text.style.top = 50 + value * -0.25 + '%';
  crow1.style.top = value * -1.5 + 'px';
  crow1.style.left = value * -1 + 'px';
  crow2.style.top = value * -1.5 + 'px';
  crow2.style.left = value * 1 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  grass.style.top = value * -0.12 + 'px';
  header.style.top = value * 0.5 + 'px';
})

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
export default Home;