import React from 'react';
import styled from 'styled-components';
import InputBlock from '../../molecules/InputBlock';
import Button from '../../atoms/Button';

const LoginMain = () => {
    const Container = styled.div`
        width: 100%;
        height: 230px;
        background-color: #f1f3f4;
        position: absolute;
        top: 24px;
        right: 24px;

        display: flex;
    `;

    const ImageContainer = styled.div`
        width: 300px;
        height: 100%;
        background-image: url('https://img.etsystatic.com/il/68850e/1171546928/il_fullxfull.1171546928_9v62.jpg?version=0');
        background-size: cover;
        background-position: center;
    `;

    const FormContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 70px;
        padding-left: 20px;
    `;

    return (
        <Container>
            <ImageContainer />
            <FormContainer>
                <div>
                    <InputBlock name='아이디' width='180px' marginRight='36px'>
                        <Button>확인</Button>
                    </InputBlock>
                    <InputBlock name='비밀번호' width='180px' marginRight='20px' />
                </div>
                <Button>아이디 패스워드 분실신고</Button>
            </FormContainer>
        </Container>
    );
};

export default LoginMain;