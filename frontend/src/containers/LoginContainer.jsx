import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginMain from '../components/organisms/LoginMain';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this._login = (e) => {
            // login logic
        };
    
        this._onChangeUserId = (e) => {
            this.setState({
                user_id: e.target.value,
            });
        };
    
        this._onChangeUserPw = (e) => {
            this.setState({
                user_pw: e.target.value,
            });
        };

        this.state = {
            'user_id': null,
            'user_pw': null,
        };
    }

    render() {
        return (
            <div>
                <LoginMain
                    
                />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(LoginContainer);