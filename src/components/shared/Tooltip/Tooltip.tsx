import React, { useState } from 'react'
import './tooltip.css'

interface TooltipProps {
  text: string
  children: React.ReactNode
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showTooltip = () => setVisible(true)
  const hideTooltip = () => setVisible(false)

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <div className="tooltip-box">{text}</div>}
    </div>
  )
}

export default Tooltip
