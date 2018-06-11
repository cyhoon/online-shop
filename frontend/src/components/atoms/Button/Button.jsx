import React from 'react';
import styled from 'styled-components';

const Button = ({
    text,
    textColor,
    borderColor,
    backgroundColor,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    outLine,
    handleClick,
    children,
    marginLeft,
    marginRight,
 }) => {
    const DynamicButton = styled.button`
        background-color: ${backgroundColor? backgroundColor : 'inherit'};
        cursor: pointer;

        color: ${textColor}
        border: 1.4px solid ${borderColor};

        width: ${width}
        height: ${height}
        border-radius: ${borderRadius};

        font-size: ${fontSize};
        font-weight:  ${fontWeight};

        margin-left: ${marginLeft};
        margin-right: ${marginRight};

        outline: ${outLine ? outLine : 'undefined'};
    `;
    return (
        <DynamicButton onClick={handleClick}>{children}</DynamicButton>
    );
};

export default Button;