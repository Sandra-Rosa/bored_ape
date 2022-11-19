import styles from './Home.css'

const Home =()=>{
  return(
    <div className="Home">
      <header>
        <a href="#" className="logo">Do It Now</a>
        <ul>
          <li><a href="#" className="active" >Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Sign up</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
        </header>
        <div className="div2">
          <h2 id="text"><span>Let's see</span><br /> what you've got</h2>
          <a href="#" id="btn">Sign up</a>
        </div>      
    </div>
    );
}

export default Home;