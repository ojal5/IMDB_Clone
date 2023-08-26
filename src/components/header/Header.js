import React from "react";
import  "./Header.css"
import {Link} from "react-router-dom";


const Header = () =>{
    return(
        <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>  
        </div>
    </div>
    )//link is used bcoz if we click on popular it will open popular on same page
    //div class is used to in css for ex header is used to define css of a particular box
    //span is used so that all of tha data comes in a single line
    //when link compiles it becomes anchor tag thats why in css a>span is used
}

export default Header 