import React from 'react';
import styled from 'styled-components';

const Terms = ({ name }) => {
    const MemberTermsContainer = styled.div`
        width: 50%;
        height: 100px;
        background-color: #eee;
        margin-top: 10px;
    `;

    return (
        <div style={{ borderBottom: '1px solid #999', paddingBottom: '10px' }}>
            <span>{name}</span>
            <MemberTermsContainer />
            <div style={{ marginTop: '10px' }}>
                회원약관에
                <input type="radio" name="agree" value="true" />동의함
                <input type="radio" name="agree" value="true" />동의 안함
            </div>
        </div>
    );
};

export default Terms;