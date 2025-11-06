//

let mudou = false

function mudarCor(){
    if(mudou === false) {
        document.body.style.backgroundColor ="red"
        mudou = true // agora mudou a cor
    }
    else{
        document.body.style.backgroundColor ="white"
        mudou = false
        
    }
}