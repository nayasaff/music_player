import React, {useState, useEffect} from 'react'

function Volume({audioRef}) {

  const [volume, setVolume] = useState(60)
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const handleChange=(e)=>{
    const min = e.target.min
    const max = e.target.max
    const val = e.target.value
   
    e.target.style.backgroundSize =  (val - min) * 100 / (max - min) + '% 100%'
    setVolume(e.target.value)
  }
  return (
    <div>
        <input
            type='range'
            min={0}
            max={100}
            value={volume}
            onChange={(e) => handleChange(e) }
        />
    </div>
  )
}

export default Volume
