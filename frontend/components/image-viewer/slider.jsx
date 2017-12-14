import React from 'react';
import SlideOne from './slide_one';
import SlideTwo from './slide_two';
import SlideThree from './slide_three';
import RightArrow from './right_arrow';
import LeftArrow from './left_arrow';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        window.setInterval(() => {
            this.nextSlide()
        }, 2500)
    }

    nextSlide() {
        return this.state.slideCount < 2 ? 
        this.setState({ slideCount: this.state.slideCount + 1 })
        : this.setState({ slideCount: 1})
    }

    previousSlide() {
        this.setState({ slideCount: this.state.slideCount - 1 })
    }

    render() {
        console.log(this.state.slideCount)
        return (
            <div className="slider">

                {/* Slides go here */}
                {this.state.slideCount === 1 ? <SlideOne /> : null}
                {this.state.slideCount === 2 ? <SlideTwo /> : null}
                {this.state.slideCount === 3 ? <SlideThree /> : null}

                <RightArrow nextSlide={this.nextSlide} />
                <LeftArrow previousSlide={this.previousSlide} />

            </div>
        );
    }
}