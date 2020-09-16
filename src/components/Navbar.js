import React from 'react'

export default function Navbar() {
    return (
        
        <header>
            <nav id="navigation4" class="container navigation">
                <div class="nav-header">
                <a class="nav-brand" href="index.html">
                    <img src="img/logos/logo.png" class="main-logo" alt="logo" id="main_logo" />
                </a>
                <div class="nav-toggle"></div>
                </div>
                <div class="nav-menus-wrapper">
                <ul class="nav-menu align-to-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News and Events</a></li>
                    <li><a href="#">M2M Services</a>
                    <ul class="nav-dropdown">
                        <li><a href="about.html">M2M Sim Cards</a></li>
                        <li><a href="about-2.html">M2M Data Plans</a></li>
                        <li><a href="team.html">M2M One Control Centers</a></li>
                        <li><a href="team-2.html">M2M Wireless IP Networking</a></li>
                        
                    </ul>
                    </li>
                    <li><a href="#">Pricing</a>
                    <ul class="nav-dropdown">
                        <li><a href="services.html">Brochure</a></li>
                        <li><a href="services-2.html">Australian Price List</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Get Connected</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Partner Program</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                </ul>
                </div>
            </nav>
        </header>

    )
}
