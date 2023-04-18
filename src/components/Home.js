import React, {useState} from 'react'
import '../Styles/home.css'
import songs from '../data/music.json'
import AudioPlayer from './AudioPlayer';

export const UserContext = React.createContext();

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [track , setTrack] = useState(undefined)
  const settingTrack =(track)=>{
    setTrack(track)
    setIsPlaying(true)
  }
  const song = songs.map(s =>{
    return (
       <div className='home-card' key={s.songNumber}>
          <img src={require(`../assets/${s.songNumber}.jpg`)} onClick={()=>settingTrack(s)} alt="album cover"/>
          <h4>{s.artist}</h4>
          <p>{s.name}</p>
        </div>
    )
  } )
  return (
    <UserContext.Provider value={{track, setTrack , isPlaying, setIsPlaying}}>
      <>
        <div className='home'>
          {song}
        </div>
        <br></br>
        <AudioPlayer/>
      </>
    </UserContext.Provider>
  )
}


