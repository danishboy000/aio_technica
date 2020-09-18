import React from 'react'

export default function Footer() {
    return (
    <footer>
        <div class="container">
            <div class="row">
            
            <div class="col-md-4 col-sm-6 col-12">
                <h3>About Us</h3>
                <div class="mt-25">
                {/* <img src="img/logos/logo-footer.png" alt="footer-logo" /> */}
                <span>AIO Technica</span>
                <p class="mt-25">North America's Leading Provider of SIM Cards and Data Plans for M2M and IoT Devices</p>
                
                </div>
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
                <h3>Quick Links</h3>
                <ul class="footer-list">
                <li><a href="/">Home</a></li>
                <li><a href="/get-connected">Get Connected</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/partner-program">Partner Program</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/terms-of-use">Terms of use</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/form-of-agreement">Form of Agreement</a></li>
                
                </ul>
            </div>
            

            
            
            </div>

        
            <div class="footer-bar">
            <p><span class="primary-color">AIO Technica</span> © 2020. All Rights Reserved.</p>
            </div>
            
        </div>
    </footer>
    )
}
