import React from 'react';
import styled from 'styled-components';

const Search = () => {
    const Container = styled.div`
        flex: 2;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    `;

    const Title = styled.div`
        font-weight: bold;

        font-size: 18px;
    `;

    const Select = styled.select`
        margin-left: 10px;
        width: 55px;
        height: 30px;
    `;

    const Input = styled.input`
        display: inline-block;
        width: 120px;
        height: 24px;
        margin-left: 10px;
        margin-right: 5px;
    `;

    const Button = styled.button`
        height: 30px;
    `;

    return (
        <Container>
            <Title>POWER SEARCH</Title>
            <Select>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
            </Select>
            <Input type='text' />
            <Button>GO</Button>
        </Container>
    );
};

export default Search;