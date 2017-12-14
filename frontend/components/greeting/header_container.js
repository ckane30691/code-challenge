import { connect } from 'react-redux';
import Header from './header';
import { dummyLogin } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        dummyLogin: () => dispatch(dummyLogin()),
    };
};

export default withRouter(connect(
    undefined,
    mapDispatchToProps
)(Header));