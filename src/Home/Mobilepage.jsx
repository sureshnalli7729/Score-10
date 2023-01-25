import React from 'react'
import bgiphoneimg from '../image/Rectangle 11.png'
import propertiesimage from '../image/BACKGROUND.png'
import dynamicimg from '../image/WhatsApp Image 2023-01-24 at 18.47.13.jpg'

const Mobilepage = () => {
  return (
    <div>
      <div>
        <img src={bgiphoneimg} className='iphoneImageedit' />
        <img src={propertiesimage} className='iphoneDisplayImages' />
        <img src={dynamicimg} className='dynamicimage'/>
      </div>
      <div className='container'>
        <p className='iphoneDescription'>
          Our proprietary Score helps to identify tenants who are more likely to pay rent on time, 
          treat the property with care, and stay for longer periods of time. 
          Because it is based on analysis of key rental data, 
          it is more reliable than a standard credit score for evaluating your applicants
        </p>
      </div>
    </div>
  )

}

export default Mobilepage;