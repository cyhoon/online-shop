import React from 'react';
import styled from 'styled-components';

const PageTemplate = ({ header, visualMain }) => {
    const VisualMainContainer = styled.div`
        margin-top: 40px;
    `;

    return (
        <div>
            {header}
            <VisualMainContainer>
                {visualMain}
            </VisualMainContainer>
        </div>
    );
};

export default PageTemplate;