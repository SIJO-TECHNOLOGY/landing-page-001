'use client'

import { useState } from 'react'

interface FeatureBadgeProps {
  name: string
  shortName: string
  description: string
  tooltip: string
}

export default function FeatureBadge({ name, shortName, description, tooltip }: FeatureBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-800/30 transition-all hover:border-purple-600/60 hover:bg-purple-900/30 hover:scale-105 cursor-pointer">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span className="text-gray-300 text-sm font-medium">{shortName}</span>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 z-50 animate-fadeInUp">
          <div className="bg-gradient-to-br from-purple-900/95 to-purple-900/95 backdrop-blur-lg rounded-xl p-4 border border-purple-700/50 shadow-2xl">
            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-700/50"></div>
            </div>
            
            {/* Content */}
            <div className="relative">
              <h3 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                {name}
              </h3>
              <p className="text-purple-300 text-xs font-medium mb-2">{description}</p>
              <p className="text-gray-300 text-xs leading-relaxed italic">"{tooltip}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

