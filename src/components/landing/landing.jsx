import React from 'react'
import './landing.css'
import Me from '../../img/photo.png'
import { links, skills } from '../../data'
import { modalShow, modalClose } from '../modal/modal'

function intro() {
    return (
        <div className='container'>
            <div className="links">
            <div className="logo"><h1>DK</h1></div>
            {links.map(link => (
                
                    <a href={link.link} target='_blank' rel='noreferrer'>
                    <div className='link-btn'>
                        <img src={link.icon} alt="" />
                        </div>
                    </a>
                
            ))}
            </div>

            <div className="wrapper">
                <div className="photo">
                    <div className="thumbnail">
                        <img src={Me} alt="" />
                    </div>
                </div>
                <div className="info">
                    <div className="greating">
                        <p>Hi there! i'm</p>
                        <h1>Denys Karlinsky</h1>
                        <h2>Web Developer</h2>
                        <h3>I'm love javascript!</h3>
                    </div>

                    <div className="skills">
                        {skills.map(skill => (
                            <p>{skill.title}</p>
                        ))}
                    </div>
                        <button id='contact-btn' onClick={modalShow}>Contact Me</button>
                </div>
            </div>

            <div id="modal-window" class="modal-window">
                <div className="modal-content">
                    <span className="modal-close" onClick={modalClose}>&times;</span>
                    <h3>Send an email to <span id='email'>fondunndev@gmail.com</span></h3>
                        <h3>Or You can text me at <a href={links[0].link}>{links[0].title}</a></h3>
                </div>
            </div>
        </div>
    )
}

export default intro