import React from 'react';
import styled from 'styled-components';

const Jumbotron = ({ backgroundColor, height, title, subTitle }) => {
    const Container = styled.div`
        width: 100%;
        height: ${height}
        background-color: ${backgroundColor}

        display: flex;
        justify-content: center;
    `;

    const Title = styled.span`
        display: block;
        font-weight: bold;
        font-size: 32px;
        text-align: center;
    `;

    const SubTitle = styled.span`
        display: block;
        font-weight: bold;
        font-size: 21px;
        text-align: center;
    `;

    return (
        <Container>
            <Title>{ title }</Title>
            { subTitle ? <SubTitle>{ subTitle }</SubTitle> : null }
        </Container>
    );
};

export default Jumbotron;