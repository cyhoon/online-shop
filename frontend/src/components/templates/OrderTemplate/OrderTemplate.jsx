import React from 'react';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import Notification from '../../organisms/Notification';
import Footer from '../../organisms/Footer';

const Container = styled.div`
    width: 100%;
`;

const HeaderContainer = styled.div`
    margin-bottom: 30px;
`;

const MainContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 70px;
`;

const FooterContainer = styled.div``;

const OrderTemplate = () => {

    const notificationList = [
        <span>고객님께서 주문하신 상품내역을 <span style={{ color: 'red' }}>변경</span>하시거나 삭제하실 수가 삭제하실 수가 있습니다.</span>,
        <span>계속주문을 원하시면 [쇼핑하기]을 클릭하세요.</span>,
        <span>주문하신 상품에 대해 마일리지가 계쏙적으로 누적됩니다.</span>,
        <span>마일리지의 누적점수에 따라 사은품이 적용되며 추후 주문 시 동봉하여 발송됩니다.</span>
    ];

    return (
        <Container>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <MainContainer>
                <Notification
                    title='장바구니'
                    titleTextAlign='left'
                    titlePaddingLeft='20px'

                    list={notificationList}
                />

            <div style={{ textAlign: 'right' }}>
                주문단계: <span style={{ fontWeight: 'bold' }}>장바구니</span> >> 배송지 및 결제정보 >> 주문완료
            </div>
            <table style={{ width: '100%', textAlign: 'left', borderSpacing: '0', marginBottom: '30px' }}>
                <thead style={{ backgroundColor: '#eee', border: '1px solid black', borderCollapse: 'collapse' }}>
                    <tr>
                        <th>주문상품</th>
                        <th>가격</th>
                        <th>주문수</th>
                        <th>합계</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '40%' }}></td>
                        <td style={{ width: '30%' }}></td>
                        <td style={{ width: '5%' }}><input type='number' /></td>
                        <td style={{ width: '20%'}}></td>
                        <td style={{ width: '5%' }}><input type='checkbox' /></td>
                    </tr>
                    <tr>
                        <td style={{ width: '40%' }}></td>
                        <td style={{ width: '30%' }}></td>
                        <td style={{ width: '5%' }}><input type='number' /></td>
                        <td style={{ width: '20%'}}></td>
                        <td style={{ width: '5%' }}><input type='checkbox' /></td>
                    </tr>
                    <tr>
                        <td style={{ width: '40%' }}></td>
                        <td style={{ width: '30%' }}></td>
                        <td style={{ width: '5%' }}><input type='number' /></td>
                        <td style={{ width: '20%'}}></td>
                        <td style={{ width: '5%' }}><input type='checkbox' /></td>
                    </tr>
                </tbody>
            </table>
            <div style={{ float: 'right' }}>
                <button>다시계산</button>
                <button style={{ marginLeft: '300px' }}>삭제하기</button>
            </div>
            <div style={{ marginTop: '100px', textAlign: 'center', paddingTop: '5px', border: '1px solid black', paddingBottom: '5px', backgroundColor: '#999', color: 'white', fontWeight: 'bold' }}>
                <span style={{ marginRight: '100px' }}>주문 총가격: </span>
                <span>원</span>
            </div>
            <div style={{ marginLeft: '40%', marginTop: '30px', marginBottom: '30px' }}>
                <button>쇼핑하기</button>
                <button style={{ marginLeft: '30px' }}>주문하기</button>
            </div>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </Container>
    );
};

export default OrderTemplate;