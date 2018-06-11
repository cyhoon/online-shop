import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginMain from '../components/organisms/LoginMain';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginMain />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(LoginContainer);