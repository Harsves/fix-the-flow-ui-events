window.onload = function() {
  
  if ( window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function' ) {
    window.DeviceMotionEvent.requestPermission()
      .then(response => {
        console.log(response);
        if (response === 'granted') {
          startShakeDetection();
        } else {
          console.log('DeviceMotion permissions not granted.')
        }
      })
      .catch(e => {
        console.error(e)
      })
  } else {
    startShakeDetection();
  }

  function startShakeDetection() {


    var myShakeEvent = new Shake({
        threshold: 15
    });

    myShakeEvent.start();


    var btn = document.querySelector('.wrapper')
    window.addEventListener('shake', shakeEventDidOccur, false);


    function shakeEventDidOccur () {

      btn.classList.add("drop");
    }
  }
}

window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
  var portrait = e.matches;
  
  if (portrait) {
      alert("Wow vet cool je bent in portrait")
  } else {
      alert("Super gaaf je bent in landscape")
  } 
})


let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Flip Y
let flipY = document.querySelector('a:nth-of-type(1)')


flipY.addEventListener("click", () => {
  flipY.classList.toggle('flipY')
})

// Flip X
let flipX = document.querySelector('a:nth-of-type(2)')

flipX.addEventListener("click", () => {
  flipX.classList.toggle('flipX')
})

// Color
let color = document.querySelector('a:nth-of-type(3)')

color.addEventListener("click", () => {
  color.classList.toggle('color')
})

// RotateLeft
let rotateL = document.querySelector('a:nth-of-type(4)')

rotateL.addEventListener("click", () => {
  rotateL.classList.toggle('rotateL')
})

// Rotate Right
let rotateR = document.querySelector('a:nth-of-type(5)')

rotateR.addEventListener("click", () => {
  rotateR.classList.toggle('rotateR')
})

// Pulse
let pulse = document.querySelector('a:nth-of-type(6)')

pulse.addEventListener("click", () => {
  pulse.classList.toggle('pulse')
})

// Translate
let translate = document.querySelector('a:nth-of-type(7)')

translate.addEventListener("click", () => {
  translate.classList.toggle('translate')
})

// Disappear
let disappear = document.querySelector('a:nth-of-type(8)')

disappear.addEventListener("click", () => {
  disappear.classList.toggle('disappear')
})

// Replace
let replace = document.querySelector('a:nth-of-type(9)')

replace.addEventListener("click", () => {
  replace.classList.toggle('replace')
})