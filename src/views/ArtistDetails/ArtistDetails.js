import React, { useLayoutEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AlbumPreview from '../../components/AlbumPreview/AlbumPreview';

import { ReactComponent as Arrow } from './../../assets/icons/arrow.svg';
import { getArtistAlbums } from './../../utils/api';
import './ArtistDetails.scss';

const ArtistDetails = (props) => {
    const [albums, setAlbums] = useState([]);
    const history = useHistory();
    const coverRef = useRef();
    const { 
        state: { 
            url,
            position: { width, height, x, y },
            artist
        }
    } = useLocation();

    useLayoutEffect(() => {
        const el = document.documentElement.style;
        el.setProperty('--translate', `translate(${x - width - (width * 0.1)}px, ${y}px)`)
        el.setProperty('--width',  width + 'px')
        el.setProperty('--height',  height + 'px')
    }, [width, height, x, y]);

    const onClickBack = (event) => {
        const el = coverRef.current.getBoundingClientRect();
        history.push({
            pathname: '/artists',
            state: {
                url,
                x: x - el.x,
                y: y  - el.y,
                width: el.width,
                height: el.height,
            }
        });
    };

    useLayoutEffect(() => {
        (async () => {
            const res = await getArtistAlbums(artist.id);
            setAlbums(res.items)
        })()
    }, [artist]);

    return (
        <div className="artist-details">
             <div 
                className="cover-artist-details" 
                ref={coverRef}
                style={{
                    background: url ? `url(${url})` : '#f5c9b4',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="button-back" onClick={onClickBack}>
                    <Arrow className="arrow-icon" />
                </div>
                <div className="artist-name">{artist.name}</div>
            </div>
            <div className="artist-albums-label">Albums</div>
            <div className="artist-albums-container">
            {
                albums.map((album => (
                    <AlbumPreview 
                        key={album.id}
                        album={album}
                        displayTrackNumber={true}
                        displayReleaseDate={true}
                    />
                )))
            }
            </div>
        </div>
    );
}

export default ArtistDetails;