import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function ConfettiEffect({ active = false, duration = 5000, colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"] }) {
    const [showConfetti, setShowConfetti] = useState(active)
    const { width, height } = useWindowSize()

    useEffect(() => {
        let timer
        if (active) {
            setShowConfetti(true)
            timer = setTimeout(() => setShowConfetti(false), duration)
        } else {
            setShowConfetti(false)
        }

        return () => clearTimeout(timer)
    }, [active, duration])

    if (!showConfetti) return null

    return (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={300}
            recycle={false}
            colors={colors}
            gravity={0.2}
            wind={0.01}
            initialVelocityY={10}
            confettiSource={{
                x: width / 2,
                y: height,
                w: 10,
                h: 10
            }}
            tweenDuration={10000}
        />
    )
}