import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

const Footer = () => {

    const Container = styled.div`
        border-bottom: 1px solid #999;
    `;

    const NavContainer = styled.div`
        display: flex;
        justify-content: center;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
    `;

    const NavItem = styled.span`
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    `;

    const LogoContainer = styled.div`
        flex: 1.1;
    `;

    const InformationContainer = styled.div`
        flex: 2;
        height: 100%;
        border-left: 1.5px solid #999;
    `;

    const InformationItem = styled.span`
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
    `;

    return (
        <Container>
            <NavContainer>
                <NavItem>Home</NavItem>
                <NavItem>|</NavItem>
                <NavItem>이용약관</NavItem>
                <NavItem>|</NavItem>
                <NavItem>회원정보관리</NavItem>
                <NavItem>|</NavItem>
                <NavItem>이용안내</NavItem>
                <NavItem>|</NavItem>
                <NavItem>고객센터</NavItem>
            </NavContainer>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px', width: '1200px', margin: '0 auto' }}>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <InformationContainer>
                    <InformationItem>문의 전화: 02)0000-0000/ 000)0000-0000/ Fax 02)0000-0000</InformationItem>
                    <InformationItem>구입문의 : 02-000-0000(일반), 000-0000~0(군)</InformationItem>
                    <InformationItem>Copyright 1999 0000000000, All rights reserved.</InformationItem>
                </InformationContainer>
            </div>
        </Container>
    );
};

export default Footer;