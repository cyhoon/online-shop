import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginMain from '../components/organisms/LoginMain';
import { bindActionCreators } from 'redux';

import { loginRequest } from '../actions/Auth';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            userPw: '',
        };
    }

    login = () => {
        this.props.loginRequest(this.state.userId, this.state.userPw)
        .then(() => {
            if (this.props.isLoggedIn) { // true라면
                alert('로그인 성공!');
                this.props.history.push('/'); // 리다이렉트~!
            } else {
                alert('로그인 실패!');
            }
        })
    }

    onChangeUserId = (e) => {
        this.setState({
            userId: e.target.value,
        });
    }

    onChangeUserPw = (e) => {
        this.setState({
            userPw: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <LoginMain
                    userId={this.state.userId}
                    userPw={this.state.userPw}
                    onChangeUserId={this.onChangeUserId}
                    onChangeUserPw={this.onChangeUserPw}
                    login={this.login}
                />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {
    return { ...auth.status };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loginRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);