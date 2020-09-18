import React from 'react'
import Solutions from './Solutions'

export default function ManagedFailover() {
    return (
        <div>
            


            <div class="swiper-container">
            <div class="swiper-wrapper">

                
                <div class="swiper-slide" style={{backgroundImage:"url(img/Managed-Failover-ATM.png)"}}>
                
                <div class="container">
                    <div class="slider-content left-holder">
                    <h2 class="animated fadeInDown">
                    AIO Technica Managed Failover Service
                    </h2>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 col-12">
                        <p class="animated fadeInDown">
                        Reliable uptime has become critical, as more and more companies turn to cellular internet to power connectivity to their businesses’ products and services.
No network can provide 100% uptime, which is why AIO Technica can offer a fully-managed Failover Service to keep you online if your primary link goes down.
                        </p>
                        </div>
                    </div>
                   
                    </div>
                </div>
                </div>
            
                

            </div>
            
            
        </div>


        <div className="container mt-100 mb-100">

            <div className="row">
                <div className="col-md-12 col-sm-12 col-12 text-center">

                

                    
                    <h4 class = 'mb-25 mt-25'>Why Use AIO Technica Managed Failover?</h4>
                    
                    
                    <p class = 'mb-25 mt-25'>AIO Technica can provide full secondary network coverage if there is an outage on your primary cellular network. In the event that your devices do failover, we will work with you to manage your data usage and prevent bill shock.</p>
                    <img class = 'mb-25 mt-25' src="/img/Managed-Failover-Diagram.png" alt=""/>
                    
                    
                
                
                </div>
            </div>
        </div>


        <Solutions />


        <div className="container mt-50 mb-50">
            <div className="row">
                <div className="col-md-12 col-12 col-sm-12">
                <p class = 'mt-25 mb-25'>Please fill in the form below for more information on the Failover Service, and one of our team will be in touch to discuss further.</p>
                <form class="contact-form">
            <div class="row">
              <div class="col-md-12">
                <input type="text" name="subject" placeholder="Subject" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div class="col-md-6 col-sm-6 col-12">
                <input type="email" name="email" placeholder="E-mail" />
              </div>

              <div class="col-md-12">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <div class="col-md-12 mb-30">
                <div class="center-holder">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>

          <p class = 'mt-25 mb-25'>NB: You may only use the Failover Service to obtain a secondary network coverage when there is an outage on your primary Telstra network. You must not use the Failover Service as your primary source of network coverage.</p>
          <p class = 'mt-25 mb-25'>We will also work with you to manage your data usage, preventing bill shock should you need to use the Failover Service. We will use our reasonable endeavours to monitor your data usage through the Optus M2M Control Centre, which is powered by Jasper Wireless, with the aim of reducing the risk that you may exceed the data limits on your Data Plans. We will regularly check the Data Plans offered by Optus to see whether you have the most suitable Data Plans for your network. If we think you should change a Data Plan, we will tell you. We will also tell you if we become aware that your usage exceeds your current data limits.  If you exceed the data limits under a Data Plan for any reason, you must pay the excess usage charges that apply. </p>
          <p class = 'mt-25 mb-25'>Our Standard Terms and Conditions apply to this Services Description.</p>
               </div>
            </div>
        </div>



        </div>
    )
}
