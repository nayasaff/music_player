import React, {useContext} from 'react'
import { UserContext } from './Home';

export default function Title({audioRef, progressBarRef, setDuration}) {
    const onLoadedMetadata = () => {
        // const seconds = audioRef.current.duration;
        setDuration(30);
        progressBarRef.current.max = 30;
    };
    const {track} = useContext(UserContext)
    return (
        <>
            <img src={require(`../assets/${track.songNumber}.jpg`)} alt="album cover"/>
            <div className='audio-player-title'>
                <h4>{track.name}</h4>
                <p>{track.artist}</p>
                <audio 
                    src={track.track}
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
                ></audio>
            </div>     
        </>
    )
}
