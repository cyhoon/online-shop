import React from 'react';
import styled from 'styled-components';

const Input = ({ type, width, height, value, onChangeHandle }) => {
    return (
        <input type={`${type}`}
            style={{
                display: 'inline-block',
                width: `${width}`,
                height: `${height}`
            }}

            value={value}
            onChange={onChangeHandle}
        />
    );
};

export default Input;