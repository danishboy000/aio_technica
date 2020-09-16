import React from 'react'

export default function Partner() {
    return (
        <div class="section-clients border-top border-bottom section-heading center-holder">
        <h2>Our Core Partners</h2>
        <div class="container">
            <div class="owl-carousel owl-theme clients" id="clients" style = {{marginTop:'50px'}}>
            <div class="item">
                <img src="/img/M2M-One-Telstra-Logo-v2.png" alt="partner-image" />
            </div>

            <div class="item">
                <img src="/img/M2M-One-Jasper-Logo-2.png" alt="partner-image" />
            </div>

            <div class="item">
                <img src="/img/M2M-One-Zoho-Logo.png" alt="partner-image" />
            </div>

            <div class="item">
                <img src="/img/M2M-One-Masamune-Logo.png" alt="partner-image" />
            </div>

           
            </div>
        </div>
        </div>
    )
}
