import React from 'react';
import Li from '../../atoms/Li/Li';

const NotificationList = ({ list }) => {
    const renderList = () => {
        return list.map(item => 
            <Li>
                {item}
            </Li>
        );
    };

    return (
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            { renderList() }
        </div>
    );
};

export default NotificationList;