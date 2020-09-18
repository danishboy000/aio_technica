import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div>


<div class="section-block">
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-7 col-12">
        <ContactForm />
      </div>

      <div class="col-md-5 col-sm-5 col-12">
        <div class="contact-info-box">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-12">
              <div class="contact-info-section">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-4 center-holder">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="col-md-10 col-sm-10 col-8">
                    <h4>Call Us</h4>
                    <p>(+123) 123-456-789</p>
                    <p>(+123) 987-654-321</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 col-12">
              <div class="contact-info-section">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-4 center-holder">
                    <i class="fa fa-envelope-open"></i>
                  </div>
                  <div class="col-md-10 col-sm-10 col-8">
                    <h4>Message</h4>
                    <p>specthemes@gmail.com</p>
                    <p>example@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 col-12">
              <div class="contact-info-section">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-4 center-holder">
                    <i class="fa fa-globe"></i>
                  </div>
                  <div class="col-md-10 col-sm-10 col-8">
                    <h4>Our Location</h4>
                    <p>New York, NY Sheram 113</p>
                    <p>London, Sheram 113/11 9007</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12 col-12">
              <div class="contact-info-section">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-4 center-holder">
                    <i class="fa fa-clock-o"></i>
                  </div>
                  <div class="col-md-10 col-sm-10 col-8">
                    <h4>Working Hours</h4>
                    <p>Mon-Sat 09:00 - 19:00</p>
                    <p>Sun 10:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="map" class="mt-10">
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk25E4mNfVIEt3tNl3K1HwNZVruVoFBlA&callback=initMap">
  </script>
</div>


            
        </div>
    )
}
