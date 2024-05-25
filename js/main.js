//       Torneo de penales vs Messi

//       Preguntar nombre del jugador
//       Elegir si queres atajar o patear
//       Son 5 penales

//       Penales 
//       _______________________
//      |  1                  2 |
//      |                       |
//      |           5           |
//      |  3                  4 |


//      Elegir a donde queres patear/tirarte para atajar
//      La maquina se tira random a uno de esos lugares
//      alert avisandote si metiste/te metieron el gol o no
//      llevar conteo de goles / cantidad de disparos
//      10% chances de patear afuera
//      alert Avisar si ganaste



// let tirarMoneda = prompt("Vamos a tirar la moneda. "+nombre+" ¿Cara o Seca?").toLowerCase

// if (tirarMoneda === "cara") {
    
// }

let nombre = prompt("Nombre jugador").toLowerCase()

let jugadorPateando = 0
let jugadorAtajando = 0
let maquinaPateando = 0
let maquinaAtajando = 0
let fallo = 0

let eleccion = Number(prompt("Elegí: (1) Para patear primero, (2) Para atajar primero"))


if (eleccion == 1) {
    alert("Perfecto, " + nombre + " empezas pateando.")
    alert("Le vas a patear 5 penales seguidos a Messi y despúes Messi te va a patear 5 penales a vos.")

    for (i = 0; i < 5 ; i++) {
        let pateaP1 = Number(prompt("¿A dónde pateas? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        if (isNaN(pateaP1)){
            
        }
        let fallo = (Math.random() < 0.1)
        let atajaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, va a patearrrrr ")
        if (fallo == true){
            alert("Maliiisimo, pateaste afuera.")
            fallo++
        } else if (atajaM1 == pateaP1){
            alert("Te la atajo el mejor del mundo, Lionel Messi.")
            maquinaAtajando++
        } else {
            alert ("Gooooooooool")
            jugadorPateando++
        }
        alert("Marcador: " +nombre + ": " +jugadorPateando+ "/ " + (i+1))
    }

    alert("Fin de la ronda. Metiste: "+jugadorPateando+" goles.")
    if (jugadorPateando <= 2){
        alert("Bastante flojo pateando, vamos a ver si sos mejor atajando")
    } else {
        alert("Bueeena, ahora hay que ver si Messi patea mejor que vos")
    }
    alert("Siguiente ronda: Ahora patea Messi")

    for (i = 0; i < 5 ; i++) {
        let atajaP1 = Number(prompt("¿A dónde te tiras? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        let pateaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, Mmmmmeeeeeeeeeeeeeessssssiiiiiiiiiiiiiiiiiiii...")
        if (pateaM1 == atajaP1){
            alert("Increible pero cierto, le atajaste un penal a Messi.")
            jugadorAtajando++
        } else {
            alert ("Goooooooooooooooooooooooooool del n1 Lionel Andrés Messi")
            maquinaPateando++
        }
        alert("Marcador: Messi: " +maquinaPateando+ "/ " + (i+1))
    }

} else if (eleccion == 2) {
    alert("Biennnn, " + nombre + " empezas atajando.")
    alert("Messi te va a patear 5 penales seguidos y despúes vos le vas a patear 5 penales a él.")
    
    for (i = 0; i < 5 ; i++) {
        let atajaP1 = Number(prompt("¿A dónde te tiras? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        let pateaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, Mmmmmeeeeeeeeeeeeeessssssiiiiiiiiiiiiiiiiiiii...")
        if (pateaM1 == atajaP1){
            alert("Increible pero cierto, le atajaste un penal a Messi.")
            jugadorAtajando++
        } else {
            alert ("Goooooooooooooooooooooooooool del n1 Lionel Andrés Messi")
            maquinaPateando++
        }
        alert("Marcador: Messi: " +maquinaPateando+ "/ " + (i+1))
    }

    alert("Fin de la ronda. Messi metio: "+maquinaPateando+" goles.")
    if (maquinaPateando <= 3){
        alert("Muuuy raro esto, que le hayas atajado tantos penales a Messi es rarisimo.")
    } else {
        alert("Bastaaaante malo atajando, vamos a ver si sabes patear")
    }
    alert("Siguiente ronda: Ahora pateas vos.")

    for (i = 0; i < 5 ; i++) {
        let pateaP1 = Number(prompt("¿A dónde pateas? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        let fallo = (Math.random() < 0.1)
        let atajaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, va a patearrrrr ")
        if (fallo == true){
            alert("Maliiisimo, pateaste afuera.")
            fallo++
        } else if (atajaM1 == pateaP1){
            alert("Te la atajo el mejor del mundo, Lionel Messi.")
            maquinaAtajando++
        } else {
            alert ("Gooooooooool")
            jugadorPateando++
        }
        alert("Marcador: " +nombre + ": " +jugadorPateando+ "/ " + (i+1))
    }
} else {
    alert("Ingrese 1 o 2. (Patear primero o atajar Primero)")
}

if(jugadorPateando == maquinaPateando){
    alert("Empate, vamos a muerte súbita, 1 penal cada uno, empieza " + nombre + " pateando.")
    while (jugadorPateando == maquinaPateando) {
        let pateaP1 = Number(prompt("¿A dónde pateas? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        let fallo = (Math.random() < 0.1)
        let atajaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, va a patearrrrr ")
            if (fallo == true){
                alert("Maliiisimo, pateaste afuera.")
                fallo++
            } else if (atajaM1 == pateaP1){
                alert("Te la atajo el mejor del mundo, Lionel Messi.")
                maquinaAtajando++
            } else {
                alert ("Gooooooooool")
                jugadorPateando++
            }
        alert("Siguiente ronda: Ahora patea Messi")

        let atajaP1 = Number(prompt("¿A dónde te tiras? 1: Angulo superior izquierdo. 2: Angulo superior derecho. 3: Angulo inferior izquierdo. 4: Angulo superior derecho. 5: Centro"))
        let pateaM1 = Math.round(Math.random()*5);
        alert ("Piiiiiiiiiii, Mmmmmeeeeeeeeeeeeeessssssiiiiiiiiiiiiiiiiiiii...")
            if (atajaP1 == pateaM1){
                alert("Increible pero cierto, le atajaste un penal a Messi.")
                jugadorAtajando++
            } else {
                alert ("Goooooooooooooooooooooooooool del n1 Lionel Andrés Messi")
                maquinaPateando++
            }
    }
} 
if (jugadorPateando > maquinaPateando){
    alert("Ganaste! Metiste " + jugadorPateando+ " goles. Bien ahí, le ganaste al mismisimo Messi, que solo hizo: " + maquinaPateando+ " goles.")
} else if (jugadorPateando < maquinaPateando) {
    alert("Era de esperarse, perdiste. Messi hizo: " + maquinaPateando + " goles. Y vos: " +jugadorPateando +"  ") 
} else {
    alert("Camilo arregla este codigo")
}
alert("¿Queres jugar de nuevo? Dale f5")