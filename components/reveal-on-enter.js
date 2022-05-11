import { m } from 'framer-motion'

export default function RevealOnEnter({ children, duration, className, delay, once }) {
  return(
    <div className={`relative overflow-hidden ${className}`}>
      <m.div
        initial="none"
        whileInView="block"
        viewport={{ once: once ? false : true, margin: '50px' }}
        transition={{ duration: duration ? duration : 0.5, ease: [0.83, 0, 0.17, 1], delay: delay ? delay : 0 }}
        className="w-full"
        variants={{
          block: { y: 0 },
          none: { y: '100%' }
        }}
      >
        {children}
      </m.div>
    </div>
  )
}