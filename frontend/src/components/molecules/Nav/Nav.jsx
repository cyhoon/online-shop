import React from 'react';
import styled from 'styled-components';
import NavItem from '../../atoms/NavItem';
import { Link } from 'react-router-dom';

const Container = styled.div`
    text-align: right;
    font-size: 15px;

    margin-bottom: 10px;
`;

const Nav = () => {
    return (
        <Container>
            <NavItem><Link to='/'>HOME</Link></NavItem>
            <NavItem>회원정보변경</NavItem>
            <NavItem>고객센터</NavItem>
            <NavItem>장바구니</NavItem>
            <NavItem>배송조회</NavItem>
            <NavItem>마일리지</NavItem>
            <NavItem>이용안내</NavItem>
        </Container>
    );
};

export default Nav;