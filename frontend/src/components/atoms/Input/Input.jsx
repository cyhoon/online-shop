import React from 'react';
import styled from 'styled-components';

const Input = ({ width, height }) => {
    const InputBox = styled.input`
        display: inline-block;
        width: ${ width };
        height: ${ height };
    `;

    return ( <InputBox /> );
};

export default Input;