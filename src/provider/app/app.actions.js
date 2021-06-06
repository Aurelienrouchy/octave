import {
	UPDATE_USER,
	UPDATE_NEW_RELEASES_ALBUMS,
	UPDATE_CURRENT_USER_SAVED_ALBUMS,
	UPDATE_CURRENT_USER_SAVED_TRACKS
} from './app.type';
import { store } from '../../utils/store';

export const updateUser = user => store.dispatch({
	type: UPDATE_USER,
	payload: user,
});

export const updateNewReleasesAlbums = albums => store.dispatch({
	type: UPDATE_NEW_RELEASES_ALBUMS,
	payload: albums,
});

export const updateCurrentUserSavedAlbums = albums => store.dispatch({
	type: UPDATE_CURRENT_USER_SAVED_ALBUMS,
	payload: albums,
});

export const updateCurrentUserSavedTracks = albums => store.dispatch({
	type: UPDATE_CURRENT_USER_SAVED_TRACKS,
	payload: albums,
});