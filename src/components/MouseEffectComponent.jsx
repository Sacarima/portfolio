import { useState, useEffect } from "react"

const MouseEffectComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
        <div
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 50%)`,
            pointerEvents: 'none',
            }}
      />

      </div>
    )
}