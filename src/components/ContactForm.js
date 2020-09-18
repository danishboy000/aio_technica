import React from 'react'

export default function ContactForm() {
    return (
        <div>



            <div class="section-heading mt-15">
          <h4>Let's Talk about Your Business</h4>
          <div class="section-heading-line-left"></div>
        </div>
        <div class="contact-form-box mt-30">
         
          <form class="contact-form">
            <div class="row">
              <div class="col-md-12">
                <input type="text" name="title" placeholder="Title" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="first-name" placeholder="First Name" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
              

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="company-name" placeholder="Company Name" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="email" name="email" placeholder="E-mail" />
              </div>

              

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="phone-number" placeholder="Phone Number" />
              </div>
              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="city" placeholder="City" />
              </div>

              <div class="col-md-12">
                <input type="text" name="address" placeholder="Address" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="state" placeholder="State" />
              </div>
              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="country" placeholder="Country" />
              </div>

              <div class="col-md-12">
                <textarea name="description" placeholder="Description"></textarea>
              </div>
              <div class="col-md-12 mb-30">
                <div class="center-holder">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
          
        </div>




        </div>
    )
}
