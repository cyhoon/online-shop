import React from 'react';
import styled from 'styled-components';

const Img = ({ imgSrc }) => {
    const DynamicImg = styled.div`
        width: 100%;
        height: 100%;
        background-image: url(${imgSrc});
        background-repeat: no-repeat;
        background-size: cover;
        // background-position: center;
    `;

    return (
        <DynamicImg />
    );
};

export default Img;