import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 50px;
`;

const Table = styled.table`
    width: 100%;
    // text-align: center;

    th {
        text-align: left;
        font-weight: normal;
        border-bottom: 3px dotted #999;
        padding-bottom: 10px;
    }
`;

const Board = () => {
    return (
        <Container>
            <Table>
                <tr>
                    <th>제목</th>
                    <th>아이디</th>
                    <th>내용</th>
                    <th>등록날짜</th>
                </tr>
                <tr>
                    <td>완전 만족합니다</td>
                    <td>dudgns32</td>
                    <td>믿고 구매했습니다. 역시 영훈님...</td>
                    <td>2018-06-20</td>
                </tr>
                <tr>
                    <td>완전 만족합니다</td>
                    <td>dudgns32</td>
                    <td>믿고 구매했습니다. 역시 영훈님...</td>
                    <td>2018-06-20</td>
                </tr>
                <tr>
                    <td>완전 만족합니다</td>
                    <td>dudgns32</td>
                    <td>믿고 구매했습니다. 역시 영훈님...</td>
                    <td>2018-06-20</td>
                </tr>
                <tr>
                    <td>완전 만족합니다</td>
                    <td>dudgns32</td>
                    <td>믿고 구매했습니다. 역시 영훈님...</td>
                    <td>2018-06-20</td>
                </tr>
            </Table>
        </Container>
    );
};

export default Board;