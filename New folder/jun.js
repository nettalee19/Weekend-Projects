

function chooseTool{
  switch (tools) {
    case shovel:
      tile.addEventListener("click", changeTile)
      break;
    case axe:
      el.target.classList.add('groundTile')
      el.target.classList.remove('skyTile')
      break;
    case pickaxe:
      el.target.classList.remove('groundTile')
      el.target.classList.add('skyTile')
      break;
    default:
      //console.log(`Sorry, we are out of ${expr}.`);
  }

}

tools.addEventListener("click", chooseTool)


//tile.addEventListener("click", changeTile(), false)
//shovel.addEventListener("click", chooseShovel(), false)

//shovel.addEventListener("click", changeTile)
//tile.addEventListener("click", changeTile)


// inventory = [dirt, wood, leaves, rocks]
function chooseInventory{
  switch (tools) {
    case dirt:
      tile.addEventListener("click", changeTile)
      break;
    case wood:
      tile.addEventListener("click", changeTile)
      break;
    case leaves:
      tile.addEventListener("click", changeTile)
      break;
    case rocks:
      tile.addEventListener("click", changeTile)
      break;
    default:
      //console.log(`Sorry, we are out of ${expr}.`);
  }

}

inventory.addEventListener("click", chooseInventory)








//tree

 // for(let i=11; i<13 ; i++){
  //   for(let j=19; j<19; j++){
  //     treeTile = document.createElement('div')
  //     treeTile.classList.add('treeTile')
  //     treeTile.classList.add('box')
  //     treeTile.setAttribute('row', i)
  //     treeTile.setAttribute('column', j)
  //     treeMatrix.push([i,j])
  //     tile.appendChild(treeTile)
  //   }
  // }




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















// function toSky(el){
//   if(el.target.classList = 'groundTile'){
//     el.target.classList.remove('groundTile')
//     el.target.classList.add('skyTile')
//   }
//   else if(el.target.classList = 'groundTile'){
//     el.target.classList.add('groundTile')
//     el.target.classList.remove('skyTile')
//   }
  
// }
// tile.addEventListener("click",toSky)

// function toGround(el){
//   el.target.classList.add('groundTile')
//   el.target.classList.remove('skyTile')
// }
// tile.addEventListener("click",toGround)











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