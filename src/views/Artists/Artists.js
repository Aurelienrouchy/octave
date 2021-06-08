import React, { useState, useEffect } from 'react';
import ArtistsPreview from '../../components/ArtistsPreview/ArtistsPreview';

import { getArtists } from './../../utils/api';
import { useStore } from './../../utils/store';
import { setValueArtistsSearch } from './../../provider/app/app.actions';

import './Artists.scss';

const Artists = () => {
    const { inputValueArtistsSearch } = useStore('app');
    const [artists, setArtists] = useState([]);

    // Useless ?
    // const onKeyPress = ({ key }) => {
    //     if (key === 'Enter') {

    //     }
    // };

    useEffect(() => {
        (async function() {
            if (inputValueArtistsSearch.length > 0) {
                const data = await getArtists(inputValueArtistsSearch);

                if (data && data.artists) {
                    setArtists(data?.artists?.items);
                }
            }
        })()
    }, [inputValueArtistsSearch])

    return (
        <div className="artists">
            <div className="header">
                <div className="label">Artists</div>
                <div className="input-search">
                    <input 
                        type="text" 
                        className="input"
                        value={inputValueArtistsSearch}
                        placeholder="Search for an artist..." 
                        onChange={e => setValueArtistsSearch(e.target.value)}
                        // onKeyPress={onKeyPress}
                    />
                </div>
            </div>
            <div className="artists-list">
            { 
                artists.map((artist => <ArtistsPreview key={artist.id} artist={artist} />))
            }
            </div>
        </div>
    );
}

export default Artists;