import React from 'react';
import Input from '../../atoms/Input';
import styled from 'styled-components';

const InputBlock = ({ name, children, width }) => {
    const ChildrenContainer = styled.div`
        display: inline-block;
        margin-left: 20px;    
    `;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span>{name}</span>
            <Input width={width} />
            <ChildrenContainer>
                { children }
            </ChildrenContainer>
        </div>
    );
};

export default InputBlock;