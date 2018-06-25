import React from 'react';
import styled from 'styled-components';

import Nav from '../../molecules/Nav';
import Search from '../../molecules/Search';
import Type from '../../molecules/Type';
import Logo from '../../atoms/Logo';

const Header = () => {
    const Container = styled.div`
        width: 1200px;
        margin: 0 auto;
    `;

    const MiddleContainer = styled.div`
        display: flex;
        margin-bottom: 20px;
    `;

    const TypeContainer = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
        <Container>
            <Nav />
            <MiddleContainer>
                <Logo />
                <Search />
            </MiddleContainer>
            <Type />
        </Container>
    );
};

export default Header;