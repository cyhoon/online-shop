import React from 'react';
import Input from '../../atoms/Input';
import styled from 'styled-components';

const InputBlock = ({ type, name, children, width, marginRight, value, onChangeHandle}) => {
    const ChildrenContainer = styled.div`
        display: inline-block;
        margin-left: 20px;
    `;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: `${marginRight}` }}>{name}</span>
            <Input type={type} width={width} value={value} onChangeHandle={onChangeHandle} />
            <ChildrenContainer>
                { children }
            </ChildrenContainer>
        </div>
    );
};

export default InputBlock;