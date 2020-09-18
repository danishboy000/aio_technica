import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';

export default function ContactForm() {

  
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('contact_service', 'contact_template', e.target, "user_trmRTbD4XsP6tsJhM0rRt")
      .then((result) => {
          console.log(result);
          if(result.text == 'OK')
          {
            document.getElementById('msg').innerHTML = 'Email sent successfully. Thanks for contacting us.';
          }
          else
          {
            document.getElementById('msg').innerHTML = 'Cound not send email.';
          }
      }, (error) => {
          console.log(error.text);
      });
  }


    return (
        <div>



            <div class="section-heading mt-15">
          <h4>Let's Talk about Your Business</h4>
          <div class="section-heading-line-left"></div>
        </div>
        <div class="contact-form-box mt-30">
         
          <form class="contact-form" onSubmit = {sendEmail}>
            <div class="row">
              <div class="col-md-12">
                <input type="text" name="title" placeholder="Title" required/>
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="first-name" placeholder="First Name" required/>
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
              

              <div class="col-md-6 col-sm-6 col-12">
                <input type="text" name="company-name" placeholder="Company Name" />
              </div>

              <div class="col-md-6 col-sm-6 col-12">
                <input type="email" name="email" placeholder="E-mail" required/>
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
                  <input type="submit" value = 'Send Message' style = {{backgroundColor:'black',cursor:'pointer'}}/>
                </div>
              </div>
              <div class="col-md-12">
              <p id = 'msg'></p>
              </div>
              
            </div>
          </form>
          
        </div>




        </div>
    )
}

