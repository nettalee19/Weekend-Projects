let nav = document.querySelector("#nav-bar")

let world = document.querySelector("#world")
let worldWidth = parseInt(window.getComputedStyle(world).width)
let worldHeight = parseInt(window.getComputedStyle(world).height)

//height:fit-content; container div

let skyMatrix = [[]]
//const createSky = () =>{
  for(let i =0; i< worldHeight/27 ;i++){
    for(let j=0; j< worldWidth/27; j++){
      
      let sky = document.createElement('div')
      sky.classList.add('sky')
      sky.setAttribute('row', i)
      sky.setAttribute('column', j)
      skyMatrix.push([i,j])
      world.appendChild(sky)
      //console.log(sky)
      
    }
  }
//}

//todo dfdf
let groundMatrix = [[]]

for(let i =16; i< worldHeight/27 ;i++){
  for(let j=0; j< worldWidth/27; j++){
    
    let ground = document.createElement('div')
    ground.classList.add('ground')
    ground.setAttribute('row', i)
    ground.setAttribute('column', j)
    groundMatrix.push([i,j])
    world.appendChild(ground)
    //console.log(sky)
    
  }
}
