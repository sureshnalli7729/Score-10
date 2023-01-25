import React from 'react'
import img from '../image/Score-10-logo 1.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <Link class="navbar-brand" to="#">
              <img src={img} className='navbar-image'/>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav m-auto">
              <Link class="nav-link active" to="#">Categories</Link>
              <Link class="nav-link active" to="#">About</Link>
              <Link class="nav-link active" to="#">How it Works</Link>
              <Link class="nav-link active" to="#">Blog</Link>
            </div>
          </div>
          <button className='btn btn-success getstartedbutton'>Get Started</button>
          </nav>
      </div>
    </div>
  )
}

export default Navbar