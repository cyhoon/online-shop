import React from 'react';
import styled from 'styled-components';
import ProductLeft from '../../molecules/ProductLeft';

const ProductStack = ({ title }) => {
    const Container = styled.div`
        display: block;
        width: 100%;
        height: 250px;
        border-right: 1px solid black;
    `;

    const Title = styled.span`
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        font-weight: bold;
        font-size: 17px;
        text-align: center;
        border: 1px solid black;
        border-right: none;
    `;

    return (
        <Container>
            <Title>{title}</Title>
            <ProductLeft />
        </Container>
    );
};

export default ProductStack;