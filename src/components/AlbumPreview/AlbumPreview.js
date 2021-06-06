import React from 'react';

import PlayButton from './../PlayButton/PlayButton';
import './AlbumPreview.scss'

const AlbumPreview = ({ album }) => {
    const cover = album?.images?.filter(image => image.height === 300)[0];
    
    return (
        <div className="album-preview">
            <div className="cover" style={{background: `url(${cover.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <PlayButton className="play-button" />
            </div>
            <div className="album-infos">
                <div className="album-name">{ album.name || '' }</div>
                <div className="album-artist">{ album.artists[0]?.name || '' }</div>
            </div>
        </div>
    );
}

export default AlbumPreview;