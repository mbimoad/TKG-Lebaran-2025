const cars = document.querySelector('.cars1'); 
const cars2 = document.querySelector('.cars2'); 
const firstSlide = document.querySelector('.first-slide'); 
const secondSlide = document.querySelector('.second-slide'); 
const thirdSlide = document.querySelector('.third-slide'); 
const moon = document.querySelector('.moons'); 
const goku = document.querySelector('.goku'); 
const ig = document.querySelector('.ig'); 
const logo = document.querySelector('.logo'); 
const center = document.querySelector('.center');
let x    = 0; 
let x2    = 3; 
let curr = 0; 
let goup = true; 
let goup2 = true; 
let inc2 = 2;

document.body.addEventListener('mousewheel', function(e) {
    if(e.deltaY > 0) {
      scrollDown(2);
    } else {
      scrollUp(2)
    }
})


// Untuk touch event (Android / Perangkat Sentuh)
let touchStartY = 0;
window.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;  // Mencatat posisi awal sentuhan
});

window.addEventListener('touchend', function(event) {
    const touchEndY = event.changedTouches[0].clientY;  // Posisi akhir sentuhan
    if (touchEndY < touchStartY) {
      scrollDown(15);
    } else if (touchEndY > touchStartY) {
      scrollUp(15)
    }
});


function scrollUp(inc) {
  if(curr <= 0) curr = 0 
  else {
    if(window.innerWidth <= 550) {
      curr--;
    } else {
      curr-=1;
    }
  }
  manipulateCars(inc);
  manipulateCars2(inc2);
  manipulateElement(curr);
}

function scrollDown(inc) {
  if(curr >= (startPosition3 + 50)) {
    curr = (startPosition3 + 50);
  } else {
    if(window.innerWidth <= 550) {
      curr+=1;
    } else {
      curr++;
    }
  }
  
  manipulateCars(inc);
  manipulateCars2(inc2);
  manipulateElement(curr);
}

function scrollDown2(inc) {
  if(curr >= (startPosition3 + 50)) {
    curr = (startPosition3 + 50);
  } else {
    if(window.innerWidth <= 550) {
      curr+=1;
    } else {
      curr++;
    }
  }
  
  manipulateCars(inc);
  manipulateCars2(inc2);
  manipulateElement(curr);
}

function scrollUp2(inc) {
  if(curr <= 0) curr = 0 
  else {
    if(window.innerWidth <= 550) {
      curr--;
    } else {
      curr-=2;
    }
  }
  manipulateCars(inc);
  manipulateCars2(inc2);
  manipulateElement(curr);
}



const scrollauto = document.querySelector('.scrollauto');
const reverseauto = document.querySelector('.reverseauto'); 

// const audiotoggle = document.querySelector('.audiotoggle'); 
// const audio = document.querySelector('audio'); 
// let autoplay = true; 
// audiotoggle.addEventListener('click', function() {
//     if(autoplay) audio.pause(); 
//     else audio.play(); 

//     autoplay = !autoplay; 
// }) 

let scrolldown = undefined;
let intervalTime = window.innerWidth <= 550 ? 50 : 100; 
const autoScroll = () => {
    reverseauto.checked = false; 
    clearInterval(scrolldown)
    
    if(scrollauto.checked) {
      scrolldown = setInterval(() => {
        if(window.innerWidth <= 550) {
          scrollDown2(1);
        } else {
          scrollDown(1);
        }
      }, intervalTime);
    } else {
      clearInterval(scrolldown)
  }
}



scrollauto.addEventListener('input', function(e) {
  autoScroll(); 
})

if(scrollauto.checked) autoScroll(); 



reverseauto.addEventListener('input', function(e) {
  scrollauto.checked = false;
  clearInterval(scrolldown)


  if(this.checked) {
    scrolldown = setInterval(() => {
      if(window.innerWidth <= 550) {
        scrollUp(1);
      } else {
        scrollUp(1);
      }
    }, intervalTime);
  } else {
    clearInterval(scrolldown)
  }
})


let isContent2load = false; 

// show element

// first Slide
let startPosition  = 75;
let endPosition = 200; 

// Second Slide
let startPosition2 = 201; 
let endPosition2    = 250; 

// Third slide 
let startPosition3 = 300;
let zoomed = startPosition3 - 50; 


const manipulateElement = (curr) => {
    if(curr >= startPosition && curr <= endPosition) {
        document.body.style.setProperty('--opacity', '1');
        firstSlide.classList.add('hide');
        secondSlide.classList.add('show');
        moon.classList.add('sun');
        goku.classList.add('show');
        isContent2load = true; 
    } else if(curr <= startPosition - 1) {
        document.body.style.setProperty('--opacity', '0');
        firstSlide.classList.remove('hide');
        secondSlide.classList.remove('show');
        moon.classList.remove('sun');
        goku.classList.remove('show');
        isContent2load = false; 

        if(curr <= 0) curr = 0
    }


    console.log("curr sekarang " + curr)
    console.log(startPosition2 - 1)
    console.log(endPosition + 1)

    if(curr >= startPosition2 && curr <= endPosition2 && isContent2load) {
        document.body.classList.add('moredark');
        secondSlide.classList.remove('show');
    
        document.body.style.setProperty('--opacity', '0');

        setTimeout(() => {
            thirdSlide.classList.add('show');
        }, 1000);

        setTimeout(() => {
            const images = document.querySelectorAll('.images img');
            images.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, 200 * index);
            })
        }, 2000);
        moon.classList.remove('sun');
        moon.classList.add('night');
        document.querySelector('#fireworks-container').classList.add('show');
    } else if(curr <= startPosition2 - 1 && curr >= startPosition + 1) {
        
        console.log("kesini")
        document.body.classList.remove('moredark');
        secondSlide.classList.add('show');    
        document.body.style.setProperty('--opacity', '1');

        setTimeout(() => {
            thirdSlide.classList.remove('show');
        }, 1000);

        setTimeout(() => {
            const images = document.querySelectorAll('.images img');
            images.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('show');
                }, 200 * index);
            })
        }, 2000);
        moon.classList.add('sun');
        moon.classList.remove('night');
        document.querySelector('#fireworks-container').classList.remove('show');
      
    }

    if(curr >= zoomed) {
      center.classList.add('zoomed'); 
    } else {
      center.classList.remove('zoomed'); 
    }


    if(curr >= (startPosition3 + 50) && isContent2load) {
      ig.classList.add('show');
      logo.classList.add('black');
      curr = (startPosition3 + 50);
      console.log("kesini");

      

    } else if(curr >= endPosition2 + 1 && curr <= (startPosition3 + 50) - 1) {
      ig.classList.remove('show');
      logo.classList.remove('black');
    }

}


const manipulateCars = (inc) => {
    if(x <= 75 && goup) {
        x += inc; 
    } else {
        x -= inc;
        goup = false; 
    }

    if(x <= -10 && !goup) {
        goup = true;
    }
    
    cars.style.transform = `translateX(${x}vw)`;
}


const manipulateCars2 = (inc) => {
  if(x2 <= 75 && goup2) {
      x2 += inc; 
  } else {
      x2 -= inc;
      goup2 = false; 
  }

  if(x2 <= -10 && !goup2) {
      goup2 = true;
  }
  
  cars2.style.transform = `translateX(${x2}vw)`;
}


// ----------------------------------------
// Nothing special but still something :)
// Hope you like it <3
// ----------------------------------------

const fireworksData = [
  //
  // T = 0 ms (Big opener - multiple launches)
  //
  {
      left: '15%',
      color: '#FF4C4C', // Bright Red
      explosionType: 'circle',
      size: 'large',
      launchTime: 0,
  },
  {
      left: '70%',
      color: '#FFD24C', // Bright Gold
      explosionType: 'star',
      size: 'medium',
      launchTime: 0,
  },

  //
  // T = 3,000 ms
  //
  {
      left: '30%',
      color: '#5ECFFF', // Vibrant Light Blue
      explosionType: 'double-spiral',
      size: 'small',
      launchTime: 3000,
  },
  {
      left: '80%',
      color: '#7DFF5E', // Bright Green
      explosionType: 'wave',
      size: 'large',
      launchTime: 3000,
  },

  //
  // T = 6,000 ms (Triple launch)
  //
  {
      left: '25%',
      color: '#C15EFF', // Vivid Purple
      explosionType: 'heart',
      size: 'medium',
      launchTime: 6000,
  },
  {
      left: '50%',
      color: '#FF4CF6', // Magenta
      explosionType: 'swirl',
      size: 'medium',
      launchTime: 6000,
  },
  {
      left: '75%',
      color: '#FFF44C', // Bright Yellow
      explosionType: 'heart',
      size: 'small',
      launchTime: 6000,
  },

  //
  // T = 10,000 ms
  //
  {
      left: '20%',
      color: '#FF964C', // Vivid Orange
      explosionType: 'flower',
      size: 'large',
      launchTime: 10000,
  },
  {
      left: '70%',
      color: '#4CFFB7', // Neon Mint
      explosionType: 'random-burst',
      size: 'small',
      launchTime: 10000,
  },

  //
  // T = 13,000 ms (Triple launch)
  //
  {
      left: '40%',
      color: '#4CDAFF', // Bright Sky Blue
      explosionType: 'random-burst',
      size: 'medium',
      launchTime: 13000,
  },
  {
      left: '60%',
      color: '#F64CFF', // Hot Pink
      explosionType: 'spiral',
      size: 'large',
      launchTime: 13000,
  },
  {
      left: '85%',
      color: '#FF4C7D', // Hot Pinkish Red
      explosionType: 'star',
      size: 'small',
      launchTime: 13000,
  },

  //
  // T = 16,000 ms (Triple launch)
  //
  {
      left: '15%',
      color: '#4CFF4C', // Neon Green
      explosionType: 'triple-star',
      size: 'large',
      launchTime: 16000,
  },
  {
      left: '30%',
      color: '#A14CFF', // Neon Purple
      explosionType: 'random-burst',
      size: 'medium',
      launchTime: 16000,
  },
  {
      left: '80%',
      color: '#FFB74C', // Light Orange
      explosionType: 'circle',
      size: 'small',
      launchTime: 16000,
  },

  //
  // T = 20,000 ms (Triple launch)
  //
  {
      left: '25%',
      color: '#FF4C4C', // Bright Red
      explosionType: 'flower',
      size: 'small',
      launchTime: 20000,
  },
  {
      left: '50%',
      color: '#FFD24C', // Bright Gold
      explosionType: 'heart',
      size: 'medium',
      launchTime: 20000,
  },
  {
      left: '75%',
      color: '#5ECFFF', // Vibrant Light Blue
      explosionType: 'ring-of-rings',
      size: 'large',
      launchTime: 20000,
  },

  //
  // T = 23,000 ms (Triple launch)
  //
  {
      left: '10%',
      color: '#7DFF5E', // Bright Green
      explosionType: 'random-burst',
      size: 'small',
      launchTime: 23000,
  },
  {
      left: '40%',
      color: '#C15EFF', // Vivid Purple
      explosionType: 'spiral',
      size: 'medium',
      launchTime: 23000,
  },
  {
      left: '90%',
      color: '#FF4CF6', // Magenta
      explosionType: 'swirl',
      size: 'large',
      launchTime: 23000,
  },

  //
  // T = 26,000 ms
  //
  {
      left: '20%',
      color: '#FFF44C', // Bright Yellow
      explosionType: 'flurry',
      size: 'large',
      launchTime: 26000,
  },
  {
      left: '75%',
      color: '#FF964C', // Vivid Orange
      explosionType: 'random-burst',
      size: 'medium',
      launchTime: 26000,
  },

  //
  // T = 30,000 ms (Triple launch)
  //
  {
      left: '15%',
      color: '#4CFFB7', // Neon Mint
      explosionType: 'wave',
      size: 'small',
      launchTime: 30000,
  },
  {
      left: '60%',
      color: '#4CDAFF', // Bright Sky Blue
      explosionType: 'triple-star',
      size: 'large',
      launchTime: 30000,
  },
  {
      left: '80%',
      color: '#F64CFF', // Hot Pink
      explosionType: 'heart',
      size: 'medium',
      launchTime: 30000,
  },

  //
  // T = 33,000 ms (Triple launch)
  //
  {
      left: '25%',
      color: '#FF4C7D', // Hot Pinkish Red
      explosionType: 'random-burst',
      size: 'medium',
      launchTime: 33000,
  },
  {
      left: '50%',
      color: '#4CFF4C', // Neon Green
      explosionType: 'star',
      size: 'small',
      launchTime: 33000,
  },
  {
      left: '70%',
      color: '#A14CFF', // Neon Purple
      explosionType: 'double-spiral',
      size: 'large',
      launchTime: 33000,
  },

  //
  // T = 37,000 ms (Triple launch)
  //
  {
      left: '15%',
      color: '#FFB74C', // Light Orange
      explosionType: 'flower',
      size: 'medium',
      launchTime: 37000,
  },
  {
      left: '40%',
      color: '#FF4C4C', // Bright Red
      explosionType: 'random-burst',
      size: 'small',
      launchTime: 37000,
  },
  {
      left: '85%',
      color: '#FFD24C', // Bright Gold
      explosionType: 'heart',
      size: 'large',
      launchTime: 37000,
  },

  //
  // T = 40,000 ms (Triple launch)
  //
  {
      left: '10%',
      color: '#5ECFFF', // Vibrant Light Blue
      explosionType: 'ring-of-rings',
      size: 'medium',
      launchTime: 40000,
  },
  {
      left: '45%',
      color: '#7DFF5E', // Bright Green
      explosionType: 'wave',
      size: 'small',
      launchTime: 40000,
  },
  {
      left: '80%',
      color: '#C15EFF', // Vivid Purple
      explosionType: 'spiral',
      size: 'large',
      launchTime: 40000,
  },

  //
  // T = 43,000 ms
  //
  {
      left: '20%',
      color: '#FF4CF6', // Magenta
      explosionType: 'swirl',
      size: 'medium',
      launchTime: 43000,
  },
  {
      left: '75%',
      color: '#FFF44C', // Bright Yellow
      explosionType: 'flurry',
      size: 'large',
      launchTime: 43000,
  },

  //
  // T = 47,000 ms (Triple launch)
  //
  {
      left: '30%',
      color: '#FF964C', // Vivid Orange
      explosionType: 'double-spiral',
      size: 'large',
      launchTime: 47000,
  },
  {
      left: '70%',
      color: '#4CFFB7', // Neon Mint
      explosionType: 'wave',
      size: 'medium',
      launchTime: 47000,
  },
  {
      left: '50%',
      color: '#4CDAFF', // Bright Sky Blue
      explosionType: 'triple-star',
      size: 'small',
      launchTime: 47000,
  },

  //
  // T = 50,000 ms (Triple launch)
  //
  {
      left: '25%',
      color: '#F64CFF', // Hot Pink
      explosionType: 'heart',
      size: 'medium',
      launchTime: 50000,
  },
  {
      left: '60%',
      color: '#FF4C7D', // Hot Pinkish Red
      explosionType: 'random-burst',
      size: 'large',
      launchTime: 50000,
  },
  {
      left: '85%',
      color: '#4CFF4C', // Neon Green
      explosionType: 'random-burst',
      size: 'small',
      launchTime: 50000,
  },

  //
  // T = 53,000 ms
  //
  {
      left: '10%',
      color: '#A14CFF', // Neon Purple
      explosionType: 'ring-of-rings',
      size: 'large',
      launchTime: 53000,
  },
  {
      left: '40%',
      color: '#FFB74C', // Light Orange
      explosionType: 'circle',
      size: 'small',
      launchTime: 53000,
  },

  //
  // T = 56,000 ms
  //
  {
      left: '15%',
      color: '#FF4C4C', // Bright Red
      explosionType: 'spiral',
      size: 'small',
      launchTime: 56000,
  },
  {
      left: '75%',
      color: '#FFD24C', // Bright Gold
      explosionType: 'flurry',
      size: 'medium',
      launchTime: 56000,
  },

  //
  // T = 59,000 ms (Triple launch)
  //
  {
      left: '20%',
      color: '#5ECFFF', // Vibrant Light Blue
      explosionType: 'triple-star',
      size: 'medium',
      launchTime: 59000,
  },
  {
      left: '50%',
      color: '#7DFF5E', // Bright Green
      explosionType: 'wave',
      size: 'large',
      launchTime: 59000,
  },
  {
      left: '80%',
      color: '#C15EFF', // Vivid Purple
      explosionType: 'double-spiral',
      size: 'small',
      launchTime: 59000,
  },

  //
  // T = 62,000 ms (Grand Finale: a huge barrage of large effects!)
  //
  {
      left: '10%',
      color: '#FF4CF6', // Magenta
      explosionType: 'random-burst',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '25%',
      color: '#FFF44C', // Bright Yellow
      explosionType: 'ring-of-rings',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '40%',
      color: '#FF964C', // Vivid Orange
      explosionType: 'triple-star',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '55%',
      color: '#4CFFB7', // Neon Mint
      explosionType: 'heart',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '70%',
      color: '#4CDAFF', // Bright Sky Blue
      explosionType: 'double-spiral',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '85%',
      color: '#F64CFF', // Hot Pink
      explosionType: 'star',
      size: 'large',
      launchTime: 62000,
  },
  {
      left: '95%',
      color: '#FF4C7D', // Hot Pinkish Red
      explosionType: 'flurry',
      size: 'large',
      launchTime: 62000,
  },
  // add more if you want
];

// -------------------------
// MAIN LOGIC
// -------------------------
document.addEventListener('DOMContentLoaded', function() {
// Create container
const container = document.createElement('div');
container.id = 'fireworks-container';
document.body.appendChild(container);

// Launch each firework at its scheduled time
fireworksData.forEach((data) => {
  setTimeout(() => {
    launchRocket(container, data);
  }, data.launchTime);
});

// Calculate the maximum launch time + schedule grand finale
const maxLaunchTime = Math.max(...fireworksData.map((d) => d.launchTime));
const finaleTime = maxLaunchTime + 4000; // 4s after last rocket

setTimeout(() => {
  launchGrandFinaleRocket(container);
}, finaleTime);
});

// -------------------------
// 3) Normal Rocket + Explosion
// -------------------------
function launchRocket(container, { left, color, explosionType, size }) {
// Create rocket element
const rocketEl = document.createElement('div');
rocketEl.className = 'firework-rocket';
rocketEl.style.left = left;

const rocketInner = document.createElement('div');
rocketInner.className = 'firework-rocket-inner';
rocketInner.style.backgroundColor = color;
rocketEl.appendChild(rocketInner);
container.appendChild(rocketEl);

// Random apex between 40vh and 80vh
const apex = 40 + Math.random() * 40;
// Random travel time between 1500 and 2000 ms
const travelTime = 1500 + Math.random() * 500;

// Animate rocket going up
rocketEl.animate(
  [
    { transform: 'translate(-50%, 0)' },
    { transform: `translate(-50%, -${apex}vh)` },
  ],
  {
    duration: travelTime,
    easing: 'ease-out',
    fill: 'forwards',
  }
);

// Create rocket sparks in an interval
const trailInterval = setInterval(() => {
  createSpark(container, rocketEl, color);
}, 60);

// Explode after reaching apex
setTimeout(() => {
  clearInterval(trailInterval);
  explode(container, rocketEl, color, explosionType, size);
}, travelTime);
}

function explode(container, rocketEl, color, explosionType, size) {
// Get rocket position
const rect = rocketEl.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;
rocketEl.remove();

// Determine how many fragments
let fragmentCount;
if (size === 'small') fragmentCount = 30;
else if (size === 'large') fragmentCount = 80;
else fragmentCount = 50;

// Get pattern
const pattern = getExplosionPattern(explosionType);

// Create explosion fragments
for (let i = 0; i < fragmentCount; i++) {
  const angle = pattern.angles && pattern.angles.length
    ? pattern.angles[i % pattern.angles.length]
    : Math.random() * 2 * Math.PI;

  const magnitude = pattern.magnitude && pattern.magnitude.length
    ? pattern.magnitude[i % pattern.magnitude.length]
    : 1;

  createFragment(container, centerX, centerY, color, angle, size, magnitude);
}
}

function createFragment(container, x, y, color, angle, size, magnitude) {
const fragment = document.createElement('div');
fragment.className = 'firework-fragment';
fragment.style.backgroundColor = color;
fragment.style.left = `${x}px`;
fragment.style.top = `${y}px`;
container.appendChild(fragment);

// Speed based on size
const baseVelocity = size === 'small' ? 2 : size === 'large' ? 4 : 3;
const velocity = baseVelocity * magnitude;
const offsetX = Math.cos(angle) * velocity * 100;
const offsetY = Math.sin(angle) * velocity * 100;
const duration = 2000 + Math.random() * 800;

fragment.animate(
  [
    { transform: 'translate(0,0) scale(1)', opacity: 1 },
    { transform: `translate(${offsetX}px, ${offsetY}px) scale(0.3)`, opacity: 0 },
  ],
  {
    duration,
    easing: 'ease-out',
    fill: 'forwards',
  }
);

setTimeout(() => {
  fragment.remove();
}, duration + 100);
}

// --------------------------------------------
// 4) Explosion Patterns (including 15 new ones)
// --------------------------------------------
function getExplosionPattern(type) {
// Original "circle" pattern
if (type === 'circle') {
  const angles = Array.from({ length: 30 }, (_, i) => (i / 30) * 2 * Math.PI);
  return { angles };
}

// Original "star" pattern
if (type === 'star') {
  const angles = [];
  for (let i = 0; i < 15; i++) {
    angles.push((i / 15) * 2 * Math.PI);
    angles.push(((i + 0.2) / 15) * 2 * Math.PI);
  }
  return { angles };
}

// -------------------------------------------------------------------
// 15 NEW PATTERNS:
// -------------------------------------------------------------------
if (type === 'double-spiral') {
  const angles = [];
  for (let i = 0; i < 40; i++) {
    angles.push((i / 10) * Math.PI);
  }
  const magnitude = angles.map((val, idx) => (idx % 2 === 0 ? 1 : 2));
  return { angles, magnitude };
}

if (type === 'cross') {
  const baseAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  const repeated = [];
  const repeats = 10;
  for (let r = 0; r < repeats; r++) {
    repeated.push(...baseAngles);
  }
  return { angles: repeated };
}

if (type === 'swirl') {
  const angles = [];
  for (let i = 0; i < 60; i++) {
    angles.push(i * 0.2);
  }
  const magnitude = angles.map((_, i) => 0.5 + i * 0.05);
  return { angles, magnitude };
}

if (type === 'flower') {
  const angles = [];
  const magnitude = [];
  for (let i = 0; i < 36; i++) {
    angles.push((2 * Math.PI * i) / 36);
    magnitude.push(i % 2 === 0 ? 1.2 : 0.7);
  }
  return { angles, magnitude };
}

if (type === 'heart') {
  const angles = [];
  for (let i = 0; i < 50; i++) {
    // parametric approximation for a heart shape
    const t = (i / 25) * Math.PI;
    angles.push(t);
  }
  const magnitude = angles.map(() => 1 + Math.random() * 1);
  return { angles, magnitude };
}

if (type === 'ring-of-rings') {
  const angles = [];
  const magnitude = [];
  for (let ring = 1; ring <= 3; ring++) {
    for (let i = 0; i < 20; i++) {
      angles.push((2 * Math.PI * i) / 20);
      magnitude.push(ring);
    }
  }
  return { angles, magnitude };
}

if (type === 'diamond') {
  const baseAngles = [
    Math.PI / 4,
    (3 * Math.PI) / 4,
    (5 * Math.PI) / 4,
    (7 * Math.PI) / 4,
  ];
  const angles = [];
  for (let i = 0; i < 10; i++) {
    angles.push(...baseAngles);
  }
  return { angles };
}

if (type === 'hexagon') {
  const angles = [];
  const baseAngles = [
    0,
    Math.PI / 3,
    (2 * Math.PI) / 3,
    Math.PI,
    (4 * Math.PI) / 3,
    (5 * Math.PI) / 3,
  ];
  for (let i = 0; i < 10; i++) {
    angles.push(...baseAngles);
  }
  return { angles };
}

if (type === 'spiral') {
  const angles = [];
  for (let i = 0; i < 50; i++) {
    angles.push(i * 0.3);
  }
  const magnitude = angles.map((_, i) => 0.4 + i * 0.1);
  return { angles, magnitude };
}

if (type === 'flurry') {
  const angles = Array.from({ length: 60 }, () => Math.random() * 2 * Math.PI);
  const magnitude = angles.map(() => 0.5 + Math.random() * 1.5);
  return { angles, magnitude };
}

if (type === 'triple-star') {
  const angles = [];
  for (let s = 0; s < 3; s++) {
    for (let i = 0; i < 15; i++) {
      angles.push((i / 15) * 2 * Math.PI);
      angles.push(((i + 0.2) / 15) * 2 * Math.PI);
    }
  }
  return { angles };
}

if (type === 'random-burst') {
  const angles = Array.from({ length: 50 }, () => Math.random() * 2 * Math.PI);
  const magnitude = Array.from({ length: 50 }, () => 0.5 + Math.random() * 2);
  return { angles, magnitude };
}

if (type === 'wave') {
  const angles = [];
  const magnitude = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * 2 * Math.PI;
    angles.push(a);
    magnitude.push(1 + Math.sin(a * 4));
  }
  return { angles, magnitude };
}

// Default random scatter if none is recognized
const angles = Array.from({ length: 30 }, () => Math.random() * 2 * Math.PI);
const magnitude = Array.from({ length: 30 }, () => 0.5 + Math.random() * 1.5);
return { angles, magnitude };
}

// -------------------------
// 5) Finale Rocket + Explosion
// -------------------------
function launchGrandFinaleRocket(container) {
const left = '50%';
const color = '#FFFFFF';

const rocketEl = document.createElement('div');
rocketEl.className = 'firework-rocket';
rocketEl.style.left = left;

const rocketInner = document.createElement('div');
rocketInner.className = 'firework-rocket-inner';
rocketInner.style.backgroundColor = color;
rocketEl.appendChild(rocketInner);
container.appendChild(rocketEl);

// Slight arc
const driftX = (Math.random() - 0.5) * 40;
const travelTime = 2200;
rocketEl.animate(
  [
    { offset: 0,   transform: 'translate(-50%, 0)' },
    { offset: 0.3, transform: `translate(calc(-50% + ${driftX / 2}px), -20vh)` },
    { offset: 0.6, transform: `translate(calc(-50% + ${driftX}px), -45vh)` },
    { offset: 1,   transform: 'translate(-50%, -70vh)' },
  ],
  {
    duration: travelTime,
    easing: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)',
    fill: 'forwards',
  }
);

const trailInterval = setInterval(() => {
  createSpark(container, rocketEl, color);
}, 60);

setTimeout(() => {
  clearInterval(trailInterval);
  bigSlowExplosion(container, rocketEl);
}, travelTime);
}

function createSpark(container, rocketEl, color) {
const rect = rocketEl.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

const spark = document.createElement('div');
spark.className = 'firework-spark';
spark.style.backgroundColor = color;
spark.style.left = `${centerX}px`;
spark.style.top = `${centerY}px`;
container.appendChild(spark);

spark.animate(
  [
    { transform: 'translate(0,0)', opacity: 1 },
    { transform: 'translate(0, 15px)', opacity: 0 },
  ],
  {
    duration: 500,
    easing: 'ease-out',
    fill: 'forwards',
  }
);

setTimeout(() => {
  spark.remove();
}, 600);
}

// -------------------------
// 6) "Slow" & Long Finale Boom
// -------------------------
function bigSlowExplosion(container, rocketEl) {
const rect = rocketEl.getBoundingClientRect();
const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;
rocketEl.remove();

// Increase fragment count + bigger radius
const fragmentCount = 500;

for (let i = 0; i < fragmentCount; i++) {
  const angle = Math.random() * 2 * Math.PI;
  // Large radius: 300 - 700
  const radius = 300 + Math.random() * 400;
  // Big downward drift: 700 - 1200
  const rainDistance = 700 + Math.random() * 500;

  const targetX = Math.cos(angle) * radius;
  const targetY = Math.sin(angle) * radius;

  const fragment = document.createElement('div');
  fragment.className = 'firework-fragment';
  fragment.style.backgroundColor = '#FFFFFF';
  fragment.style.left = `${centerX}px`;
  fragment.style.top = `${centerY}px`;
  fragment.style.width = '3px';
  fragment.style.height = '3px';
  fragment.style.borderRadius = '50%';
  container.appendChild(fragment);

  // Very slow: 12 - 18 seconds
  const animDuration = 12000 + Math.random() * 6000;

  // Optional rotations (set to 0 for simplicity)
  const rotateStart = 0;
  const rotateEnd = 0;

  fragment.animate(
    [
      // 0%: start
      {
        offset: 0,
        transform: `translate(0,0) scale(0) rotate(${rotateStart}deg)`,
        opacity: 0,
      },
      // 10%: big "boom"
      {
        offset: 0.1,
        transform: `translate(${targetX * 0.8}px, ${targetY * 0.8}px)
                    scale(2) rotate(${rotateStart}deg)`,
        opacity: 1,
      },
      // 20%: full radius
      {
        offset: 0.2,
        transform: `translate(${targetX}px, ${targetY}px)
                    scale(1.7) rotate(${rotateEnd}deg)`,
        opacity: 1,
      },
      // 35%: drifting downward
      {
        offset: 0.35,
        transform: `translate(${targetX}px, ${targetY + rainDistance * 0.1}px)
                    scale(1.3) rotate(${rotateEnd}deg)`,
        opacity: 0.95,
      },
      // 50%
      {
        offset: 0.5,
        transform: `translate(${targetX}px, ${targetY + rainDistance * 0.3}px)
                    scale(1.1) rotate(${rotateEnd}deg)`,
        opacity: 0.8,
      },
      // 65%
      {
        offset: 0.65,
        transform: `translate(${targetX}px, ${targetY + rainDistance * 0.55}px)
                    scale(0.9) rotate(${rotateEnd}deg)`,
        opacity: 0.6,
      },
      // 80%
      {
        offset: 0.8,
        transform: `translate(${targetX}px, ${targetY + rainDistance * 0.8}px)
                    scale(0.8) rotate(${rotateEnd}deg)`,
        opacity: 0.3,
      },
      // 100%: end
      {
        offset: 1,
        transform: `translate(${targetX}px, ${targetY + rainDistance}px)
                    scale(0.6) rotate(${rotateEnd}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: animDuration,
      easing: 'cubic-bezier(0.25, 0.5, 0.25, 1)',
      fill: 'forwards',
    }
  );

  setTimeout(() => {
    fragment.remove();
  }, animDuration + 500);
}
}

let teams = [
  "friagustam",
  "elizre",
  "mayus29",
  "rezabayupamungkas",
  "asnur653",
  "qiarman",
  "ok_jhoon",
  "sitinj_rk",
  "prayogaep",
  "iwanms1",
  "asyidiqkurnia",
  "dax_bageur88",
  "hasanbadriawan",
  "asep15saepudin",
  "dkxxviii",
  "odhnurzaman",
  "mbimoad",
  "andhikaaulia_",
  "mochhend22",
  "adistydyvaa",
  "ajinrz",
  "ghianinur",
  "koni_saputra1",
  "septian179_",
  "rasida",
  "denimartin",
  "rizallblack",
  "enjang",
  "shinnn__4",
  "achmad_mahdum",
  "ggkw02",
  "duy_arul",
  "mr.sianturi",
  "mr.sianturi",
  "amsharidwan",
  "hasanbadriawan",
  "eginugrahaa__",
  "aarfndy_",
  "satia_adhi",
  "amsharidwan", 
]

const teamEl = (item) => {
  return `<div class="team">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8307 4.17773 21.2242 4.78247 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2242 19.2175 20.8307 19.8223 20.322 20.322C19.8223 20.8307 19.2175 21.2242 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94L15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2433 22.0026 9.51353 21.9949 8.784 21.977L8.59 21.971C8.35261 21.962 8.11528 21.9517 7.878 21.94C6.814 21.89 6.088 21.722 5.45 21.475C4.78283 21.2241 4.17845 20.8306 3.679 20.322C3.16995 19.8224 2.77611 19.2176 2.525 18.55C2.278 17.913 2.11 17.187 2.06 16.122L2.03 15.41L2.025 15.216C2.00657 14.4868 1.99824 13.7574 2 13.028V10.972C1.99724 10.2426 2.00457 9.5132 2.022 8.784L2.029 8.59C2.037 8.365 2.047 8.144 2.059 7.878C2.109 6.813 2.277 6.088 2.524 5.45C2.7757 4.7822 3.17023 4.17744 3.68 3.678C4.17916 3.16955 4.78319 2.77607 5.45 2.525C6.088 2.278 6.813 2.11 7.878 2.06C8.144 2.048 8.366 2.038 8.59 2.03L8.784 2.024C9.5132 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52679 9.40215 7 10.6739 7 12C7 13.3261 7.52679 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 9C12.394 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8428 9.5998 14.1215 9.87833C14.4001 10.1569 14.6211 10.4875 14.772 10.8515C14.9228 11.2154 15.0004 11.6055 15.0005 11.9995C15.0006 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1222 14.121C13.8436 14.3996 13.513 14.6206 13.149 14.7714C12.7851 14.9223 12.395 14.9999 12.001 15C11.2054 15 10.4423 14.6839 9.87968 14.1213C9.31707 13.5587 9.001 12.7956 9.001 12C9.001 11.2044 9.31707 10.4413 9.87968 9.87868C10.4423 9.31607 11.2054 9 12.001 9M17.251 5.5C16.9195 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9195 8 17.251 8C17.5825 8 17.9005 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9005 5.6317 17.5825 5.5 17.251 5.5Z" fill="black"/>
                </svg>
                <span>@${item}</span>    
            </div>`;
}



let el = ""; 
teams.forEach(item => {
  el += teamEl(item);
  console.log(el)
  document.querySelector('.teams').innerHTML = el;
})