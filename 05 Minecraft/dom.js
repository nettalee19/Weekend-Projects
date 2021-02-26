let nav = document.querySelector("#nav-bar")

let world = document.querySelector("#world")
let worldWidth = parseInt(window.getComputedStyle(world).width)
let worldHeight = parseInt(window.getComputedStyle(world).height)

let sky = document.querySelector(".sky")
let ground = document.querySelector(".ground")







let skyTile;
let skyMatrix = [[]]
const createSky = () =>{
  for(let i =0; i< 12 ;i++){ //worldHeight/27
    //for(let j=0; j< worldWidth/27; j++){
    for(let j=0; j< 30; j++){
      
      skyTile = document.createElement('div')
      skyTile.classList.add('skyTile')
      skyTile.classList.add('box')
      skyTile.setAttribute('row', i)
      skyTile.setAttribute('column', j)
      skyMatrix.push([i,j])
      sky.appendChild(skyTile)
    }
  }
}
createSky();


let shovel = document.querySelector(".shovel")

let groundTile;
let groundMatrix = [[]]
const createGround = () =>{
  for(let i =12; i< 18 ;i++){
    for(let j=0; j< 30; j++){
    //for(let j=0; j< worldWidth/27; j++){
      
      groundTile = document.createElement('div')
      groundTile.classList.add('groundTile')
      groundTile.classList.add('box')
      groundTile.setAttribute('row', i)
      groundTile.setAttribute('column', j)
      groundMatrix.push([i,j])
      ground.appendChild(groundTile)

    
      // groundTile.addEventListener("click", (el) => {
      //     el.target.classList.remove('groundTile')
      //     el.target.classList.add('skyTile')
      //     console.log(el.target) 
      // })
      
      shovel.addEventListener("click", ()=> {
        groundTile.addEventListener("click", (el) => {
          el.target.classList.remove('groundTile')
          el.target.classList.add('skyTile')
          console.log(el.target) 
        })
      })

    }
  }
  

  
  

}
createGround();







// shovel.addEventListener('click', () =>{
//   //shovel.classList.add('box')
//   // if(groundTile && groundTile.target.class = 'ground'){
//   //   groundTile.addEventListener("click", ()=>{
      
//   //   })
//   // }
//   ground.addEventListener('click', (groundTile) => {
//     ground.classList.remove('groundTile')
//     ground.classList.add('skyTile')
//   })
// })




























//height:fit-content; container div

// sky.addEventListener('click' => {
//   sky.classList.remove('sky')
//   sky.classList.add('ground')
// })


// let treeM = []

// for(let i =13; i< 16 ;i++){
//   for(let j=20; j< 22; j++){
    
//     let tree = document.createElement('div')
//     tree.classList.add('tree')
//     tree.classList.add('box')
//     tree.setAttribute('row', i)
//     tree.setAttribute('column', j)
//     treeM.push([i,j])
//     world.appendChild(tree)
//     //console.log(sky)
    
//   }
// }



