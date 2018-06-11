import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                LoginContainer
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(LoginContainer);