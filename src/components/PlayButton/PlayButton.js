import React from 'react';

import {ReactComponent as PlayIcon} from './../../assets/icons/play-button.svg'
import './PlayButton.scss';

const PlayButton = ({ className = '', onClick }) => {
    return (
        <div className={`play ${className}`} {...{onClick}}>
            <PlayIcon fill="#fa7c03" className="icon" />
        </div>
    );
}

export default PlayButton;