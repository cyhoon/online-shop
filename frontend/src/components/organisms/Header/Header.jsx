import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Container = styled.div`
        width: 1200px;
        margin: 0 auto;
    `;

    const Nav = styled.div`
        text-align: right;
        font-size: 15px;

        margin-bottom: 10px;
    `;

    const NavItem = styled.span`
        margin-left: 10px;
        cursor: pointer;
    `;

    const MiddleContainer = styled.div`
        display: flex;
        margin-bottom: 20px;
    `;

    const Logo = styled.span`
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
    `;

    const SearchContainer = styled.div`
        flex: 2;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    `;

    const Title = styled.div`
        font-weight: bold;

        font-size: 18px;
    `;

    const Select = styled.select`
        margin-left: 10px;
        width: 55px;
        height: 30px;
    `;

    const Input = styled.input`
        display: inline-block;
        width: 120px;
        height: 24px;
        margin-left: 10px;
        margin-right: 5px;
    `;

    const Button = styled.button`
        height: 30px;
    `;

    const TypeContainer = styled.div`
        display: flex;
        justify-content: center;
    `;

    const TypeItem = styled.span`
        flex: 1;
        padding: 5px;
        border: 1px solid #999;
        background-color: #eee;

        text-align: center;
        cursor: pointer;

        &:hover {
            background-color: #999;
            color: white;
        }
    `;

    return (
        <Container>
            <Nav>
                <NavItem>HOME</NavItem>
                <NavItem>회원정보변경</NavItem>
                <NavItem>고객센터</NavItem>
                <NavItem>장바구니</NavItem>
                <NavItem>배송조회</NavItem>
                <NavItem>마일리지</NavItem>
                <NavItem>이용안내</NavItem>
            </Nav>
            <MiddleContainer>
                <Logo>영훈 쇼핑몰</Logo>
                <SearchContainer>
                    <Title>Power Search</Title>
                    <Select>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </Select>
                    <Input type='text' />
                    <Button>GO</Button>
                </SearchContainer>
            </MiddleContainer>
            <TypeContainer>
                <TypeItem>상의(남)</TypeItem>
                <TypeItem>하의(남)</TypeItem>
                <TypeItem>상의(여)</TypeItem>
                <TypeItem>하의(여)</TypeItem>
                <TypeItem>구두</TypeItem>
                <TypeItem>가방</TypeItem>
                <TypeItem>소품</TypeItem>
            </TypeContainer>
        </Container>
    );
};

export default Header;