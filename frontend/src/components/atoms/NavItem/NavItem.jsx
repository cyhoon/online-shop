import React from 'react';
import styled from 'styled-components';

const NavItem = ({ children }) => {
    const Item = styled.span`
        margin-left: 10px;
        cursor: pointer;
    `

    return (
        <Item>{ children }</Item>
    );
};

export default NavItem;