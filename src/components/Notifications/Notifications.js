import React from 'react';

import { ReactComponent as Icon } from './../../assets/icons/add.svg';
import './Notifications.scss';

const Notifications = () => {
    const fakeNotifs = [{
        id: 1,
        time: '2 Min',
        label: 'Playlist Added',
        subtitle: '106 songs',
        Icon
    }, {
        id: 2,
        time: '8 Hours',
        label: 'Playlist Shared',
        subtitle: 'To 32 Users',
        Icon
    }]

    return (
        <div className="notifications">
            <div className="label">Notifications</div>
            {
                fakeNotifs.map(({id, time, label, subtitle, Icon}) => (
                    <div key={id} className="notification">
                        <div className="icon-container">
                            <Icon className="icon" />
                        </div>
                        <div className="infos">
                            <div className="notification-label">{label}</div>
                            <div className="notification-subtitle">{subtitle}</div>
                        </div>
                        <div className="time">{time}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default Notifications;