import React, {useState, useContext, useRef} from 'react'
import '../Styles/audioplayer.css'
import Progress from './Progress'
import Controls from './Controls'
import Title from './Title'
import Volume from './Volume'
import { UserContext } from './Home'

export default function AudioPlayer() {
  const audioRef = useRef()
  const progressBarRef = useRef()
    const [duration ,setDuration] = useState(0)
    const [timeProgress, setTimeProgress] = useState(0)

    const {track} = useContext(UserContext)

    const formatTime = (time) => {
      if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const formatMinutes =
          minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(time % 60);
        const formatSeconds =
          seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatMinutes}:${formatSeconds}`;
      }
      return '00:00';
    };

    return (
      <>
      { track && (<div className='audio-player-container'>
        <div className='audio-player-img'>
          <Title audioRef={audioRef}
            progressBarRef={progressBarRef}
            setDuration={setDuration}
          />
        </div>
        <div className='audio-player-controls'>
            <Progress
              progressBarRef={progressBarRef}
              audioRef={audioRef}
              timeProgress={timeProgress}
              duration={duration}
              formatTime={formatTime}
            />
            <Controls
              audioRef={audioRef}
              progressBarRef={progressBarRef}
              duration={duration}
              setTimeProgress={setTimeProgress}
            />
        </div>
        <div className='audio-player-volume'>
          <Volume audioRef={audioRef}/>
        </div>
      </div>
      )
      }
      {track && (
        <div className='audio-player-mobile'>
          <Progress
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            timeProgress={timeProgress}
            duration={duration}
            formatTime={formatTime}
          />
            <div className='audio-player-mobile-controler'>
              <div className='audio-player-img'>
                  <Title audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    setDuration={setDuration}
                  />
              </div>
              <span>{formatTime(timeProgress)}/{formatTime(duration)}</span>
              
              <Controls
                  audioRef={audioRef}
                  progressBarRef={progressBarRef}
                  duration={duration}
                  setTimeProgress={setTimeProgress}
                />
          </div>
        </div>
        
      )} 
      </>
    );
}

