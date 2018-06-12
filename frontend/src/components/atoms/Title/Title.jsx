import React from 'react';
import styled from 'styeld-components';

const Title = ({ text }) => {
    const DynamicTitle = styled.span`
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        font-weight: bold;
        font-size: 17px;
        text-align: center;
        border: 1px solid black;
    `;

    return (
        <Title>{ text }</Title>
    );
};

export default Title;