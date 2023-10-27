import React from 'react'
import './NavigationBar.css'

function NavigationBar() {
    return(
    <div class="topnav">
        <a className="a" href="#news">DEV Deakin</a>
        <input type='text' placeholder='Search'></input>
        <a className="b" href="#about">POST</a>
        <a className="c"  href="#account">LOGIN</a>
        <img className="img" src = "https://images.pexels.com/photos/15994039/pexels-photo-15994039/free-photo-of-people-climbing-on-mountain-peak.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" width={150} height={50} ></img>
    </div>
    )
}   

export default NavigationBar;   