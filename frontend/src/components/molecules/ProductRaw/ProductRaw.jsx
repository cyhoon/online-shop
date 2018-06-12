import React from 'react';
import styled from 'styled-components';
import DynamicImg from '../../atoms/Img';

const ProductRaw = () => {
    const Container = styled.div`
        width: 100%;
        height: 100px;
        background-color: #eee;

        display: flex;
    
        margin: 10px 0;
    `;

    const VisualContainer = styled.div`
        width: 20%;
        height: 100%;
    `;

    const ExperienceContainer = styled.div`
        width: 80%;
        height: 100%;
        line-height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
    `;

    const Text = styled.span`
        flex: 1;
    `;

    return (
        <Container>
            <VisualContainer>
                <DynamicImg imgSrc="http://biscuitbutton.com/web/product/medium/201806/4909_shop1_15287146404613.jpg" />
            </VisualContainer>
            <ExperienceContainer>
                <Text>상품이름: 영훈이 입던 옷</Text>
                <Text>상품내용: 영훈님이 입던 옷</Text>
                <Text>가격: 300020202020$</Text>
            </ExperienceContainer>
        </Container>
    );
};

export default ProductRaw;