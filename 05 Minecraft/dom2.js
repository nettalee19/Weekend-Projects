let refresh = document.querySelector(".refresh")
refresh.addEventListener("click", ()=> window.location.reload())

let world = document.querySelector("#world")
let tile = document.querySelector(".tile")
//tile = false

let dirt = document.querySelector(".dirt")
//let sky = document.querySelector(".sky")
//let ground = document.querySelector(".ground")

let tools = document.querySelector(".tools")
let shovel = document.querySelector(".shovel")
let axe = document.querySelector(".axe")
let pickaxe = document.querySelector(".pickaxe")
tools = [shovel, axe, pickaxe]
//shovel.value = false

// let inventory = document.querySelector(".inventory")
// let dirt = document.querySelector(".dirt")
// let wood = document.querySelector(".wood")
// let leaves = document.querySelector(".leaves")
// let rocks = document.querySelector(".rocks")
// inventory = [dirt, wood, leaves, rocks]

let skyTile;
let groudTile;
let treeTile;
let skyMatrix = [[]]
let groundMatrix = [[]]
let treeMatrix = [[]]

const createWorld = () =>{
  for(let i =0; i< 12 ;i++){
    for(let j=0; j< 30; j++){
      
      skyTile = document.createElement('div')
      skyTile.classList.add('skyTile')
      skyTile.classList.add('box')
      skyTile.setAttribute('row', i)
      skyTile.setAttribute('column', j)
      skyMatrix.push([i,j])
      tile.appendChild(skyTile)

    }
  }

  for(let i =12; i< 18 ;i++){
    for(let j=0; j< 30; j++){

      groundTile = document.createElement('div')
      groundTile.classList.add('groundTile')
      groundTile.classList.add('box')
      groundTile.setAttribute('row', i)
      groundTile.setAttribute('column', j)
      groundMatrix.push([i,j])
      tile.appendChild(groundTile)
    }
  }
}
createWorld();


  


//shovel.addEventListener("click", changeTile, false)


// function chooseShovel{
//   if(shovel.value === 'true'){
//     shovel.value = false;
//   }
//   else{
//     shovel.value = true;

//   }
// }

function changeTile (el){
  //if(shovel.value === 'true'){
    el.target.classList.add('skyTile')
    el.target.classList.remove('groundTile')
  //}
}
tile.addEventListener("click", changeTile)




















































// function skyGround(el){
//   if(el.target.classList === 'skyTile'){
//     el.target.classList.add('groundTile')
//     el.target.classList.remove('skyTile')
//   }

//   else if(el.target.classList === 'groundTile'){
//     el.target.classList.remove('groundTile')
//     el.target.classList.add('skyTile')
//   }
// }
// sky.addEventListener("click",skytoGround)
//ground.addEventListener("click",skytoGround)















































// function doOnClick(e){
//   console.log(e.currentTarget.dataset)
// }


// let worldMatrix =[[]]

// const createWorld = () =>{
//   for(let row = 0; row<25; row++){
//     for(let col =0 ; col<25; column++){
//       let box= document.createElement(".div")
//       box.setAttribute("data-row", row)
//       box.setAttribute("data-col", col)
//       box.classList.add("box")

//       box.addEventListener("click", doOnClick)
//     }
//   }
// }