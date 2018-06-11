import React from 'react';
import styled from 'styled-components';
import TypeItem from '../../atoms/TypeItem';

const Type = () => {
    const Container = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
        <Container>
            <TypeItem>상의(남)</TypeItem>
            <TypeItem>하의(남)</TypeItem>
            <TypeItem>상의(여)</TypeItem>
            <TypeItem>하의(여)</TypeItem>
            <TypeItem>구두</TypeItem>
            <TypeItem>가방</TypeItem>
            <TypeItem>소품</TypeItem>
        </Container>
    );
};

export default Type;