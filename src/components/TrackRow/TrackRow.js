import React from 'react';

import PlayButton from './../PlayButton/PlayButton';
import { timeToString } from './../../utils/string';
import './TrackRow.scss';
import { play } from '../../utils/api';

const TrackRow = ({ track, index }) => {
    const cover = track?.album?.images[0];
    const artistName = track?.album?.artists[0].name || '';
    const duration = timeToString(track.duration_ms);

    return (
        <div className="track">
            <div className="track-infos-left">
                <div className="track-index">{ index }</div>
                <div className="cover" style={{background: `url(${cover.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                <div className="track-info">
                    <div className="track-title">{track.name || ''}</div>
                    <div className="track-artist">{artistName}</div>
                </div>
            </div>
            <div className="track-infos-right">
                <div className="duration">{duration}</div>
                <PlayButton onClick={() => play({ "uris": [track.uri]})} />
            </div>
        </div>
    );
}

export default TrackRow;