import React from 'react';

import PageTemplate from '../../templates/PageTemplate';
import HeaderOrganisms from '../../organisms/Header';
import VisualMain from '../../organisms/VisualMain';

const HomePage = () => {
    return (
        <div>
            <PageTemplate 
                header={<HeaderOrganisms />}
                visualMain={<VisualMain />}
            >
                
            </PageTemplate>
        </div>
    );
};

export default HomePage;