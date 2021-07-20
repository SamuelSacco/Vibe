import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import React from "react";

const mSTP = ({ errors }) => ({
    information : {
        username: '',
        email: '',
        password: '',
        password2: '',
    },
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login" className="signin-text">Log in instead</Link>,
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)