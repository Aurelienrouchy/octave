import React, { useLayoutEffect, useState } from 'react';

import { useSpotifyWebPlaybackSdk } from '../../hooks/useSpotifyWebPlaybackSdk';
import { transfertPlayback } from '../../utils/api';
import { useStore } from '../../utils/store';
import './AudioPlayer.scss';
import { timeToString } from '../../utils/string';

import { ReactComponent as PlayIcon } from './../../assets/icons/play-button.svg';
import { ReactComponent as NextPrevIcon } from './../../assets/icons/next-prev.svg';
import { ReactComponent as PauseIcon } from './../../assets/icons/pause.svg';

const AudioPlayer = () => {
    const { token } = useStore('auth');
    const [currentItem, setCurrentItem] = useState(null);
    const [lineWidth, setLineWidth] = useState(0);
    const [progress, setProgress] = useState('');
    const [isPaused, setIsPaused] = useState();
    const [duration, setDuration] = useState('');
    const { isReady, deviceId, player } = useSpotifyWebPlaybackSdk({ name: "Player Web", token });
    const controlers = [{
        Icon: NextPrevIcon,
        func: () => player.previousTrack(),
        className: 'prev'
    }, {
        Icon: isPaused ? PlayIcon : PauseIcon,
        func: () => isPaused ? player.resume() : player.pause(),
        className: 'controlers-play'
    }, {
        Icon: NextPrevIcon,
        func: () => player.nextTrack(),
        className: 'next'
    }];

    useLayoutEffect(() => {
        let interval;
        if (isReady && deviceId) {
            transfertPlayback({device_ids: [ deviceId ]});

            interval = setInterval(async () => {
                const state = await player.getCurrentState();

                if (state) {
                    const { track_window, paused } = state;

                    setLineWidth(state.position / state.duration * 100)
                    setIsPaused(paused);
                    setCurrentItem(track_window.current_track)
                    setDuration( timeToString(state.duration) )
                    setProgress( timeToString(state.position) )
                }
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isReady, deviceId, player]);

    return (
        <div className="audio-player">
            {
                currentItem !== null && (
                    <>
                        <div className="label">Now Playing</div>
                        <div 
                            className="cover" 
                            style={{
                                backgroundImage: `url(${currentItem?.album?.images[0]?.url || ''})`,
                            }}
                        ></div>
                        <div className="infos-container">
                            <div className="infos-title">{ currentItem.name || '' }</div>
                            <div className="infos-artist">{ currentItem.artists[0].name || '' }</div>
                        </div>
                        <div className="time-container">
                            <div className="current-time">{ progress }</div>
                            <div className="cursor-container">
                                <div className="cursor-line" style={{width: lineWidth + '%'}}></div>
                            </div>
                            <div className="total-time">{ duration }</div>
                        </div>
                        <div className="controlers">
                            {
                                controlers.map(({ Icon, func, className }, index) => (
                                    <div key={index} className={'button ' + className} onClick={func}>
                                        <Icon className="icon" fill="#fff"/>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default AudioPlayer;