import React from 'react';

import PageTemplate from '../../templates/PageTemplate';
import HeaderOrganisms from '../../organisms/Header';
import VisualMain from '../../organisms/VisualMain';
import ProductStack from '../../organisms/ProductStack';

const HomePage = () => {
    return (
        <div>
            <PageTemplate 
                header={<HeaderOrganisms />}
                visualMain={<VisualMain />}
                ProductStack={<ProductStack title="공동구매" />}
            >
                
            </PageTemplate>
        </div>
    );
};

export default HomePage;