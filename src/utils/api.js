import axios from "axios";
import { store } from './store';

const generateHeader = token => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
})

export const getNewsReleasesAlbums = async params => {
    const { auth } = store.getState();
    const headers = generateHeader(auth.token);
    try {
        const { data } = await axios.get('https://api.spotify.com/v1/browse/new-releases', { params, headers });

        return data;
    } catch (err) {

    }
}

export const getCurrentUserSavedAlbums = async params => {
    const { auth } = store.getState();
    const headers = generateHeader(auth.token);
    try {
        const { data } = await axios.get('https://api.spotify.com/v1/me/albums', { params, headers });

        return data;
    } catch (err) {

    }
}

export const getCurrentUserSavedTracks = async params => {
    const { auth } = store.getState();
    const headers = generateHeader(auth.token);
    try {
        const { data } = await axios.get('https://api.spotify.com/v1/me/tracks', { params, headers });

        return data;
    } catch (err) {

    }
}