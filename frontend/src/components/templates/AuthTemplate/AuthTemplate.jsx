import React from 'react';
import styled from 'styled-components';
import Jumbotron from '../../atoms/Jumbotron';
import Header from '../../organisms/Header';

const AuthTemplate = ({ url, LoginContainer, RegisterContainer }) => {
    const Container = styled.div`
        width: 100%;
    `;

    const HeaderContainer = styled.div`
        margin-bottom: 30px;
    `;

    const RegisterWrapper = styled.div`
        width: 1200px;
        margin: 0 auto;
    `;

    switch (url) {
    case '/login':
        return (
            <Container>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
            </Container>
        );
    case '/register':
        return (
            <Container>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
                <Jumbotron
                    title="회원가입"
                    height="150px"
                    backgroundColor="#eee"
                />
                <RegisterWrapper>
                    {RegisterContainer}
                </RegisterWrapper>
            </Container>
        );
    default:
        return (<div>Error</div>);
    }
};

export default AuthTemplate;