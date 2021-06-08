import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Notifications from '../Notifications/Notifications';

import './Panel.scss';

const Panel = () => {
    return (
        <div className="panel">
            <Notifications />
            <AudioPlayer />
        </div>
    );
}

export default Panel;