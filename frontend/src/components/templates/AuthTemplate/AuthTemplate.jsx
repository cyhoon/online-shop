import React from 'react';

const AuthTemplate = ({ url, LoginContainer, RegisterContainer }) => {
    switch (url) {
    case '/login':
        return (
            <div>
                login
            </div>
        );
    case '/register':
        return (
            <div>
                register
            </div>
        );
    default:
        return (<div>Error</div>);
    }
};

export default AuthTemplate;