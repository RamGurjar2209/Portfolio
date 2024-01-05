import React from 'react'
import Profile2 from '../assets/profile_ram2.png'
import ExperienceIcon from '../assets/experience.png'
import EducationIcon from '../assets/education.png'

const About = () => {
    return (
        <>
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={Profile2} width="450px" alt="Profile picture" className="about-pic" />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src={ExperienceIcon} alt="Experience icon" className="icon" />
                                <h3>Experience</h3>
                                <p><br />Frontend Development</p>
                            </div>
                            <div className="details-container">
                                <img src={EducationIcon} alt="Education icon" className="icon" />
                                <h3>Education</h3>
                                <br />
                                <p>Bachelor of Arts</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>

                                Passionate frontend developer with a flair for creating visually stunning and user-friendly
                                websites. Armed with a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting
                                seamless and responsive interfaces. Committed to staying ahead in the ever-evolving tech
                                landscape, I bring creativity and attention to detail to every project. With a solid foundation
                                in front-end framework like React.js, I strive to build intuitive interfaces that captivate
                                users. Eager to collaborate on innovative projects and contribute my skills to creating visually
                                stunning and user-friendly websites.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default About