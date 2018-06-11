import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate';
import LoginContainer from '../../../containers/LoginContainer';
import RegisterContainer from '../../../containers/RegisterContainer';

const AuthPage = ({ match, history }) => {
    return (
        <AuthTemplate
            url={match.url}
            LoginContainer={<LoginContainer history={history} />}
            RegisterContainer={<RegisterContainer history={history} />}
        />
    );
};

export default AuthPage;