import { useMemo } from 'react';
import './SquareDeco.scss';

function SquareDeco({ cover }) {
    const { delay } = useMemo(() => ({delay: Math.random() * 100}), [])
    return (
        <div className="square-deco">
            <img src={cover.src} className="home-cover is-animated" alt="cover album" style={{animationDelay: delay + 's'}}/>
        </div>
    );
}

export default SquareDeco;
