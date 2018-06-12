import React from 'react';
import styled from 'styled-components';
import Advertise from '../../atoms/Advertise';
import Footer from '../../organisms/Footer';
import ProductMain from '../../organisms/ProductMain';

const PageTemplate = ({ header, visualMain, ProductStack }) => {
    const VisualMainContainer = styled.div`
        margin-top: 20px;
    `;

    const MainContainer = styled.div`
        display: flex;
        width: 100%;
    `;

    const LeftContainer = styled.div`
        width: 20%;
    `;

    const MiddleContainer = styled.div`
        width: 60%
    `;

    const RightContainer = styled.div`
        width: 20%;
    `;

    const FooterContainer = styled.div``;

    return (
        <div>
            {header}
            <VisualMainContainer>
                {visualMain}
            </VisualMainContainer>
            <MainContainer>
                <LeftContainer>
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                </LeftContainer>
                <MiddleContainer>
                    <ProductMain title="베스트 추천 상품"/>
                    <ProductMain title="인기 상품"/>
                </MiddleContainer>
                <RightContainer>
                    <Advertise />
                    <Advertise />
                    <Advertise />
                    <Advertise />
                    <Advertise />
                </RightContainer>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </div>
    );
};

export default PageTemplate;