let btn = document.getElementById("btn")
let title = document.getElementById("title")

let names = ["Ronaldo","Messi","Mbappe","Haaland"]

function clickMe(){
let name_index = parseInt(title.getAttribute('data-index'))
console.log(names[name_index])

    if(name_index == names.length -1){
      title.setAttribute('data-index', name_index +1)
      title.innerHTML = names[name_index +1]

    } else{
      title.setAttribute('data-index', name_index +1)
      title.innerHTML = names[name_index +1]
    }
    

}

btn.addEventListener("click", clickMe)