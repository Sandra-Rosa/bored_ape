import React, { useState } from 'react'
import styles from './components.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import CollapsibleExample from './Navbar1'

function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function registeruser(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:1337/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json();
        if (data.status === "ok") {
            navigate('/signin')
        } else {
            alert('Sign Up unsuccessful')
            window.location.href = './signin'
        }
        console.log(data);
    }
    return (
        <div>
            <CollapsibleExample />
        <div className="signup">
            <form action="/action_page.php" onSubmit={registeruser}>
                <label for="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} /><br /><br />
                <label for="lname">Email:</label><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label for="lname">Password:</label><br />
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
        </div>
    )
}

export default Signup