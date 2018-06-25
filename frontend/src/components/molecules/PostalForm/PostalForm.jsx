import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const PostalForm = ({ value, onChangeHandle, name, children }) => {
    const ChildrenContainer = styled.div`
        display: inline-block;
        margin-left: 20px;    
    `;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span>{ name }</span>
            <Input value={value} onChangeHandle={onChangeHandle} />-<Input />
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </div>
    );
};

export default PostalForm;