import React from "react";
import '../Styles/audioplayer.css'

const Progress =({progressBarRef, audioRef, timeProgress, duration, formatTime})=>{
  const handleChange=()=>{
    audioRef.current.currentTime = progressBarRef.current.value;
    const min = progressBarRef.current.min
    const max = progressBarRef.current.max
    const val = progressBarRef.current.value
   
    progressBarRef.current.style.backgroundSize =  (val - min) * 100 / (max - min) + '% 100%'

  }

  // const formatTime = (time) => {
  //   if (time && !isNaN(time)) {
  //     const minutes = Math.floor(time / 60);
  //     const formatMinutes =
  //       minutes < 10 ? `0${minutes}` : `${minutes}`;
  //     const seconds = Math.floor(time % 60);
  //     const formatSeconds =
  //       seconds < 10 ? `0${seconds}` : `${seconds}`;
  //     return `${formatMinutes}:${formatSeconds}`;
  //   }
  //   return '00:00';
  // };

  return (
    <div className='audio-player-input'>
      <span>{formatTime(timeProgress)}</span>
      <input
          type='range'
          ref={progressBarRef}
          min={0}
          defaultValue={0}
          onChange={handleChange}
      />
      <span>{formatTime(duration)}</span>  
    </div>
  )
}

export default Progress

// import React,  { useState, useEffect, useRef, useCallback } from 'react';

// // icons
// import {
//   IoPlayBackSharp,
//   IoPlayForwardSharp,
//   IoPlaySkipBackSharp,
//   IoPlaySkipForwardSharp,
//   IoPlaySharp,
//   IoPauseSharp,
// } from 'react-icons/io5';

// const Controls = ({audioRef, progressBarRef, duration, setTimeProgress}) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const repeat = useCallback(() => {
//         const currentTime = audioRef.current.currentTime;
//         setTimeProgress(currentTime);
//         progressBarRef.current.value = currentTime;
//         progressBarRef.current.style.setProperty(
//           '--range-progress',
//           `${(progressBarRef.current.value / duration) * 100}%`
//         );
        
//         playAnimationRef.current = requestAnimationFrame(repeat);
//       }, [] );
//     useEffect(() => {
//         if (isPlaying) {
//             audioRef.current.play();
            
//         } else {
//             audioRef.current.pause();
           
//         }
//             playAnimationRef.current = requestAnimationFrame(repeat);
//         }, [isPlaying, audioRef, repeat]);

//         const togglePlayPause = () => {
//         setIsPlaying((prev) => !prev);
//     };
//     const playAnimationRef = useRef();


  
//   return (
//     <div className="controls-wrapper">
//       <div className="controls">
//         <button>
//           <IoPlaySkipBackSharp />
//         </button>
//         <button>
//           <IoPlayBackSharp />
//         </button>

//         <button onClick={togglePlayPause}>
//           {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
//         </button>
//         <button>
//           <IoPlayForwardSharp />
//         </button>
//         <button>
//           <IoPlaySkipForwardSharp />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Controls