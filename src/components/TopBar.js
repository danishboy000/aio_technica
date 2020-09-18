import React from 'react'

export default function TopBar() {
    return (
              
    <div id="top-bar" class="hidden-sm-down">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-12">
            <div class="top-bar-welcome">
              <ul>
                <li>Welcome to AIO Technica</li>
              </ul>
            </div>
            <div class="top-bar-info">
              <ul>
                <li><i className ="fa fa-phone"></i>(+123) 456 7890</li>
                <li><i className ="fa fa-envelope"></i>example@gmail.com</li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <ul class="social-icons hidden-md-down">
              <li><a href=""><i class="fa fa-facebook"></i></a></li>
              <li><a href=""><i class="fa fa-twitter"></i></a></li>
              <li><a href=""><i class="fa fa-instagram"></i></a></li>
              <li><a href=""><i class="fa fa-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    

    )
}
