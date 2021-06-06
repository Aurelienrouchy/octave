import { AppState } from './app.state';
import { 
    UPDATE_USER,
    UPDATE_NEW_RELEASES_ALBUMS,
    UPDATE_CURRENT_USER_SAVED_ALBUMS,
    UPDATE_CURRENT_USER_SAVED_TRACKS
} from './app.type';

export const AppReducer = (state = AppState, action) => {
    switch (action.type) {
        case UPDATE_USER: {
            return {
                ...state,
                user: { ...action.payload }
            }
        }
        case UPDATE_NEW_RELEASES_ALBUMS: {
            return {
                ...state,
                newReleasesAlbums: [ ...action.payload ]
            }
        }
        case UPDATE_CURRENT_USER_SAVED_ALBUMS: {
            return {
                ...state,
                currentUserSavedAlbums: [ ...action.payload ]
            }
        }
        case UPDATE_CURRENT_USER_SAVED_TRACKS: {
            return {
                ...state,
                currentUserSavedTracks: [ ...action.payload ]
            }
        }
        default:
          return state
    }
};

