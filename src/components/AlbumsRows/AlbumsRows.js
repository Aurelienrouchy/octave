import React from 'react';
import AlbumPreview from '../AlbumPreview/AlbumPreview';

import './AlbumsRows.scss';

const AlbumsRows = ({ label, albums }) => {
    return (
        <div className="albums-row">
            <div className="label">{ label }</div>
            <div className="albums">
            {
                albums.map((album, index) => (
                    <AlbumPreview key={index} album={album} />
                ))
            }
            </div>
        </div>
    );
}

export default AlbumsRows;