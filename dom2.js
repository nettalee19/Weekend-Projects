let refresh = document.querySelector(".refresh")
refresh.addEventListener("click", ()=> window.location.reload())

let world = document.querySelector("#world")
let tile = document.querySelector(".tile")
//tile = false

let dirt = document.querySelector(".dirt")
//let sky = document.querySelector(".sky")
//let ground = document.querySelector(".ground")

//let tools = document.querySelector(".tools")
let shovel = document.querySelector(".shovel")
shovel.value = 'false';

let axe = document.querySelector(".axe")
axe.value = 'false';

let pickaxe = document.querySelector(".pickaxe")
pickaxe.value = 'false';
//tools = [shovel, axe, pickaxe]

// let inventory = document.querySelector(".inventory")
//let dirt = document.querySelector(".dirt")
let rocks = document.querySelector(".rocks")
rocks.value = 'false';

let wood = document.querySelector(".wood")
wood.value = 'false';

let leaves = document.querySelector(".leaves")
leaves.value = 'false';
// inventory = [dirt, wood, leaves, rocks]
//dirt.value = 'false';

let skyTile;
let groudTile;
let woodTile;
let rocksTile;
let leavesTile;

let skyMatrix = [[]]
let groundMatrix = [[]]
let woodMatrix = [[]]
let rocksMatrix = [[]]
let leavesMatrix = [[]]

const createWorld = () =>{
  /*sky*/
  for(let i =0; i< 10 ;i++){
    for(let j=0; j< 20; j++){
      
      skyTile = document.createElement('div')
      skyTile.classList.add('skyTile')
      skyTile.classList.add('box')
      skyTile.setAttribute('row', i)
      skyTile.setAttribute('column', j)
      skyMatrix.push([i,j])
      tile.appendChild(skyTile)

    }
  }
  /*rocks*/
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

  /*wood*/
  for(let i=10; i<13; i++){
    for(let j=10; j<10; j++){
      woodTile = document.createElement('div')
      woodTile.classList.add('wood')
      woodTile.classList.add('box')
      skyTile.classList.remove('sky')
      woodTile.setAttribute('row', i)
      woodTile.setAttribute('column', j)
      woodMatrix.push([i,j])
      tile.appendChild(woodTile)
    }
  }

  /*leaves*/
  for(let i=15; i<16; i++){
    for(let j=10; j<10; j++){
      leavesTile = document.createElement('div')
      leavesTile.classList.add('leaves')
      leavesTile.classList.add('box')
      leavesTile.setAttribute('row', i)
      leavesTile.setAttribute('column', j)
      leavesMatrix.push([i,j])
      tile.appendChild(leavesTile)
    }
  }

  /*ground*/
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












/* 1     removing a ground tile and exposing sky*/
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



/*  2    adding a ground tile*/

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






/* 3    adding a rock tile*/

function changeTileRock (el){
  console.log(el, shovel.value);
  if(rocks.value === true){
    console.log('adding rock');
    el.target.classList.add('rocksTile')
    el.target.classList.remove('skyTile')
  }
}

function chooseRock(){
  if(rocks.value === true){
    rocks.value = false;
  }
  else {
    console.log('Choosing rocks');
    rocks.value = true;
  }
}
world.addEventListener("click", changeTileRock, false)
rocks.addEventListener("click", chooseRock, false)



/* 4   removing a rock tile and exposing sky*/

function removeTileRock (el){
  console.log(el, pickaxe.value);
  if(pickaxe.value === true){
    console.log('removing rock');
    el.target.classList.add('skyTile')
    el.target.classList.remove('rocksTile')
  }
}

function choosePickaxe(){
  if(pickaxe.value === true){
    pickaxe.value = false;
  }
  else {
    console.log('Choosing pickaxe');
    pickaxe.value = true;
  }
}
world.addEventListener("click", removeTileRock, false)
pickaxe.addEventListener("click", choosePickaxe, false)




/* 5   removing a wood tile and leaves tile and exposing sky*/

function removeTileWoodLeaves (el){
  console.log(el, axe.value);
  if(axe.value === true){
    console.log('removing wood/leave');
    el.target.classList.add('skyTile')
    el.target.classList.remove('woodTile')
    el.target.classList.remove('leavesTile')
  }
}

function chooseAxe(){
  if(axe.value === true){
    axe.value = false;
  }
  else {
    console.log('Choosing axe');
    axe.value = true;
  }
}
world.addEventListener("click", removeTileWoodLeaves, false)
axe.addEventListener("click", chooseAxe, false)




/* 6  adding wood tile*/

function addWood (el){
  console.log(el, wood.value);
  if(wood.value === true){
    console.log('adding wood');
    el.target.classList.remove('skyTile')
    el.target.classList.add('woodTile')
    
  }
}

function chooseWood(){
  if(wood.value === true){
    wood.value = false;
  }
  else {
    console.log('Choosing wood');
    wood.value = true;
  }
}
world.addEventListener("click", addWood, false)
wood.addEventListener("click", chooseWood, false)



/* 7  adding wood tile*/

function addLeaves (el){
  console.log(el, leaves.value);
  if(leaves.value === true){
    console.log('adding leaves');
    el.target.classList.remove('skyTile')
    el.target.classList.add('leavesTile')
    
  }
}

function chooseLeaves(){
  if(leaves.value === true){
    leaves.value = false;
  }
  else {
    console.log('Choosing leaves');
    leaves.value = true;
  }
}
world.addEventListener("click", addLeaves, false)
leaves.addEventListener("click", chooseLeaves, false)



















