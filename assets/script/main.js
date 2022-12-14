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

flipY.addEventListener('click', flipYY)
flipY.addEventListener('animationend', flipYY)

function flipYY() {
  flipY.classList.toggle('flipY')
}
// Flip X
let flipX = document.querySelector('a:nth-of-type(2)')

flipX.addEventListener('click', flipXX)
flipX.addEventListener('animationend', flipXX)

function flipXX() {
  flipX.classList.toggle('flipX')
}

// Color
let color = document.querySelector('a:nth-of-type(3)')

color.addEventListener('dblclick', colorF)
color.addEventListener('animationend', colorF)

function colorF() {
  color.classList.toggle('color')
}

// RotateLeft
let rotateL = document.querySelector('a:nth-of-type(4)')

rotateL.addEventListener('click', rotateLF)
rotateL.addEventListener('animationend', rotateLF)

function rotateLF() {
  rotateL.classList.toggle('rotateL')
}

// Rotate Right
let rotateR = document.querySelector('a:nth-of-type(5)')

rotateR.addEventListener('click', rotateRF)
rotateR.addEventListener('animationend', rotateRF)

function rotateRF() {
  rotateR.classList.toggle('rotateR')
}
// Pulse
let pulse = document.querySelector('a:nth-of-type(6)')

pulse.addEventListener('click', pulseF)
pulse.addEventListener('animationend', pulseF)

function pulseF() {
  pulse.classList.toggle('pulse')
}

// Translate
let translate = document.querySelector('a:nth-of-type(7)')

translate.addEventListener('click', translateF)
translate.addEventListener('animationend', translateF)

function translateF() {
  translate.classList.toggle('translate')
}

// Disappear
let disappear = document.querySelector('a:nth-of-type(8)')

disappear.addEventListener('click', disappearF)
disappear.addEventListener('animationend', disappearF)

function disappearF() {
  disappear.classList.toggle('disappear')
}

// Replace
let replace = document.querySelector('a:nth-of-type(9)')

replace.addEventListener('click', replaceF)
replace.addEventListener('animationend', replaceF)

function replaceF() {
  replace.classList.toggle('replace')
}
