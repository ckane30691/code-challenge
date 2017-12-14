import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup, receiveCurrentUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    let logged = Boolean(state.session.currentUser);
    return {
    loggedIn: logged,
    errors: state.errors.session
}}

const mapDispatchToProps = (dispatch, ownProps) => {
    const formType = ownProps.location.pathname.slice(1) === 'login' ? 'login' : 'signup';
    const processForm = (formType === 'login') ? login : signup;

    return {
        processForm: user => dispatch(processForm(user)),
        formType,
        receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id))
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm));