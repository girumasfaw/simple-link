
import { useState } from "react"

const useDrag = (startingPosition: any) => {
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: startingPosition,
    lastTranslation: startingPosition,
  })

  const { isDragging } = dragInfo
  const handleMouseDown = ({ clientX, clientY }: any) => {
    if (!isDragging)
      setDragInfo({
        ...dragInfo,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      })
  }

  const handleMouseMove = ({ clientX, clientY }: any) => {
    if (isDragging) {
      const { origin, lastTranslation } = dragInfo
      setDragInfo({
        ...dragInfo,
        translation: {
          x: Math.abs(clientX - (origin.x + lastTranslation.x)),
          y: Math.abs(clientY - (origin.y + lastTranslation.y)),
        },
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      const { translation } = dragInfo
      setDragInfo({
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      })
    }
  }

  const blockPosition = {
    right: `${dragInfo.translation.x}px`,
    bottom: `${dragInfo.translation.y}px`,
  }

  return {
    blockPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
}

export default useDrag