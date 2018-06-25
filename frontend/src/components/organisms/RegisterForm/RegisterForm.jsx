import React from 'react';
import InputBlock from '../../molecules/InputBlock';
import MiniText from '../../atoms/MiniText';
import PostalForm from '../../molecules/PostalForm';
import Terms from '../../molecules/Terms';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const Container = styled.div``;

const RegisterForm = (
    {register,
    id,
    pw,
    name,
    homeNumber,
    phoneNumber,
    mailNumber,
    address,
    email,
    onChangeUserId,
    onChangeUserPw,
    onChangeUserName,
    onChangeUserHomeNumber,
    onChangeUserPhoneNumber,
    onChangeUserMailNumber,
    onChangeUserAddress,
    onChangeUserEmail,}
) => {
    console.log('register: ', register);
    return (
        <Container>
            <InputBlock name="희망아이디 : " value={id} onChangeHandle={onChangeUserId}>
                <a href="#">중복 확인</a>
                <MiniText
                    marginLeft="10px"
                    size="12px"
                    color="blue"
                    text="(6~10자의 영문 및 숫자만 가능하며 여백은 사용할 수 없습니다)"
                />
            </InputBlock>
            <InputBlock name="희망패스워드 : " value={pw} onChangeHandle={onChangeUserPw}>
                <MiniText 
                    size="12px"
                    color="blue"
                    text="(6~10자 이내로 영문과 숫자의 조합으로 만드세요)"
                />
            </InputBlock>
            <InputBlock name="패스워드확인 : " />
            <InputBlock name="성명 : " value={name} onChangeHandle={onChangeUserName}>
                <MiniText 
                    size="12px"
                    color="black"
                    text="(이름에 공백은 제거해 주세요)"
                />
            </InputBlock>
            <InputBlock name="전화번호 : " value={homeNumber} onChangeHandle={onChangeUserHomeNumber} />
            <InputBlock name="핸드폰 : " value={phoneNumber} onChangeHandle={onChangeUserPhoneNumber} />
            <PostalForm name="우편번호 :  " value={mailNumber} onChangeHandle={onChangeUserMailNumber} >
                <button>우편번호 찾기</button>
                <MiniText
                    marginLeft="10px"
                    size="12px"
                    color="black"
                    text="(배달시 혼란을 피하기위해 정확히 기입해주시기 바랍니다)"
                />
            </PostalForm>
            <InputBlock width="50%" name="주소 : " value={address} onChangeHandle={onChangeUserAddress} />
            <InputBlock name="이메일 주소 : " value={email} onChangeHandle={onChangeUserEmail} />
            <Terms name="회원약관" />
            <div style={{ width: '260px', margin: '0 auto', marginTop: '40px', marginBottom: '50px' }}>
                <Button 
                    width="120px"
                    backgroundColor="#eee"
                    height="30px"
                    marginRight="10px"
                    handleClick={register}
                >
                    확인
                </Button>
                <Button 
                    width="120px"
                    backgroundColor="#eee"
                    height="30px"
                    marginLeft="10px"
                >
                    취소
                </Button>
            </div>
        </Container>
    );
};

export default RegisterForm;