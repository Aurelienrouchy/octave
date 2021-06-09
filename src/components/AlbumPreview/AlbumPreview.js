import React from 'react';
import { play } from '../../utils/api';

import PlayButton from '../PlayButton/PlayButton';
import './AlbumPreview.scss'

const AlbumPreview = ({ 
    album,
    className = "",
    style = {},
    displayTrackNumber = false,
    displayReleaseDate = false
}) => {
    const cover = album?.images[0];

    return (
        <div className={`album-preview ${className}`} style={style}>
            <div 
                className="cover"
                style={{backgroundImage: `url(${cover.url})`}}
            >
                <PlayButton className="play-button" onClick={() => play({ "context_uri": album.uri})} />
            </div>
            <div className="album-infos">
                <div className="album-name">{ album.name || '' }</div>
                <div className="album-artist">{ album.artists[0]?.name || '' }</div>
                {
                    displayReleaseDate && <div className="album-release-date">{ album.release_date || '' }</div>
                }
                {
                    displayTrackNumber && <div className="album-tracks">{ `${album.total_tracks || 0} tracks`}</div>
                }
            </div>
        </div>
    );
}

export default AlbumPreview;