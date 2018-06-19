import React from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

import Title from '../../atoms/Title';
import SubMenu from '../../molecules/SubMenu';
import ProductMainFour from '../../organisms/ProductMainFour';
import ProductMainLine from '../../organisms/ProductMainLine/ProductMainLine';

const CategoryTemplate = () => {
    const Container = styled.div`
        width: 100%;
    `;

    const HeaderContainer = styled.div`
        margin-bottom: 30px;
    `;

    const FooterContainer = styled.div`
        // border-top: 1px solid #999;
        // border-bottom: 1px solid #999;
    `;

    const MainContainer = styled.div`
        display: flex;
    `;

    const LeftContainer = styled.div`
        flex: 1;
        border: 1px solid #eee;
    `;

    const MiddleContainer = styled.div`
        flex: 3;
        border: 1px solid #eee;
    `;

    const ImageContainer = styled.div`
        background-image: url('https://cdn.crewbi.com/images/goods_img/20171208/272068/272068_a_500.jpg?v=201801251749');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        width: 100%;
        height: 300px;
    `;

    const SubMenuContainer = styled.div`
        width: 100%;
        height: 350px;
        border: 1px solid #eee;
    `;

    return (
        <Container>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <MainContainer>
                <LeftContainer>
                    <SubMenuContainer>
                        <SubMenu title="가방" />
                    </SubMenuContainer>
                </LeftContainer>
                <MiddleContainer>
                    <Title text="가방" textAlign='left' paddingLeft="40px" />
                    <ImageContainer />
                    <ProductMainFour title="신상품코너"/>
                    <ProductMainFour title="MD 추천상품"/>
                    <ProductMainLine title="인기상품" />
                </MiddleContainer>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    );
};

export default CategoryTemplate;