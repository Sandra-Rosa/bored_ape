import React from 'react'
import styles from './components.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import CollapsibleExample from './Navbar1'

function Home() {
  return (
    <div>
      <div>
      <CollapsibleExample />
      </div>
      <section>
        {/* <img src="/assets/Home/crow1.png" id="crow1"></img>
        <img src="/assets/Home/crow2.png" id="crow2"></img> */}
        {/* <h2 id="text">Do It Now</h2> */}
        {/* <img src="/assets/Home/school.png" id="school"></img>
        <img src="/assets/Home/grass.png" id="grass"></img> */}
        <img src="/assets/Home/cover.png" className='cover'></img>
      </section>
      <div className="sec">
        <h2 id="text1">
          Do It Now
        </h2>
        <p>In order to realise the goal of demographic divide, every citizen of the country needs to be educated for job, be it a scientist, a doctor, engineer or whatever to meet not only the needs of our society but also the other societies elsewhere in the world.
          Every student aspires to become a great person and self reliant, but their passion and likings are diverse.
          In order to cater to the aspirations of the students and facilitate them to aim it high, they are required to be informed about the number and type of jobs this country has in the future years, as also the number of business persons, entrepreneurs, workforce in all areas of employment.
          A national database of actual requirement of workforce, category-wise by both Government and Industry, the type of educational or skill qualification required, nature of job, eligibility criteria, salary and perks, career development /progression in every field / sector of employment is urgently required.
          As each individual nurtures different desires to become in their life, there is a need for career dendrogram, so that one can put forth a concerted efforts to become the best in his vocation and excel in life rather than make umpteen number of mistakes of wrong selection of course of education or career and repent later and go on trying different things losing his precious time/life.
          <br />
          Summary: A national database of actual requirement of workforce, category-wise by both Government and Industry, the type of educational or skill qualification required, nature of job, eligibility criteria, salary and perks, career development /progression in every field / sector of employment is urgently required.
          As each individual nurtures different desires to become in their life, there is a need for career dendrogram, so that one can put forth a concerted efforts to become the best in his vocation and excel in life rather than make umpteen number of mistakes of wrong selection of course of education or career and repent later and go on trying different things losing his precious time/life.</p>
      </div>
    </div>
    
  )
}

export default Home