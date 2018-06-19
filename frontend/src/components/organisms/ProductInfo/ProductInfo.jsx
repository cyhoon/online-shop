import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../molecules/ProductImage';
import Button from '../../atoms/Button';

const Container = styled.div`
    padding: 1%;
    display: flex;
`;

const ChildContainer = styled.div`
    flex: 1;
`;

const InformationContainer = styled.div`
    flex: 1;
    margin-top: 2%;
`;

const ButtonContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

const TextContainer = styled.div`
    margin-bottom: 20px;
`;

const SeparateContainer = styled.div`
    border-bottom: 1px dotted #999;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const ProductInfo = () => {
    return (
        <Container>
            <ChildContainer>
                <ProductImage />
            </ChildContainer>
            <InformationContainer>
                <TextContainer>
                    <Bold>제조사: </Bold> <span>영훈 컴퍼니(주)</span>
                </TextContainer>
                <TextContainer>
                    <Bold>마일리지: </Bold> <span>250</span>
                </TextContainer>
                <TextContainer>
                    <Bold>주문수량: </Bold><input type="number" /> 개
                </TextContainer>
                <SeparateContainer>
                    <Bold>시중가격: </Bold><span>2500</span>
                </SeparateContainer>
                <SeparateContainer>
                    <Bold>판매가격: </Bold><span>2500</span>
                </SeparateContainer>

                <ButtonContainer>
                    <Button
                        backgroundColor='#eeeeeeee'
                        width='100px'
                        height='32px'
                        outLine='none'
                        marginRight='30px'
                    >쇼핑하기</Button>

                    <Button
                        backgroundColor='#eeeeeeee'
                        width='100px'
                        height='32px'
                        outLine='none'
                    >장바구니</Button>
                    </ButtonContainer>
            </InformationContainer>
        </Container>
    );
};

export default ProductInfo;