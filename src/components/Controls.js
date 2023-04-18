import React, { useCallback, useEffect, useRef, useContext } from 'react'
import '../Styles/audioplayer.css'
import { UserContext } from './Home';
import songs from '../data/music.json'

export default function Controls({audioRef, progressBarRef,setTimeProgress}) {
  const {track, setTrack,isPlaying, setIsPlaying} = useContext(UserContext)
  const playAnimationRef = useRef();
  
  const togglePlayPause=()=>{
    setIsPlaying((prev) => !prev);
  }
  const repeat = useCallback(() => {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      const min = progressBarRef.current.min
      const max = progressBarRef.current.max
      const val = progressBarRef.current.value
     
      progressBarRef.current.style.backgroundSize =  (val - min) * 100 / (max - min) + '% 100%'
      
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [])

  useEffect(() => {
    if (isPlaying) {
        audioRef.current.play();
    
    } else {
        audioRef.current.pause();
    }
   
    playAnimationRef.current = requestAnimationFrame(repeat);
    
  }, [isPlaying, audioRef, repeat, track]);


  const nextTrack =()=>{
    setTrack(()=>{
      return songs.find(val => val.songNumber === track.songNumber +1 )
    })
  }

  const prevTrack =()=>{
    setTrack(()=>{
      return songs.find(val => val.songNumber === track.songNumber -1 )
    })
  } 
  return (
    <div className='audio-player-icons'>
     <i className='gg-play-backwards' onClick={prevTrack}></i>
       {isPlaying && audioRef.current && audioRef.current.currentTime < 30 ? <div className='audio-player-pause'><i className='gg-play-pause' onClick={togglePlayPause}></i></div> : <i className='gg-play-button' onClick={togglePlayPause}></i> }
      <i className='gg-play-forwards' onClick={nextTrack}></i>
    </div>
  )
}
