import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterMain from '../components/organisms/RegisterMain';
import { registerRequest } from '../actions/Auth';
import { bindActionCreators } from 'redux';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
            name: '',
            homeNumber: '',
            phoneNumber: '',
            mailNumber: '',
            address: '',
            email: ''
        };
    }

    register = () => {
        return this.props.registerRequest(
            this.state.id,
            this.state.pw,
            this.state.name,
            this.state.homeNumber,
            this.state.phoneNumber,
            this.state.mailNumber,
            this.state.address,
            this.state.email
        ).then(() => {
            if (this.props.status === 'SUCCESS') {
                alert('회원가입 성공');
                this.props.history.push('/login');
            } else {
                alert('회원가입 실패');
            }
        });
    };

    onChangeUserId = (e) => {
        this.setState({
            id: e.target.value
        });
    };

    onChangeUserPw = (e) => {
        this.setState({
            pw: e.target.value
        });
    };

    onChangeUserName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onChangeUserHomeNumber = (e) => {
        this.setState({
            homeNumber: e.target.value
        });
    };

    onChangeUserPhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    onChangeUserMailNumber = (e) => {
        this.setState({
            mailNumber: e.target.value
        });
    };

    onChangeUserAddress = (e) => {
        this.setState({
            address: e.target.value
        });
    };

    onChangeUserEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    render() {
        return (
            <div>
                <RegisterMain
                    register={this.register}
                    id={this.state.id}
                    pw={this.state.pw}
                    name={this.state.name}
                    homeNumber={this.state.homeNumber}
                    phoneNumber={this.state.phoneNumber}
                    mailNumber={this.state.mailNumber}
                    address={this.state.address}
                    email={this.state.email}
                    onChangeUserId={this.onChangeUserId}
                    onChangeUserPw={this.onChangeUserPw}
                    onChangeUserName={this.onChangeUserName}
                    onChangeUserHomeNumber={this.onChangeUserHomeNumber}
                    onChangeUserPhoneNumber={this.onChangeUserPhoneNumber}
                    onChangeUserMailNumber={this.onChangeUserMailNumber}
                    onChangeUserAddress={this.onChangeUserAddress}
                    onChangeUserEmail={this.onChangeUserEmail}
                />
            </div>
        );
    }
};

const mapStateToProps = ({ auth }) => {
    return {
        ...auth.register
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ registerRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);