import { useEffect, useState } from 'react'
import './Meteors.css'

interface MeteorsProps {
  number?: number
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)) + 'px',
      animationDelay: Math.random() * 0.6 + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
    }))
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="meteor"
          style={style}
        />
      ))}
    </>
  )
}
