import React from 'react';
import TrackRow from '../TrackRow/TrackRow';

import './TracksList.scss';

const TracksList = ({ tracks, label }) => {
    return (
        <div className="tracks-list">
            <div className="label">{ label }</div>
            {
                tracks.map((track, index) => <TrackRow index={index} key={track.id} track={track} />)
            }
        </div>
    );
}

export default TracksList;