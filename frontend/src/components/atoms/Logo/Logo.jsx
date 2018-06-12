import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    const Logo = styled.span`
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
    `;

    return (
        <Logo>영훈 쇼핑몰</Logo>
    );
};

export default Logo;