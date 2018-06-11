import React from 'react';
import styled from 'styled-components';

const MiniText = ({ marginLeft, size, color, text }) => {
    const Span = styled.span`
        margin-left: ${marginLeft};
        font-size: ${size};
        color: ${color};
    `;

    return (
        <Span>{ text }</Span>
    );
};

export default MiniText;