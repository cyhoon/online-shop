import React from 'react';
import styled from 'styled-components';

const News = () => {
    const Container = styled.div`
        width: 350px;
        border: 1px solid black;
        padding: 10px;

        background-color: white;
    `;

    const Title = styled.span`
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 21px;
        border-bottom: 2px dotted black;
        text-align: center;
    `;

    return (
        <Container>
            <Title>Shopping New & Event</Title>
            <ul>
                <li>옷 판매합니다</li>
                <li>옷 판매합니다</li>
                <li>옷 판매합니다</li>
                <li>옷 판매합니다</li>
                <li>옷 판매합니다</li>
            </ul>
        </Container>
    );
};

export default News;