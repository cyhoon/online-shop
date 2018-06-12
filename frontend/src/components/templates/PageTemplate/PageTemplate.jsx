import React from 'react';
import styled from 'styled-components';

const PageTemplate = ({ header, visualMain, ProductStack }) => {
    const VisualMainContainer = styled.div`
        margin-top: 20px;
    `;

    const MainContainer = styled.div`
        display: flex;
        width: 100%;
    `;

    const LeftContainer = styled.div`
        width: 20%;
    `;

    const MiddleContainer = styled.div`
        width: 60%
    `;

    const RightContainer = styled.div`
        width: 20%;
    `;

    return (
        <div>
            {header}
            <VisualMainContainer>
                {visualMain}
            </VisualMainContainer>
            <MainContainer>
                <LeftContainer>
                    {ProductStack}
                </LeftContainer>
                <MiddleContainer>
                    middle container
                </MiddleContainer>
                <RightContainer>
                    right container
                </RightContainer>
            </MainContainer>
        </div>
    );
};

export default PageTemplate;