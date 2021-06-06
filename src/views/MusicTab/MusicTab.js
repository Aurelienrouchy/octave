import React, { useLayoutEffect } from 'react';
import AlbumsRows from '../../components/AlbumsRows/AlbumsRows';

import {
    getNewsReleasesAlbums,
    getCurrentUserSavedAlbums,
    getCurrentUserSavedTracks
} from './../../utils/api';
import {
    updateNewReleasesAlbums,
    updateCurrentUserSavedAlbums,
    updateCurrentUserSavedTracks
} from './../../provider/app/app.actions';
import { useStore } from './../../utils/store';
import './MusicTab.scss';
import TracksList from '../../components/TracksList/TracksList';

const MusicTab = () => {
    const {
        newReleasesAlbums,
        currentUserSavedAlbums,
        currentUserSavedTracks
    } = useStore('app');

    useLayoutEffect(() => {
        (async function() {
            if (!newReleasesAlbums.length > 0) {
                const newReleasesAlbumsFromServer = await getNewsReleasesAlbums({ limit: 4 });
                const currentUserSavedAlbumsFromServer = await getCurrentUserSavedAlbums({ limit: 4 });
                const tracksList = await getCurrentUserSavedTracks({ limit: 3 });
                
                const savedAlbumsFormated = currentUserSavedAlbumsFromServer?.items.reduce((acc, cur) => [...acc, cur.album], []);
                const tracksListFormated = tracksList?.items.reduce((acc, cur) => [...acc, cur.track], []);

                updateCurrentUserSavedAlbums(savedAlbumsFormated);
                updateNewReleasesAlbums(newReleasesAlbumsFromServer?.albums?.items);
                updateCurrentUserSavedTracks(tracksListFormated);
            }
        })()
    }, [newReleasesAlbums])

    return (
        <div className="music-tab">
            <AlbumsRows label="New Releases" albums={newReleasesAlbums} />
            <AlbumsRows label="Saved Albums" albums={currentUserSavedAlbums} />
            <TracksList tracks={currentUserSavedTracks} />
        </div>
    );
}

export default MusicTab;