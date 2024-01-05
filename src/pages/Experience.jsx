import React from 'react'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/JavaScript.png'
import reactLogo from '../assets/react.png'
import BootstrapLogo from '../assets/Bootstrap.png'

const Experience = () => {
    return (
        <section id="experience">
            <p class="section__text__p1">Explore My</p>
            <h1 class="title">Experience</h1>
            <div class="experience-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            <article>
                                <img src={htmlLogo} alt="Experience icon" class="icon" />
                                <div>
                                    <h3>HTML</h3>
                                </div>
                            </article>
                            <article>
                                <img src={cssLogo} alt="Experience icon" class="icon" />
                                <div>
                                    <h3>CSS</h3>
                                </div>
                            </article>

                            <article>
                                <img src={jsLogo} alt="Experience icon" class="icon" />
                                <div>
                                    <h3>JavaScript</h3>

                                </div>
                            </article>

                            <article>
                                <img src={reactLogo} alt="Experience icon" class="icon" />
                                <div>
                                    <h3>React.js</h3>

                                </div>
                            </article>

                            <article>
                                <img src={BootstrapLogo} alt="Experience icon" class="icon" />
                                <div>
                                    <h3>Bootstrap</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#projects'" />
        </section>
    )
}

export default Experience