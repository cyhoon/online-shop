import React from 'react';
import styled from 'styled-components';
import Img from '../../atoms/Img';
import Button from '../../atoms/Button';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    display: block;
    margin-top: 20px;
`;


const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
`;

const ProductImage = ({ imageSrc }) =>
    <Container>
        <ImageContainer>
            <Img
                imgSrc="http://image.musinsa.com/images/goods_img/20171228/693318/693318_2_500.jpg"
                backgroundSize="contain"
            />
        </ImageContainer>
        <ButtonContainer>
            <Button
                display='block'
                backgroundColor='#eeeeeeee'
                marginLeft='auto'
                marginRight='auto'
                width='200px'
                height='32px'
                outLine='none'
            >확대보기</Button>
        </ButtonContainer>
    </Container>;

export default ProductImage;