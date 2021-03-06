import {ReactComponent as Add} from './../../assets/icons/add.svg';
import {ReactComponent as Album} from './../../assets/icons/album.svg';
import {ReactComponent as Compass} from './../../assets/icons/compass.svg';
import {ReactComponent as Clock} from './../../assets/icons/clock.svg';
import {ReactComponent as Search} from './../../assets/icons/search.svg';
import {ReactComponent as Folder} from './../../assets/icons/folder.svg';
import {ReactComponent as Heart} from './../../assets/icons/heart.svg';
import {ReactComponent as Home} from './../../assets/icons/home.svg';
import {ReactComponent as Logout} from './../../assets/icons/logout.svg';
import {ReactComponent as Playlist} from './../../assets/icons/playlist.svg';
import {ReactComponent as Settings} from './../../assets/icons/settings.svg';
import {ReactComponent as User} from './../../assets/icons/user.svg';

const mainMenuCfg = [{
        id: 1,
        label: 'menu',
        subtitles: [{
            label: 'home',
            path: 'dashboard',
            Icon: Home,
            disabled: false
        }, {
            label: 'search',
            path: 'search',
            Icon: Search,
            disabled: true
        }, {
            label: 'discover',
            path: 'discover',
            Icon: Compass,
            disabled: true
        }, {
            label: 'albums',
            path: 'albums',
            Icon: Album,
            disabled: true
        }, {
            label: 'artists',
            path: 'artists',
            Icon: User,
            disabled: false
        }]
    }, {
        id: 2,
        label: 'library',
        subtitles: [{
            label: 'recent',
            path: 'recent',
            Icon: Clock,
            disabled: true
        }, {
            label: 'favourites',
            path: 'favourites',
            Icon: Heart,
            disabled: true
        }, {
            label: 'local',
            path: 'local',
            Icon: Folder,
            disabled: true
        }]
    }, {
        id: 3,
        label: 'playlist',
        subtitles: [{
            label: 'create new',
            path: 'create new',
            Icon: Add,
            disabled: true
        }, {
            label: 'pop punk',
            path: 'pop punk',
            Icon: Playlist,
            disabled: true
        }, {
            label: 'rock',
            path: 'rock',
            Icon: Playlist,
            disabled: true
        }]
    }, {
        id: 4,
        label: 'general',
        subtitles: [{
            label: 'settings',
            path: 'settings',
            Icon: Settings,
            disabled: true
        }, {
            label: 'log out',
            path: 'log out',
            Icon: Logout,
            disabled: true
        }]
    }, 
]

export const AppState = {
    user: {},
    mainMenuCfg,
    newReleasesAlbums: [],
    currentUserSavedAlbums: [],
    currentUserSavedTracks: [],
    inputValueArtistsSearch: '',
};
