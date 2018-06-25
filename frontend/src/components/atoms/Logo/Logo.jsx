import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = ({ children }) => {
    const Logo = styled.span`
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;

        a {
            color: inherit;
            text-decoration: none;
        }
    `;

    return (
        <Logo><Link to='/'>영훈 쇼핑몰</Link></Logo>
    );
};

export default Logo;