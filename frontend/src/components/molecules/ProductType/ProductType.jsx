import React from 'react';
import styled from 'styled-components';
import Img from '../../atoms/Img';

const ProductType = () => {
    const Container = styled.div`
        width: 500px;
        height: 200px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid black;
        position: relative;
    `;

    const VisualContainer = styled.div`
        width: 100%;
        height: 130px;
        background-color: #eee;
        position: relative;
    `;

    const ExperienceContainer = styled.div`
        width: 100%;
        padding: 10px;
    `;

    const Type = styled.span`
        position: absolute;
        background-color: #eee;
        padding: 10px;
        text-align: center;
        width: 100px;
        top: 0;
        right: 0;
    `;

    return (
        <Container>
            <VisualContainer>
                <Img 
                    imgSrc='https://cdn.crewbi.com/images/goods_img/20180409/283642/283642_a_500.jpg?v=201804091459'
                />
                <Type>분류별</Type>
            </VisualContainer>
            <ExperienceContainer>
                <span>영훈티셔츠 :</span>
                <span> : 영훈이가 한 번 입고 버린 티셔츠 :</span>
                <span>: 35000</span>
            </ExperienceContainer>
        </Container>
    );
};

export default ProductType;