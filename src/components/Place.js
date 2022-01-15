import React from 'react'
import './PlaceStyles.css'

import {Link} from 'react-router-dom'

import Tokyo from '../assets/Tokyo.jpg'
import Yokohama from '../assets/Yokohama.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Yokohama} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Tokyo} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
