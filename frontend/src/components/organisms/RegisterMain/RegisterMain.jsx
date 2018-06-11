import React from 'react';
import styled from 'styled-components';
import Description from '../../atoms/Description';
import RegisterForm from '../../organisms/RegisterForm';

const RegisterMain = () => {
    const DescriptionContainer = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
    `;
    return (
        <div>
            <DescriptionContainer>
                <Description
                    text="영훈 시민들을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로 합니다. 쇼핑몰에 회원으로 가입하시면 보다 나은 편리합니다."
                />
            </DescriptionContainer>
            <RegisterForm />
        </div>
    );
};

export default RegisterMain;