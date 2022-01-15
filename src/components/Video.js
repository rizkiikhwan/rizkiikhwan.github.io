import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import japanVideo from '../assets/Japan.mp4'

function Video() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
          <source src={japanVideo} type='video/mp4'/>
        </video>
        <div className='content'>
          <h1>Japan</h1>
          <p>Beautiful Country and Culture</p>
          <div>
            <Link to='/see more' className='btn btn-light'>See More</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
