import React from 'react'

export default function Services() {

    var services = [
        {
            image:'/img/Home-SIM-Icon-V2.png',
            heading:'M2M SIM Cards',
            p1:'Connect your device to the largest mobile network in North America with AIO Technica.',
            p2:'We stock a variety of form factors: Standard, Micro, Nano, Industrial and Machine Solderable.'
        },
        {
            image:'/img/Home-Data-Plans-Icon-v2.png',
            heading:'M2M Data Plans',
            p1:'Mobile data plans designed for M2M and IoT Devices, that are tailored to your needs.',
            p2:'Our flexible group data plans put you in control with smart automation and notifications.'
        },
        {
            image:'/img/Home-Networking-Icon-v2.png',
            heading:'M2M Wireless IP Networking',
            p1:'Need something more than public internet access?',
            p2:'Static IP, VPN & Managed IPWAN services are available through AIO Technica IPX. '
        },
        {
            image:'/img/Home-Control-V3.png',
            heading:'Industry Leading M2M Control Centre',
            p1:'Do more with your M2M SIM Cards with our control centre.',
            p2:'Connection diagnostics, real time status reports, notifications and alerts available.'
        },
        {
            image:'/img/Home-Support-V2.png',
            heading:'Expert Support',
            p1:'Frustrated dealing with companies that don’t understand your business?',
            p2:'Local customer support who understand M2M hardware and connectivity inside out. '
        },
        {
            image:'/img/Home-Advice-v2.png',
            heading:'Advice & Consultancy',
            p1:'Looking for a knowledgeable M2M partner?',
            p2:'We have been working with M2M devices for over 15 years – let us take the pain out of development and get you to market quicker.'
        }
    ];

    var allServies = services.map((service,i) => {
        return (
            <div class="col-md-4 col-sm-4 col-12" key = {i}>
                <div class="feature-box-long" style = {{height:'400px'}}>
                    <img src = {service.image} width = '150' />
                    <h3>{service.heading}</h3>
                    <p>{service.p1}</p>
                    <p>{service.p2}</p>
                </div>
            </div>
        )
    })
    return (
        
    <div class="section-block-grey">
        <div class="container">
            <div class="section-heading center-holder">
            <span>Let your business to grow with us</span>
            <h3>AIO Technica Services</h3>
            <div class="section-heading-line"></div>
            </div>
            <div class="row mt-50">
                {allServies}
            </div>

        </div>
        </div>
        
    )
}
