import React from 'react';

import PlayButton from './../PlayButton/PlayButton';
import './TrackRow.scss';

const TrackRow = ({ track, index }) => {
    const cover = track?.album?.images?.filter(image => image.height === 300)[0];
    const artistName = track?.album?.artists[0].name || '';
    const dt = new Date(track.duration_ms)
    const duration = {
        m: dt.getMinutes(),
        s: `${dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()}`
    }

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
                <div className="duration">{`${duration.m}:${duration.s}`}</div>
                <PlayButton />
            </div>
        </div>
    );
}

export default TrackRow;