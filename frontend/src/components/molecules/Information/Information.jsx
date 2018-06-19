import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';

const Container = styled.div`

`;

const Information = ({ title, children }) => {
    console.log('title: ', title);

    return (
        <Container>
            <Title text={title} textAlign='center'></Title>
            {
                children
            }
        </Container>
    );
};

export default Information;