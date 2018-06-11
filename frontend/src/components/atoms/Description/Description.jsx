import React from 'react';
import styled from 'styled-components';

const Description = ({ text }) => {
    const Container = styled.div`
        padding: 10px;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;

        font-size: 18px;
    `;

    return (
        <Container>
            {text}
        </Container>
    );
};

export default Description;