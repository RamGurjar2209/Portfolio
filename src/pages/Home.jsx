import React from 'react'
import ProfileRam from '../assets/profile_ram.png'
import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'
import { Link } from 'react-router-dom'
import resume from '../assets/resume.pdf'

const Home = () => {

    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={ProfileRam} className='ram-profile' alt="Ram Gurjar profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Ram Gurjar</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                    <a href={resume} download="resume"  className="download-cv" style={{ textDecoration: "none" }}>Download
                        CV</a>
                    <button className="btn btn-color-1">
                       <Link to={'./contact'} style={{textDecoration : 'none' , color : 'white'}}>Contact Info</Link>
                    </button>
                </div>
                <div id="socials-container">
                    <Link to='https://www.linkedin.com/in/ram-mangulle-71150426b'>
                        <img src={LinkedIn} alt="My LinkedIn profile" className="icon"
                        />
                    </Link>
                     <Link to={'https://github.com/RamGurjar2209'}><img src={GitHub} alt="My Github profile" className="icon"
                    /></Link>
                </div>
            </div>
        </section>
    )
}

export default Home