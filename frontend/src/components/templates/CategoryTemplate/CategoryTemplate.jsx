import React from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

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

    `;

    const LeftContainer = styled.div`
    
    `;

    const MiddleContainer = styled.div`
    
    `;

    return (
        <Container>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <MainContainer>
                <LeftContainer>
                    left
                </LeftContainer>
                <MiddleContainer>
                    middle
                </MiddleContainer>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    );
};

export default CategoryTemplate;