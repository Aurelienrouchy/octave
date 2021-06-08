import React, { useLayoutEffect } from 'react';
import { useHistory, useLocation }from "react-router-dom";

import { formatKM } from './../../utils/string';
import './ArtistsPreview.scss';

import { ReactComponent as YellowStar } from './../../assets/icons/yellow-star.svg';
import { ReactComponent as Star } from './../../assets/icons/star.svg';

const ArtistsPreview = ({ artist }) => {
    const history = useHistory();
    const { state } = useLocation();
    const { url } = artist?.images?.filter(image => image.height === 320)[0] || '';
    const followers = artist?.followers?.total || 0;

    const onClickViewArtistAlbum = event => {
        const {x, y, width, height} = event.target.getBoundingClientRect();
        history.push({
            pathname: '/artists/' + artist.id,
            state: {
                url,
                position: { x, y, width, height },
                artist
            }
        });
    };

    useLayoutEffect(() => {
        if (state !== null) {
            const { y, x, width, height} = state;
            const el = document.documentElement.style;
            el.setProperty('--translate-in', `translate(${-x}px, ${-y}px)`)
            el.setProperty('--width-in',  width + 'px')
            el.setProperty('--height-in',  height + 'px')
        }
        return () => {
            if (state) {
                state.url = null
            }
        };
    }, [state]);

    return (
        <div className="artists-preview" onClick={onClickViewArtistAlbum}>
            <div 
                className={url === (state && state.url) ? 'cover cover-in' : 'cover'}
                style={{
                    background: url ? `url(${url})` : '#f5c9b4',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            ></div>
            <div className="infos">
                <div className="name">{artist.name}</div>
                <div className="followers">Followers: {formatKM(followers)}</div>
                <div className="popularity">
                    <div className="stars">
                    {
                        Array(5).fill(0).map((i, index) => <Star key={index} className="star" fill="#a8b2ce" />)
                    }
                    </div>
                    <div className="stars yellow" style={{width: artist?.popularity + '%'}}>
                    {
                        Array(5).fill(0).map((i, index) => <YellowStar key={index} className="star" />)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistsPreview;