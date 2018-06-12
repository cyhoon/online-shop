import React from 'react';
import styled from 'styled-components';
import ProductTop from '../../molecules/ProductTop';

const ProductMain = ({ title }) => {
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
        padding-top: 30px;
        padding-bottom: 30px;

        display: flex;
        justify-content: center;
    `;

    return (
        <div>
            <Title>{ title }</Title>
            <ProductContainer>
                <ProductTop />
                <ProductTop />
                <ProductTop />
            </ProductContainer>
        </div>
    );
};

export default ProductMain;