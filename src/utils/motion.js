export const fadeout = {
  initial: { 
    scale: 2,
  },
  enter: {
    scale: 1,
    transition: {
      delay: 1000,
    }
  } 
};


export const fadein = {
  initial:{
    scale: 0.5,
  },
  enter:{
    scale: 1.0,
    transition: {
      delay: 700,
    },
  }
}

export const navbarfadein = {
  initial:{
    y: 100,
    opacity: 0,
    },
    enter:{
    y: 0,
    opacity: 1,
    transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
    mass: 0.5,
    },
  }
}

