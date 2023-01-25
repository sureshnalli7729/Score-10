import React from 'react'
import { Link } from 'react-router-dom'
import img from '../image/Score-10-logo 1.png'

const Footer = () => {
  return (
    <div>
        <div className='container p-5'>
            <img src={img} className='footer-image' />
        </div>
        <div className='listItems'>
          <ul>
            <li>
              <Link className='' to='#'>Categories</Link>
            </li>
            <li>
              <Link className='' to='#'>About</Link>
            </li>
            <li>
              <Link className='' to='#'>How it Works</Link>
            </li>
            <li>
              <Link className='' to='#'>Blog</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Footer