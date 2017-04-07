// import $ from 'jquery'
const state = {
  posX: parseInt(window.getComputedStyle(document.getElementById('spaceship')).left),
  posY: parseInt(window.getComputedStyle(document.getElementById('spaceship')).top),
  position: '',
  key: []
}
document.addEventListener('keydown', event => state.key[event.key] = true)
document.addEventListener('keyup', event => state.key[event.key] = false)

const gameLoop = () => {

  const spaceship = document.getElementById('spaceship')

  if (state.key['ArrowLeft']) {
    state.posX >= 0 && (state.posX -= 10)
    spaceship.style.left = `${state.posX}px`
  }
  if (state.key['ArrowRight']) {
    state.posX <= document.body.clientWidth -40 && (state.posX += 10)
    spaceship.style.left = `${state.posX}px`
  }
  if (state.key['ArrowUp']) {
    state.posY >= 0 && (state.posY -= 10)
    spaceship.style.top = `${state.posY}px`
  }
  if (state.key['ArrowDown']) {
    state.posY <= document.body.clientHeight -40 && ( state.posY += 10 )
    spaceship.style.top = `${state.posY}px`
  }


  const moveElementBackground = (element, px, maxHeight) => {
    const background = document.getElementById(element)
    let backgroundPositionY = parseInt(window.getComputedStyle(background).backgroundPositionY)
    const newBackgroundPositionY  = ( backgroundPositionY === maxHeight) ?
    (0 + 'px') : (backgroundPositionY += px) + 'px'
    background.style.backgroundPositionY = newBackgroundPositionY
  }

  moveElementBackground('background', 1, 112)
  moveElementBackground('background-l', 2, 1280)
  moveElementBackground('background-r', 1, 1280)




}
setInterval(gameLoop, 30)
