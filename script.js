let btn = document.getElementById("btn")
let title = document.getElementById("title")

let names = ["Ronaldo","Messi","Mbappe","Haaland"]

function clickMe(){
let name_index = parseInt(title.getAttribute('data-index'))
console.log(names[name_index])

    if(name_index == names.length -1){
      title.setAttribute('data-index', 0)
      title.innerHTML = names[0]

    } else{
      title.setAttribute('data-index', name_index +1)
      title.innerHTML = names[name_index +1]
    }
    

}

btn.addEventListener("click", clickMe)


let button = ["Messi","Mbappe","Haaland","Ronaldo"]

function click(){
  let name_index = parseInt(btn.getAttribute('data-index'))
console.log(button[name_index])

    if(name_index == button.length -1){
      btn.setAttribute('data-index', 0)
      btn.innerHTML = button[0]

    } else{
      btn.setAttribute('data-index', name_index +1)
      btn.innerHTML = button[name_index +1]
    }
}

btn.addEventListener("click", click)