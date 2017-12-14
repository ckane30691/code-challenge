import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../image-viewer/slider';
import Header from './header'

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-body">
                <Header />

                <div className='learn-more-ctnr'>
                    <div className="call-to-action">
                        <h1 className='cta-title'>10x Faster Talent <br/>Sourcing</h1>

                        <p className='cta-tagline'>Sourcer/Recruiter's best friend.</p>
                        
                        <Link className='cta-btn cta-signup' to="/">Get Started for Free</Link>
                        <Link className='cta-btn cta-xtn' to="/">Add to Chrome <span>it's free</span></Link>

                        <div className="testimonials">
                            <h1>" So many personal emails and phone numbers. "</h1>
                            <p>- Katie Gechijian</p>
                        </div>
                    </div>
                    <Slider />
                </div>
            </div>
        );
    }
}

export default Splash;