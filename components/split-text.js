import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        className="inline-block overflow-hidden"
      >
        <motion.div
          {...rest}
          className="inline-block"
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}
