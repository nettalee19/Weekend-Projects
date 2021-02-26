let world = document.querySelector("#world")

function doOnClick(e){
  console.log(e.currentTarget.dataset)
}


let worldMatrix =[[]]

const createWorld = () =>{
  for(let row = 0; row<25; row++){
    for(let col =0 ; col<25; column++){
      let box= document.createElement(".div")
      box.setAttribute("data-row", row)
      box.setAttribute("data-col", col)
      box.classList.add("box")

      box.addEventListener("click", doOnClick)
    }
  }
}