function somar(){
    var n1 = Number(document.getElementById("txt1").value)
    var n2 = Number(document.getElementById("txt2").value)
    var resultado = document.getElementsByClassName("res")[0]

    if( n1 == "" && n2 == ""){
        window.alert('campos inavalidos')
    }else{
            var res = n1 + n2
           resultado.innerText = `O resultado é ${res}`
        }
 }
function subtrair(){
    var n1 = Number(document.getElementById("txt1").value)
    var n2 = Number(document.getElementById("txt2").value)
    var resultado = document.getElementsByClassName("res")[0]

    if( n1 == "" && n2 == ""){
        window.alert('campos inavalidos')
    }else{
         var res = n1 - n2
         resultado.innerText = `O resultado é ${res}`
        }
}

function dividir(){
    var n1 = Number(document.getElementById("txt1").value)
    var n2 = Number(document.getElementById("txt2").value)
    var resultado = document.getElementsByClassName("res")[0]
    var res = n1 / n2

    if( n1 == 0 || n2 == 0){

        resultado.innerText = `Impossivel dividir por 0`
    }else{
        resultado.innerText = `O resultado é ${res}`
    }
}
function multiplicar(){
    var n1 = Number(document.getElementById("txt1").value)
    var n2 = Number(document.getElementById("txt2").value)
    var resultado = document.getElementsByClassName("res")[0]
    var res = n1 * n2

    if(n1 == "" || n2==""){
        window.alert("campos invalidos")
    }else{
        resultado.innerText = `O resultado é ${res}`
    }
}
function horas(){
   var relogio = new Date()
   dia = relogio.getDay()
   mes = relogio.getMonth() +1
   ano = relogio.getFullYear()
   h = relogio.getHours()
   m = relogio.getMinutes()
   s = relogio.getSeconds()
   ms = relogio.getMilliseconds()

   txt = window.document.getElementById('data')
   txt2 = window.document.getElementById('hora')

   txt.innerText = `${dia}/${mes}/${ano}`
    txt2.innerText = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
}
setInterval(horas, 1000)
horas()
function maquina(){
    let aleatorio =[0,1,2]

    let escolha = aleatorio[Math.floor(Math.random() * aleatorio.length)];

    let nomeEscolha;
    if (escolha === 0){ nomeEscolha = "Pedra";
    }
    else if (escolha === 1) {nomeEscolha = "Papel";
    }
    else{ nomeEscolha = "Tesoura";
    }
    let ba = document.getElementById("maquina")
}
function pedra(){
    let aleatorio =[0,1,2]
    let escolha = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    let txt1 = document.getElementById("maquina")
    let nomeEscolha;
    let txt2 = document.getElementById('maquina2')
    if (escolha === 0){ nomeescolha = "Pedra";
        txt1.innerText = `A maquina escolheu pedra`
        txt2.innerText = "Empate"
        txt2.style.color = "white"

    }
    else if (escolha === 1) {nomeescolha = "Papel";
        txt1.innerText = `A maquina escolheu papel`
        txt2.innerText = "Você perdeu!"
        txt2.style.color = "red"
    }
    else{ nomeescolha = "Tesoura";
        txt1.innerText = `A maquina escolheu tesoura`
        txt2.innerText = "Você ganhou!"
        txt2.style.color = "Yellow"
    }
}
function papel(){
    let aleatorio =[0,1,2]
    let escolha = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    let txt1 = document.getElementById("maquina")
    let nomeEscolha;
    let txt2 = document.getElementById('maquina2')
    if (escolha === 0){ nomeescolha = "Pedra";
        txt1.innerText = `A maquina escolheu pedra`
        txt2.innerText = "Você ganhou!"
        txt2.style.color = "Yellow"
    }
    else if (escolha === 1) {nomeescolha = "Papel";
        txt1.innerText = `A maquina escolheu papel`
        txt2.innerText = "Empate"
        txt2.style.color = "white"
    }
    else{ nomeescolha = "Tesoura";
        txt1.innerText = `A maquina escolheu tesoura`
        txt2.innerText = "Você perdeu!"
        txt2.style.color = "red"
    }
}
function tesoura(){
    let aleatorio =[0,1,2]
    let escolha = aleatorio[Math.floor(Math.random() * aleatorio.length)];
    let txt1 = document.getElementById("maquina")
    let nomeEscolha;
    let txt2 = document.getElementById('maquina2')
    if (escolha === 0){ nomeescolha = "Pedra";
        txt1.innerText = `A maquina escolheu pedra`
        txt2.innerText = "Você perdeu!"
        txt2.style.color = "red"
    }
    else if (escolha === 1) {nomeescolha = "Papel";
        txt1.innerText = `A maquina escolheu papel`
        txt2.innerText = "Você ganhou!"
        txt2.style.color = "yellow"
    }
    else{ nomeescolha = "Tesoura";
        txt1.innerText = `A maquina escolheu tesoura`
        txt2.innerText = "Empate!"
        txt2.style.color = "white"
    }
}
