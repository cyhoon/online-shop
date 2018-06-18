import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';

const SubMenu = ({ title }) => {
    const Container = styled.div`
        height: 100%;
    `;

    const Description = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <Container>
            <Title text={title} textAlign='center' />
            <Description>
                <p>크로스백</p>
                <p>밸팩</p>
                <p>벨트백</p>
            </Description>
        </Container>
    );
};

export default SubMenu;