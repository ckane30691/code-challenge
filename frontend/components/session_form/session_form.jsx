import React from 'react';
import { Link, hashHistory } from 'react-router';
import HeaderContainer from '../greeting/header_container';

// NOTE still need to implement render errors

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        this.redirectIfLoggedIn();
    }

    componentDidMount() {
        this.props.receiveCurrentUser(null)
    }


    componentWillReceiveProps(newProps) {
        if (newProps.formType !== this.props.formType) {
            this.props.receiveCurrentUser(null)
        }
    }

    redirectIfLoggedIn() {
        if (this.props.loggedIn) {
            hashHistory.push("/dashboard");
        }
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }); };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.processForm({ user });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let text = this.props.formType === 'login' ? 'Log In' : 'Sign Up'

        let passage = this.props.formType === 'login' ?
            <p className="passage">
                Welcome Back
            </p>
            : <p className="passage">
                Create a Free Account
            </p>

        return (
            <div>
                <HeaderContainer />

                {passage}
                <div className="session-body">
                    <div className="pitch-ctnr">
                        <ul className="reasons">
                        <h1>A few reasons you’ll love Hiretual:</h1>
                            <li><span className="check">✓</span><b>AI sourcing</b> 24x7</li>
                            <li><span className="check">✓</span>Find <b>anyone's</b> contact</li>
                            <li><span className="check">✓</span>Search <b>2.6B</b> professionals</li>
                            <li><span className="check">✓</span>Actionable insights <b>beyond</b> resume</li>
                            <li><span className="check">✓</span><b>Swift</b> talent pool management</li>
                            <li><span className="check">✓</span><b>Refresh</b> and <b>augment</b> your database</li>
                            <li><span className="check">✓</span>Chrome extension for <b>free</b></li>
                            <li><span className="check">✓</span><b>Smooth</b> integration with ATS/CRM</li>
                        </ul>
                    </div>
                    <div className={`session-container`}>
                        <form onSubmit={this.handleSubmit}
                            className={`session-form-box`}>
                            <div className="errors">{this.renderErrors()}</div>
                            <div className="session-form">
                                <br />
                                <input required type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="session-input"
                                    placeholder="Enter Username" />
                                <br />
                                <input required type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="password-input"
                                    placeholder="Enter Password"
                                />
                                <br />
                                <input className='signup-submit' type="submit" value={text} />
                                <p className='disclosure'>
                                    By signing up, you agree to the Terms and Conditions and 
                                    Privacy Policy. You also agree to receive product-related 
                                    emails from Hiretual from which you can unsubscribe at any time.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default SessionForm;