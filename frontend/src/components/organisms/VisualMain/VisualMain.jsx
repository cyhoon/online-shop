import React from 'react';
import Jumbotron from '../../atoms/Jumbotron';
import News from '../../molecules/News';
import styled from 'styled-components';

const VisualMain = () => {
    const Container = styled.div`
        display: flex;
        position: relative;
    `;

    const JumbotronContainer = styled.div`
        flex: 3;
    `;

    const NewsContainer = styled.div`
        flex: 0.1;
        position: absolute;
        top: 25px;
        right: 358px;
    `;

    return (
        <Container>
            <JumbotronContainer>
                <Jumbotron
                    title="Main Visual"
                    subTitle="및 이벤트공지 뉴스"
                    height="250px"
                    backgroundColor="#eee"
                />
            </JumbotronContainer>
            <NewsContainer>
                <News />
            </NewsContainer>
        </Container>
    );
};

export default VisualMain;