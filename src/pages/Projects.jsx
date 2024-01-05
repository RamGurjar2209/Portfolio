import React from 'react'
import Project1 from '../assets/project-1.jpg'
import Project2 from '../assets/project-2.jpg'
import Project3 from '../assets/project-3.jpg'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={Project1} alt="Project 1" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Expense Manager</h2>
                        <div className="btn-container">
                            {/* <button className="btn btn-color-2 project-btn" >
                                Github
                            </button> */}
                            <button className="btn btn-color-2 project-btn" >
                                <Link to={'https://vercel.com/ram-gurjars-projects/expense-manager'} style={{ textDecoration: 'none' }}>Live Demo</Link>
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={Project2} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Authentication</h2>
                        <div className="btn-container">
                            {/* <button className="btn btn-color-2 project-btn" >
                                Github
                            </button> */}
                            <button className="btn btn-color-2 project-btn" >
                                <Link to={'https://vercel.com/ram-gurjars-projects/auth-app'} style={{ textDecoration: 'none' }}>Live Demo</Link>
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={Project3} alt="Project 3" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">E-Commerce</h2>
                        <div className="btn-container">
                            {/* <button className="btn btn-color-2 project-btn">
                                Github
                            </button> */}
                            <button className="btn btn-color-2 project-btn">
                                <Link to={'https://vercel.com/ram-gurjars-projects/e-commerce'} style={{ textDecoration: 'none' }}>Live Demo</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects