import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TypeItem from '../../atoms/TypeItem';

const Type = () => {
    const Container = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
        <Container>
            <TypeItem><Link to='/category'>상의(남)</Link></TypeItem>
            <TypeItem><Link to='/category'>하의(남)</Link></TypeItem>
            <TypeItem><Link to='/category'>상의(여)</Link></TypeItem>
            <TypeItem><Link to='/category'>하의(여)</Link></TypeItem>
            <TypeItem><Link to='/category'>구두</Link></TypeItem>
            <TypeItem><Link to='/category'>가방</Link></TypeItem>
            <TypeItem><Link to='/category'>소품</Link></TypeItem>
        </Container>
    );
};

export default Type;