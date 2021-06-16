import './sidebar.css';
import aboutImg from '../../images/about1.jpg'; 

import React from 'react'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src={aboutImg} className="biopic" alt="bio" />
                <p>Where as most people would watch movies for their favorite action scenes, or favorite quote, I in my love for music
                    would rewind the infamous "Open Your Mind" sequence from "Total Recall" over and over again just to hear the music. 
                    <br />
                    <br />
                    This love of the orchestra which began with Film Music, soon grew to Ballets, Symphonies, Jazz, Smooth Jazz, Hip Hop and 
                    any form of music that sounded pleasing to my ears. Eventually this passion went from listening to composing starting
                    in 2006. 
                    <br />
                    <br />
                    As a student of the orchestra and many other types of sounds, I study all kinds of music and enjoy sitting at 
                    my computer to create. I hope you can hear the passion in the music. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Genres</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Orchestral</li>
                    <li className="sidebarListItem">Bebop Jazz</li>
                    <li className="sidebarListItem">Smooth Jazz</li>
                    <li className="sidebarListItem">Film Scoring Contests</li>
                    <li className="sidebarListItem">Rhythm and Blues</li>
                    <li className="sidebarListItem">30 Second Scoring Challenges</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Being Socialble</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook"></i>
                <i className="sidebarIcon fab fa-twitter"></i>
                <i className="sidebarIcon fab fa-instagram"></i>
                <i className="sidebarIcon fab fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}
