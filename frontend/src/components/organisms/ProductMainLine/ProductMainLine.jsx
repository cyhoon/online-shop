import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';

const ProductMainLine = ({ }) => {
    const ContentContainer = styled.div`
        display: flex;
    `;

    const UlContainer = styled.ul`
        flex: 1;
    `;

    return (
        <div>
            <Title text="인기상품" textAlign="center" />
            <ContentContainer>
                <UlContainer>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </UlContainer>
                <UlContainer>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                </UlContainer>
            </ContentContainer>
        </div>
    );
};

export default ProductMainLine;