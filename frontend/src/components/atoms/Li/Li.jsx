import React from 'react';
import styled from 'styled-components';

const Li = ({ children }) => {
    const DynamicLi = styled.li`
    `;

    return (
        <DynamicLi>
            { children }
        </DynamicLi>
    );
};

export default Li;