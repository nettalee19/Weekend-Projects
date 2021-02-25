let world = document.querySelector("#world")
let nav = document.querySelector("#nav-bar")

let worldWidth = parseInt(window.getComputedStyle(world).width)
let worldHeight = parseInt(window.getComputedStyle(world).height)



const createSky = () =>{
  for(let i =0; i< worldHeight/20 ;i++){
    for(let j=0; j< worldWidth/20; j++){
      let sky = document.createElement('div')
      sky.classList.add('sky')
      sky.setAttribute('row', i)
      sky.setAttribute('column', j)
      world.appendChild(sky)
      console.log(sky)
    }
  }
}