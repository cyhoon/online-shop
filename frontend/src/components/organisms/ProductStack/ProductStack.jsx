import React from 'react';
import styled from 'styled-components';
import ProductLeft from '../../molecules/ProductLeft';

const ProductStack = ({ title }) => {
    const Container = styled.div`
        display: block;
        width: 100%;
    `;

    const Title = styled.span`
        display: block;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #eee;
        font-weight: bold;
        font-size: 24px;
    `;

    return (
        <Container>
            <Title>{title}</Title>
            <ProductLeft />
        </Container>
    );
};

export default ProductStack;