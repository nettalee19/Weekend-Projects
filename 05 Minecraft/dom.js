let nav = document.querySelector("#nav-bar")

let world = document.querySelector("#world")
let worldWidth = parseInt(window.getComputedStyle(world).width)
let worldHeight = parseInt(window.getComputedStyle(world).height)

//height:fit-content; container div

let skyMatrix = [[]]
//const createSky = () =>{
  for(let i =0; i< 16 ;i++){ //worldHeight/27
    for(let j=0; j< worldWidth/27; j++){
      
      let sky = document.createElement('div')
      sky.classList.add('sky')
      sky.classList.add('box')
      sky.setAttribute('row', i)
      sky.setAttribute('column', j)
      skyMatrix.push([i,j])
      world.appendChild(sky)
      //console.log(sky)
      
    }
  }
//}

let groundMatrix = [[]]

for(let i =16; i< worldHeight/27 ;i++){
  for(let j=0; j< worldWidth/27; j++){
    
    let ground = document.createElement('div')
    ground.classList.add('ground')
    ground.classList.add('box')
    ground.setAttribute('row', i)
    ground.setAttribute('column', j)
    groundMatrix.push([i,j])
    world.appendChild(ground)
    //console.log(sky)
    
  }
}

// groundMatrix[i][j].addEventListener('click', ()=>{
//   ground.classList.remove('ground')
//   //ground.classList.add('sky')
// })

let treeM = []

for(let i =13; i< 16 ;i++){
  for(let j=20; j< 22; j++){
    
    let tree = document.createElement('div')
    tree.classList.add('tree')
    ground.classList.add('box')
    ground.setAttribute('row', i)
    ground.setAttribute('column', j)
    groundMatrix.push([i,j])
    world.appendChild(tree)
    //console.log(sky)
    
  }
}