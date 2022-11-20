import styles from './Signin.css'
import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Signin = () => {
    const [usernameReg, setusernameReg] = useState('')
const [passwordReg, setpasswordReg] = useState('')

    return (
        <div className='signin'>
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
            <div className='main'>
                <img src="/assets/Home/crow1.png" id='crow1' alt="crow" />
                <img src="/assets/Home/crow2.png" id='crow2' alt="crow" />
                <img src='/assets/signin/girl.png' id='girl' alt='girl' />
                <img src='/assets/signin/boy.png' id='boy' alt='boy' />
            </div>
            <div className='div2'>
                <h2>Sign In</h2>
                <br />
                <label>User Name</label>
                <br />
                <input type="text" onChange={(e)=>{setusernameReg(e.target.value)} }/>
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type="text" onChange={(e)=>{setpasswordReg(e.target.value)} }/>
                <br />
                <br />
                <button>Sign In</button>
            </div>
        </div>
    )
}
let crow1 = document.getElementById('crow1');
let crow2 = document.getElementById('crow2');
let girl = document.getElementById('girl');
let boy = document.getElementById('boy');
window.addEventListener('scroll', function () {
    let value = window.scrollY
    crow1.style.top = value * -1.5 + 'px';
    crow1.style.left = value * -1 + 'px';
    crow2.style.top = value * -1.5 + 'px';
    crow2.style.left = value * 1 + 'px';
    girl.style.left = value * -0.5 + 'px';
    boy.style.left = value * 0.5 + 'px';
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
export default Signin