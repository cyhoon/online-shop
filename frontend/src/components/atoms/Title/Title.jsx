import React from 'react';
import styled from 'styled-components';

const Title = ({ text, textAlign, paddingLeft }) => {
    const DynamicTitle = styled.span`
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        font-weight: bold;
        font-size: 17px;
        text-align: ${textAlign};
        padding-left: ${paddingLeft};
        border: 1px solid black;
    `;

    return (
        <DynamicTitle>{ text }</DynamicTitle>
    );
};

export default Title;