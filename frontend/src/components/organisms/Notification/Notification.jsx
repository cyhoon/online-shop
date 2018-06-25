import React from 'react';
import Title from '../../atoms/Title';
import NotificationList from '../../molecules/NotificationList/NotificationList';

const Notification = ({ title, titleTextAlign, titlePaddingLeft, list }) => {
    console.log('notification list333: ', list.map);

    console.log(list);
    return (
        <div style={{ width: '100%' }}>
            <Title
                text={`${title}`}
                textAlign={`${titleTextAlign}`}
                paddingLeft={`${titlePaddingLeft}`}
            />

            <NotificationList 
                list={list}
            />
        </div>
    );
};

export default Notification;