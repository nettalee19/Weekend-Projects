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
shovel.value = 'false';

// let inventory = document.querySelector(".inventory")
//let dirt = document.querySelector(".dirt")
// let wood = document.querySelector(".wood")
// let leaves = document.querySelector(".leaves")
let rocks = document.querySelector(".rocks")
// inventory = [dirt, wood, leaves, rocks]
//dirt.value = 'false';

let skyTile;
let groudTile;
let treeTile;
let rocksTile;
let skyMatrix = [[]]
let groundMatrix = [[]]
let treeMatrix = [[]]
let rocksMatrix = [[]]

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

  for(let i=12; i<13; i++){
    for(let j=10; j<10; j++){
      rocksTile = document.createElement('div')
      rocksTile.classList.add('rocks')
      rocksTile.classList.add('box')
      rocksTile.setAttribute('row', i)
      rocksTile.setAttribute('column', j)
      rocksMatrix.push([i,j])
      tile.appendChild(rocksTile)
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


/*removing a ground tile and exposing sky*/
function changeTileSky (el){
  console.log(el, shovel.value);
  if(shovel.value === true){
    console.log('removing groundtile');
    el.target.classList.add('skyTile')
    el.target.classList.remove('groundTile')
  }
}


function chooseShovel(){
  if(shovel.value === true){
    shovel.value = false;
  }
  else {
    console.log('Choosing Shovel');
    shovel.value = true;
  }
}
world.addEventListener("click", changeTileSky, false)
shovel.addEventListener("click", chooseShovel, false)



/*adding a ground tile*/

function changeTileGround (el){
  console.log(el, shovel.value);
  if(dirt.value === true){
    console.log('removing groundtile');
    el.target.classList.add('groundTile')
    el.target.classList.remove('skyTile')
  }
}

function chooseDirt(){
  if(dirt.value === true){
    dirt.value = false;
  }
  else {
    console.log('Choosing Dirt');
    dirt.value = true;
  }
}
world.addEventListener("click", changeTileGround, false)
dirt.addEventListener("click", chooseDirt, false)






/*adding a rock tile*/

function changeTileRock (el){
  console.log(el, shovel.value);
  if(rocks.value === true){
    console.log('removing groundtile');
    el.target.classList.add('rocksTile')
    el.target.classList.remove('skyTile')
  }
}

function chooseDirt(){
  if(rocks.value === true){
    rocks.value = false;
  }
  else {
    console.log('Choosing rocks');
    rocks.value = true;
  }
}
world.addEventListener("click", changeTileRock, false)
rocks.addEventListener("click", chooseDirt, false)



















