import React from 'react';
import styled from 'styled-components';

const Advertise = () => {
    const DynamicAdvertise = styled.div`
        width: 100%;
        height: 100px;
        background-color: #eee;
        text-align: center;
        line-height: 100px;
        border: 1px solid black;
        margin-bottom: 3px;
        font-size: 24px;
    `;

    return (
        <DynamicAdvertise>배너식 광고</DynamicAdvertise>
    );
};

export default Advertise;