let cells = document.querySelectorAll(".cells")

const lista1 = []

const validar = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]


]

const lista2 = ["","","","","","","","",""]


cells.forEach(cell => cell.addEventListener("click",() => {

    if(lista1.includes(Number(cell.dataset.value))) {

      return;

    }

   
    cell.innerHTML = "X"   
    lista1.push(Number(cell.dataset.value));
    lista2[cell.dataset.value - 1] = "X"
    console.log(lista2)
    let compu = computer();
    lista1.push(compu);
    lista2[compu - 1] = "O"
    if(lista1.length > 9) {
      return;
    }
    setTimeout(function() {
      cells[compu - 1].innerHTML = "O"
    },00);
    winner()
    
  
    



}))

function computer() {

      let number;
      if(lista1.length == 9) {
          return;
      }
    do {
      number = Math.floor(Math.random() * 9 + 1
      )
    } while (lista1.includes(number));

    
    return number;

}

function winner(){
  for(let i = 0; i < validar.length; i++) {
    let mothercell = validar[i];
    let cella = lista2[mothercell[0]];
    let cellb = lista2[mothercell[1]];
    let cellc = lista2[mothercell[2]];

    
    if(cella == "" || cellb == "" || cellc == "") {
      continue;
    }

    if(cellb == cella & cella == cellc) {
      console.log("oola")
      break
    }

   
    
    
  }

}



