import React from 'react';
import styled from 'styled-components';

const Jumbotron = ({ title, subTitle, height, backgroundColor, }) => {
    const Container = styled.div`
        width: 100%;
        height: ${height}
        background-color: ${backgroundColor}

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const Title = styled.span`
        display: block;
        font-weight: bold;
        font-size: 32px;
        text-align: center;
    `;

    const SubTitle = styled.span`
        display: block;
        font-weight: lighter;
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