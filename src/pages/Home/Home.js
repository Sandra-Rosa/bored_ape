import styles from './Home.css'
import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Home =()=>{
  return(
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
          <a href="#" id="btn">Sign up</a>
          <img src="/assets/Home/grass.png" id='grass' alt="grass" />
        </div>  
        <div className="sec">
          <h2>Do It Now</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin ipsum ac fermentum fringilla. Phasellus at nisi dui. Nullam laoreet mauris in sapien finibus commodo. Sed interdum nec mi a convallis. Duis sem erat, eleifend eu urna eget, tincidunt condimentum neque. Maecenas id odio a est sollicitudin venenatis. Vestibulum malesuada, ex nec sodales placerat, sapien mi ultrices libero, at tristique ipsum enim rhoncus orci. In blandit metus eget neque rutrum, vitae vestibulum ante consequat. Praesent eget mauris ante. Phasellus vel ante quis dui bibendum scelerisque. Nunc congue eros magna, sit amet convallis nisi euismod eget. Etiam lobortis condimentum quam. Nullam sed auctor metus. Vestibulum porta, eros sit amet vulputate eleifend, nisi dolor faucibus risus, eu ultrices enim elit tincidunt lorem. Nullam aliquet lorem ut sodales pulvinar.
<br />
Quisque condimentum tristique odio, vitae ullamcorper odio aliquet at. Fusce molestie ipsum arcu. Etiam lobortis, massa vitae pulvinar luctus, est lorem scelerisque est, sed bibendum lacus risus eget dui. Duis at arcu dignissim, pharetra elit ac, consectetur lorem. In dignissim eros a felis porta malesuada. Ut quam erat, feugiat in blandit quis, scelerisque in massa. In vestibulum ultricies blandit. Nunc pharetra ultrices sodales.
<br />
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tincidunt lorem ex, vel dignissim felis consectetur vitae. Praesent rutrum auctor purus, sed lacinia libero varius in. Aliquam fermentum lobortis lectus et ultrices. Cras non odio blandit, consectetur arcu nec, commodo ex. Nam id metus ac dolor placerat tristique. Fusce eleifend scelerisque mi, a lacinia enim hendrerit a. Sed vel finibus justo. Sed consequat facilisis magna et imperdiet. Maecenas suscipit faucibus turpis, auctor mattis justo molestie quis.
<br />
Vestibulum tristique enim id lorem pulvinar auctor. Suspendisse sollicitudin turpis ut ex elementum porta. Maecenas efficitur purus ut magna eleifend, vel varius turpis pharetra. Maecenas ullamcorper ut nisi congue ullamcorper. Nullam dignissim varius lectus in varius. Etiam vitae odio quis purus suscipit lobortis. Aliquam condimentum velit purus, vel sagittis nulla rhoncus non. Nunc pretium sem a imperdiet sodales. Duis a sagittis augue, sit amet sodales libero. Suspendisse potenti.
<br />
Proin facilisis, lorem in faucibus suscipit, dolor lectus fermentum mauris, et feugiat ex diam ac ipsum. Donec et iaculis nisi, quis sollicitudin massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque viverra ipsum eget tempor feugiat. Aliquam erat volutpat. Donec turpis est, auctor vel nunc sit amet, maximus accumsan nisl. Integer pellentesque, arcu nec viverra malesuada, dui enim venenatis nibh, ultrices vestibulum mauris odio id tortor. Sed vulputate blandit purus luctus euismod.</p>
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

window.addEventListener('scroll',function(){
  let value = window.scrollY

  text.style.top= 50+ value * -0.25 +'%';
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