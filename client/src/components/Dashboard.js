import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import styles from './components.css';
const Dashboard = () => {
    const navigate = useNavigate();
    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        const data = req.json()
        console.log(data)
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                navigate('./login')

            } else {
                populateQuote()
            }
        }
    }, [])
    return (
        <div className='dashboard'>
            <Navbar2 />
            <section>
                {/* <img src="/assets/Home/crow1.png" className="crow1"></img>
        <img src="/assets/Home/crow2.png" className="crow2"></img> */}
                {/* <h2 id="text">Do It Now</h2> */}
                {/* <img src="/assets/Home/school.png" ClassName="school"></img>
        <img src="/assets/Home/grass.png" ClassName="grass"></img> */}
                <img src="/assets/Home/cover.png" className='cover'></img>
            </section>
            <h2 >
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
    )
}

export default Dashboard