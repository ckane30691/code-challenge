import React, { Component } from 'react';

const SlideTwo = (props) => {
    
    let background = {
        backgroundImage: 'url(https://s3.amazonaws.com/coding-challenge-hiretual/landing-page-prod-v1-contact.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '55vw',
        height: '466.66px'
    }
    
    return <div style={background} className="slide"></div>
}

export default SlideTwo;