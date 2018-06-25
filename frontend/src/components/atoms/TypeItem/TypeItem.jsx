import React from 'react';
import styled from 'styled-components';

const TypeItem = ({ children }) => {
    const Item = styled.span`
        flex: 1;
        padding: 5px;
        border: 1px solid #999;
        background-color: #eee;

        text-align: center;
        cursor: pointer;

        &:hover {
            background-color: #999;
            color: white;
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    `;

    return (
        <Item>{ children }</Item>
    );
};

export default TypeItem;
