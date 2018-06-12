import React from 'react';
import styled from 'styled-components';
import DynamicImg from '../../atoms/Img';

const ProductTop = () => {
    const Container = styled.div`
        width: 300px;
        height: 200px;
        margin-left: 10px;
        margin-right: 10px;
        border: 1px solid black;
        position: relative;
    `;

    const VisualContainer = styled.div`
        width: 200px;
        height: 80px;
        background-color: #eee;
        border: 1px solid black;
        position: relative;
        top: -10px;
    `;

    const ExperienceContainer = styled.div`
        width: 100%;
    `;

    return (
        <Container>
            <VisualContainer>
                <DynamicImg imgSrc="http://biscuitbutton.com/web/product/medium/201806/4909_shop1_15287146404613.jpg" />
            </VisualContainer>
            <ExperienceContainer>
                <p>상품이름: 영훈이 입던 옷</p>
                <p>상품내용: 영훈님이 입던 옷</p>
                <p>가격: 300020202020$</p>
            </ExperienceContainer>
        </Container>
    );
};

export default ProductTop;