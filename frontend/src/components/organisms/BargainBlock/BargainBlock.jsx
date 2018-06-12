import React from 'react';
import styled from 'styled-components';
import ProductRaw from '../../molecules/ProductRaw';

const BargainBlock = () => {
    const Title = styled.span`
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        font-weight: bold;
        font-size: 17px;
        text-align: center;
        // padding-top: 10px;
        // padding-bottom: 10px;
        border: 1px solid black;
    `;

    const ProductContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 20px 10px;
    `;

    return (
        <div>
            <Title>특가상품</Title>
            <ProductContainer>
                <ProductRaw />
                <ProductRaw />
                <ProductRaw />
                <ProductRaw />
                <ProductRaw />
            </ProductContainer>
        </div>
    );
};

export default BargainBlock;