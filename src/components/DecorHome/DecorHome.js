import { useMemo, useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { randomIntFromInterval } from '../../utils/number';
import './DecorHome.scss';
import SquareDeco from './../SquareDeco/SquareDeco';

const coversCfg = [
    { id: 1, src: require('./../../assets/images/1.webp').default},
    { id: 2, src: require('./../../assets/images/2.webp').default},
    { id: 3, src: require('./../../assets/images/3.webp').default},
    { id: 4, src: require('./../../assets/images/4.webp').default},
    { id: 5, src: require('./../../assets/images/5.webp').default},
    { id: 6, src: require('./../../assets/images/6.webp').default},
    { id: 7, src: require('./../../assets/images/7.webp').default},
    { id: 8, src: require('./../../assets/images/8.webp').default},
    { id: 9, src: require('./../../assets/images/9.webp').default},
    { id: 10, src: require('./../../assets/images/10.webp').default},
    { id: 11, src: require('./../../assets/images/11.webp').default},
    { id: 12, src: require('./../../assets/images/12.webp').default},
    { id: 13, src: require('./../../assets/images/13.webp').default},
    { id: 14, src: require('./../../assets/images/14.webp').default},
    { id: 15, src: require('./../../assets/images/15.webp').default},
    { id: 16, src: require('./../../assets/images/16.webp').default},
    { id: 17, src: require('./../../assets/images/17.webp').default},
    { id: 18, src: require('./../../assets/images/18.webp').default},
    { id: 19, src: require('./../../assets/images/19.webp').default},
    { id: 20, src: require('./../../assets/images/20.webp').default},
];
  
function DecorHome() {
    const size = useWindowSize();
    const [position, setPosition] = useState({x: 0, y: 0});

    const onMouseMove = e => setPosition({x: e.clientX, y: e.clientY});

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        return () => document.removeEventListener("mousemove", onMouseMove);;
    });
     
    const {
        Covers
    } = useMemo(() => {
        const nbDecoOnHeight = Math.round(size.height / ( size.width / 20 ));
        const Covers = Array(nbDecoOnHeight * 10)
                .fill(0)
                .map((n, i) => <SquareDeco key={i} cover={coversCfg[randomIntFromInterval(0, 19)]} />)

        return {
            Covers
        }
    }, [size.height, size.width])

    return (
    <div className="decor-home">
            <div
                className="selector" 
                style={{transform: `translate(${position.x}px, ${position.y}px)`}}
            ></div>
            {
                Covers
            }
        </div>
    );
}

export default DecorHome;