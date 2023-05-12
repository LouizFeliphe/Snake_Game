
function Play(value) {
    
    let player = document.getElementById("player");
    let compu = document.getElementById("computer")
    let label = document.getElementById("winlos");
    let compu1 = Computador();


    if(compu1 == "Rock" && value == "Paper") {
        console.log("acionado")
        player.innerHTML = "Player: Paper"
        compu.innerHTML = "Computer: Rock"
        label.innerHTML = "Player wins"
    }
    
    else if(compu1 == "Rock" && value == "Rock") {
        console.log("acionado")
        player.innerHTML = "Player: Rock"
        compu.innerHTML = "Computer: Rock"
        label.innerHTML = "Draw"
    } 
    
    else if(compu1 == "Rock" && value == "Scissors") {
        console.log("acionado")
        player.innerHTML = "Player: Scissors"
        compu.innerHTML = "Computer: Rock"
        label.innerHTML = "Computer wins"
    } 
    
    else if(compu1 == "Scissors" && value == "Rock") {
        console.log("acionado")
        player.innerHTML = "Player: Rock"
        compu.innerHTML = "Computer: Scissors"
        label.innerHTML = "Player wins"
    } 
    
    else if(compu1 == "Scissors" && value == "Paper") {
        console.log("acionado")
        player.innerHTML = "Player: Paper"
        compu.innerHTML = "Computer: Scissors"
        label.innerHTML = "Computer wins"
    } 
    
    else if(compu1 == "Scissors" && value == "Scissors") {
        console.log("acionado")
        player.innerHTML = "Player: Scissors"
        compu.innerHTML = "Computer: Scissors"
        label.innerHTML = "Draw"
      
    }
    
    else if(compu1 == "Paper" && value == "Scissors") {
        console.log("acionado")
        player.innerHTML = "Player: Scissors"
        compu.innerHTML = "Computer: Paper"
        label.innerHTML = "Player wins"
    }

    else if(compu1 == "Paper" && value == "Paper") {
        console.log("acionado")
        player.innerHTML = "Player : Papel"
        compu.innerHTML = "Computer: Paper"
        label.innerHTML = "Draw"
    }

    else if(compu1 == "Paper" && value == "Rock") {
        console.log("acionado")
        player.innerHTML = "Player: Rock"
        compu.innerHTML = "Computer: Paper"
        label.innerHTML = "Computer wins"
    }

    function Computador() {
        let lista = ["Rock","Paper","Scissors"];
        let numero = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        console.log(numero)
        return lista[numero - 1]
    }
    
}

