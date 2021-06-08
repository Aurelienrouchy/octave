import axios from "axios";
import { store } from './store';

const generateHeader = token => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
})

export const request = async ({params, url, method = 'get', data}) => {
    const { auth } = store.getState();
    const headers = generateHeader(auth.token);
    try {
        const res = await axios({ method, url, params, data, headers });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getNewsReleasesAlbums = params => request({ params, url: 'https://api.spotify.com/v1/browse/new-releases'});

export const getCurrentUserSavedAlbums = params => request({ params, url: 'https://api.spotify.com/v1/me/albums'});

export const getCurrentUserSavedTracks = params => request({ params, url: 'https://api.spotify.com/v1/me/tracks'});

export const getArtistAlbums = artistId => request({ url: `https://api.spotify.com/v1/artists/${artistId}/albums` })

export const getArtists = name => request({
    params: {
        q: name,
        type: 'artist'
    },
    url: 'https://api.spotify.com/v1/search'
});

export const transfertPlayback = async data => request({ data, url: 'https://api.spotify.com/v1/me/player', method: 'put'});

export const getCurrentPlaying = async params => request({ url: 'https://api.spotify.com/v1/me/player/currently-playing'});

export const play = async data => request({ data, url: 'https://api.spotify.com/v1/me/player/play', method: 'put'});

export const pause = async params => request({ url: 'https://api.spotify.com/v1/me/player/pause', method: 'put'});

export const next = async params => request({ url: 'https://api.spotify.com/v1/me/player/next', method: 'put'});

export const prev = async params => request({ url: 'https://api.spotify.com/v1/me/player/previous', method: 'put'});

export const shuffle = async params => request({ url: 'https://api.spotify.com/v1/me/player/shuffle', method: 'put'});

export const repeat = async params => request({ url: 'https://api.spotify.com/v1/me/player/repeat', method: 'put'});