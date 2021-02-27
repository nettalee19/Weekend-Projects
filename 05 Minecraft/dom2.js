let world = document.querySelector("#world")
let sky = document.querySelector(".sky")
let ground = document.querySelector(".ground")

let dirt = document.querySelector(".dirt")

let shovel = document.querySelector(".shovel")


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
      sky.appendChild(skyTile)

    }
  }

  // for(let i=11; i<13 ; i++){
  //   for(let j=19; j<19; j++){
  //     treeTile = document.createElement('div')
  //     treeTile.classList.add('treeTile')
  //     treeTile.classList.add('box')
  //     treeTile.setAttribute('row', i)
  //     treeTile.setAttribute('column', j)
  //     treeMatrix.push([i,j])
  //     tree.appendChild(treeTile)
  //   }
  // }

  for(let i =12; i< 18 ;i++){
    for(let j=0; j< 30; j++){

      groundTile = document.createElement('div')
      groundTile.classList.add('groundTile')
      groundTile.classList.add('box')
      groundTile.setAttribute('row', i)
      groundTile.setAttribute('column', j)
      groundMatrix.push([i,j])
      ground.appendChild(groundTile)
    }
  }
}
createWorld();

// function pickTool{

//   switch (tool) {
//     // case 'axe':
//     //   el.target.classList.add('groundTile')
//     //   el.target.classList.remove('skyTile')
//     //   break;
//     // case 'pickaxe':
//     //   el.target.classList.remove('groundTile')
//     //   el.target.classList.add('skyTile')
//     //   break;
//     case 'shovel':
//       el.target.classList.remove('groundTile')
//       el.target.classList.add('skyTile')
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
// }

// tool.addEventListener("click",pickTool)

function toSky(el){
  el.target.classList.remove('groundTile')
  el.target.classList.add('skyTile')
}
ground.addEventListener("click",toSky)

function toGround(el){
  el.target.classList.add('groundTile')
  el.target.classList.remove('skyTile')
}
sky.addEventListener("click",toGround)

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