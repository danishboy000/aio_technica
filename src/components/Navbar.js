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
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Services</a>
                    <ul class="nav-dropdown">
                        <li><a href="/sim-cards">Sim Cards</a></li>
                        <li><a href="/data-plans">Data Plans</a></li>
                        <li><a href="/control-center">Control Centers</a></li>
                        <li><a href="/wireless-ip-networking">Wireless IP Networking</a></li>
                        <li><a href="/nb-iot">NB Iot Sim Cards and Plans</a></li>
                        <li><a href="/global">Global Sim</a></li>
                        <li><a href="/developers">Developers Kit</a></li>
                        <li><a href="/managed-failover">Managed Failover</a></li>
                        
                    </ul>
                    </li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="/get-connected">Get Connected</a></li>
                    <li><a href="/faq">FAQ</a></li>
                   
                    <li><a href="/partner-program">Partner Program</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    
                </ul>
                </div>
            </nav>
        </header>

    )
}
