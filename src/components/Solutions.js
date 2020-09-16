import React from 'react'

export default function Solutions() {

    var solutions = [
        {
            heading:'Business Continuity & Failover',
            image:'/img/Business-Continuity.png'
        },
        {
            heading:'Smart Utilities & Environmental Monitoring',
            image:'/img/Data-logging.png'
        },
        {
            heading:'Digital Media & Signage',
            image:'/img/Digital-Sign-v5.png'
        },
        {
            heading:'Medical & Patient Monitoring',
            image:'/img/Medical.png'
        },
        {
            heading:'Payments & POS',
            image:'/img/Payments.png'
        },
        {
            heading:'Remote Management & SCADA',
            image:'/img/Remote-Management.png'
        },
        {
            heading:'Security',
            image:'/img/Security.png'
        },
        {
            heading:'Transport, Telematics & Logistics',
            image:'/img/Transport-Telematics.png'
        },
    ];

    var allSolutions = solutions.map((solution,i) => {
        return (
            <div class="col-md-3 col-sm-6 col-12">
                <div class="feature-box" style = {{height:'325px'}}>
                    <img src = {solution.image} />
                    <h4>{solution.heading}</h4>
                
                </div>
            </div>
        )
    });

    return (
        <div class="section-block-grey">
            <div class="container">
                <div class="section-heading center-holder">
                <span>Explore Our Solutions</span>
                <h3>M2M & IoT Industry Solutions</h3>
                <div class="section-heading-line"></div>
                </div>
                <div class="row mt-50">
                
                    {allSolutions}
                
                </div>
            </div>
        </div>
    )
}
