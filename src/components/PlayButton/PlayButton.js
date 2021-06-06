import React from 'react';

import {ReactComponent as PlayIcon} from './../../assets/icons/play-button.svg'
import './PlayButton.scss';

const PlayButton = ({ className = '' }) => {
    return (
        <div className={`play ${className}`}>
            <PlayIcon fill="#fa7c03" className="icon" />
        </div>
    );
}

export default PlayButton;