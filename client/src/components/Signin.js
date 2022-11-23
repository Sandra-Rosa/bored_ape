import React,{useState} from 'react'
import styles from './components.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import CollapsibleExample from './Navbar1'

function Signin() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  async function loginuser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    const data = await response.json();
    

    if(data.user){
      alert('Login successful')
      window.location.href= './dashboard'
    }
    else{
      alert('Please check your username and password')
    }
}
  return (
    <div>
      <CollapsibleExample />
    <div className='signin'>
        <form action="/action_page.php" onSubmit={loginuser}>
                <label for="lname">Email:</label><br />
                <input type="text" id="lname" name="name" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label for="lname">Password:</label><br />
                <input type="text" id="lname" name="lname" onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                <input type="submit" value="Sign in" />
            </form>
    </div>
    </div>
  )
}

export default Signin