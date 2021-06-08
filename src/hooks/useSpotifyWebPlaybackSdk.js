import { useState, useEffect, useCallback, useRef } from 'react';

export function useSpotifyWebPlaybackSdk({
    name,
    token,
    accountError = () => ({}),
    onReady = () => ({}),
    onPlayerStateChanged = () => ({}),
}) {
    const [isReady, setIsReady] = useState(false);
    const [deviceId, setDeviceId] = useState('');
    const playerRef = useRef(null);

    useEffect(() => {
        if (window.Spotify) {
            playerRef.current = new window.Spotify.Player({
                name,
                getOAuthToken: cb => cb(token),
            });
            setIsReady(true);
        }
    }, [token, name]);

    const handleReady = useCallback(({ device_id: readyDeviceId }) => {
        setDeviceId(readyDeviceId);

        if (onReady) {
            onReady(deviceId);
        }
    }, [deviceId, onReady]);

    useEffect(() => {
        if (isReady) {
            playerRef.current.connect();
        }
    }, [isReady]);

    useEffect(() => {
        const player = playerRef.current;
        if (isReady) {
            player.addListener('account_error', accountError);
            player.addListener('ready', handleReady);
            player.addListener('initialization_error', accountError);
            player.addListener('authentication_error', accountError);
            player.addListener('not_ready', accountError);
            player.addListener('player_state_changed', onPlayerStateChanged);

            return () => {
            player.removeListener('account_error', accountError);
            player.removeListener('ready', handleReady);
            player.removeListener('player_state_changed', onPlayerStateChanged);
            };
        }

        return;
    }, [isReady, onPlayerStateChanged, accountError, handleReady]);

    return {
        deviceId,
        isReady,
        player: playerRef.current
    };
}