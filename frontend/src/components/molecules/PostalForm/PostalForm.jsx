import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const PostalForm = ({ name, children }) => {
    const ChildrenContainer = styled.div`
        display: inline-block;
        margin-left: 20px;    
    `;

    return (
        <div style={{ marginBottom: '10px' }}>
            <span>{ name }</span>
            <Input />-<Input />
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </div>
    );
};

export default PostalForm;