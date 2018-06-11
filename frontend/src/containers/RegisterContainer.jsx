import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterMain from '../components/organisms/RegisterMain';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RegisterMain />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(RegisterContainer);