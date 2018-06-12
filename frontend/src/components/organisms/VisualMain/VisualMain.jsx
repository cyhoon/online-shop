import React from 'react';
import Jumbotron from '../../atoms/Jumbotron';
import News from '../../molecules/News';
import styled from 'styled-components';

const VisualMain = () => {
    const NewsContainer = styled.div`
        position: absolute;
        top: 12%;
        right: 18.7%;
    `;

    return (
        <div style={{ position: 'relative' }}>
            <Jumbotron 
                title="Main Visual"
                subTitle="및 이벤트공지 뉴스"
                height="250px"
                backgroundColor="#eee"
            />
            <NewsContainer>
                <News />
            </NewsContainer>
        </div>
    );
};

export default VisualMain;