import React from 'react'
import img2 from '../image/1382 1.png'
import Multipages from './Multipages'
import Mobilepage from './Mobilepage'

function Home() {
  return (
    <div>
      <div class="card bg-light text-white">
        <img src={img2} className="bg-container" alt="" />
        <div class="card-img-overlay">
          <h5 className='heading-card-title col-3'>Verify your TENANTS ID
            and Address
            FREE now</h5>
          <p class="card-text col-4">Score 10 offers tenant screening solutions to
            landlords and Property managers so that thay can identify top quality applicants.
          </p>
          <div className='button-container'>
            <button className="btn btn-primary">Join the Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home