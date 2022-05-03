export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.65, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.65, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '110%',
		transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealOut = {
	initial: { y: 0 },
  enter: { 
    y: '110%',
    transition: { duration: 1.2, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: 0,
		transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scale = {
	initial: { scale: 1.2 },
  enter: { 
    scale: 1,
    transition: { duration: 1.3, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1.2,
		transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] }
	}
}