import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { login } from '../../provider/auth/auth.actions';
import { updateUser } from '../../provider/app/app.actions';
import DecorHome from '../../components/DecorHome/DecorHome';

import './LandingPage.scss';

function LandingPage() {
    const history = useHistory();

    async function loginWithSpotify() {
        const REDIRECT_URL = 'http:%2F%2Flocalhost:3000%2F';
        const CLIENT_ID = '86f92445fb8f4db9aa21620f913caf0b';
        const RESPONSE_TYPE = 'token';
        const STATE = '9265390w54685';
        const SCOPE = 'ugc-image-upload user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private';
    
        const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}&state=${STATE}`;
    
        const popup = window.open(
            url,
            'Login with Spotify',
            'width=500,height=600'
        );
    
        window.spotifyCallback = async token => {
            popup.close();
    
            const { data } = await axios.get(
                'https://api.spotify.com/v1/me', 
                { 
                    headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (data) {
                login(token);
                updateUser(data);
    
                history.push('./dashboard')
            }
        }
    };

    useEffect(() => {
        const token = window.location.hash.substr(1).split('&')[0].split("=")[1]
        if (token) {
            window.opener.spotifyCallback(token);
        }
    }, []);

    return (
        <div className="landingpage">
            {/* { loading && <div className="loading">LOADIN...</div>} */}
            <div className="logo">LOGO</div>
            <div className="main">
                <div className="infos-container">
                    <div className="title">Playing the Mood.</div>
                    <div className="subtitle">Let the music take you away</div>
                    <div className="button" onClick={() => loginWithSpotify()}>Login with Spotify</div>
                </div>
                <DecorHome />
            </div>
        </div>
    );
}

export default LandingPage;
