import React from 'react';
import styled from 'styled-components';
import ProductType from '../../molecules/ProductType';

const ProductMainSecond = ({ title }) => {
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
        justify-content: center;
    `;

    return (
        <div>
            <Title>{ title }</Title>
            <ProductContainer>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <ProductType />
                    <ProductType />
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <ProductType />
                    <ProductType />
                </div>
            </ProductContainer>
        </div>
    );
};

export default ProductMainSecond;