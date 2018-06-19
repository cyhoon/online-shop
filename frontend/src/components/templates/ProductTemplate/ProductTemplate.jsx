import React from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

import Title from '../../atoms/Title';
import SubMenu from '../../molecules/SubMenu';
import ProductInfo from '../../organisms/ProductInfo';

import Information from '../../molecules/Information';
import Pre from '../../atoms/Pre';
import Board from '../../organisms/Board/Board';

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

const ProductTemplate = () => {
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
                    <Title text="영훈 가방" textAlign='left' paddingLeft="40px" />
                    <ProductInfo />
                    <Information title="제품상세정보">
                        <Pre>
                            000님의 쇼핑 도우미 000입니다.<br />
                            000님의 상품에 대한 문의나 배송문의는 저에게 바로 연락을 주세요<br />
                            고객 한 분 한 분을 소중히 여기며 최고의 서비스를 약속 드립니다.<br />
                            직통전화번호:080-000-0000 이나 MD전용게시판을 이용해주세요
                        </Pre>
                    </Information>
                    <Information title="고객의 상품 명">
                        <Pre>
                            고객의 상품평은 추후 쇼핑몰의 제품선정에 중요한 역할을 합니다.<br />
                            쇼핑몰의 더 나은 상품선정과 고객 분들의 쇼핑문화의 질을 높이 고자 좋은 평은<br />
                            매월 심사 후 쇼핑몰 메인에 올려드리고 선물을 증정하고 있습니다.
                        </Pre>
                    </Information>
                    <Board />
                </MiddleContainer>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    );
};

export default ProductTemplate;
