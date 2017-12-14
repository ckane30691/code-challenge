import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="splash-header">
                <Link to="/">
                    <img className="hiretual-logo"
                        alt="hiretual logo"
                        src="https://s3.amazonaws.com/coding-challenge-hiretual/logo.png" />
                </Link>

                <div className="header-links-ctnr">
                    <Link className="biz" to="/">Try Hiretual for Business</Link>
                    <Link className="header-link" to="/signup">Sign Up</Link>
                    <Link className="header-link" to="/login">Log in</Link>
                    <button onClick={this.props.dummyLogin} className="header-link" to="/">Demo</button>
                </div>
            </div>
        )
    }
}

export default Header;