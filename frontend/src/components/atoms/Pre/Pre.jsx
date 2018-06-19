import React from 'react';
import styled from 'styled-components';

const Container = styled.pre`
    width: 100%;
    padding-left: 20px;
    font-size: 15px;
`;

const Pre = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
};

export default Pre;