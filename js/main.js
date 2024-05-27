//       Torneo de penales vs Messi

//       Son 5 penales
//       Elegir si queres atajar o patear
//       Elegir a donde queres patear/tirarte para atajar
//       Messi se tira/patea random a uno de esos lugares
//       10% chances de patear afuera
//       Penales 
//       _______________________
//      |  1                  2 |
//      |                       |
//      |           5           |
//      |  3                  4 |



function pedir_num(texto, minimo, maximo){
    let num = Number(prompt(texto))
    while (isNaN(num) || num < minimo || num > maximo){
        alert("Por favor ingresa un número valido.")
        num = Number(prompt(texto))
    }
    return num
}

function juego_patear(penales){
    let jugadorPateando = 0
    let maquinaAtajando = 0
    for (i = 0; i < penales ; i++) {
        let pateaP1 = pedir_num("¿A dónde pateas? \n1: Angulo superior izquierdo. \n2: Angulo superior derecho. \n3: Angulo inferior izquierdo. \n4: Angulo inferior derecho. \n5: Centro", 1, 5)
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
    return jugadorPateando
}

function juego_atajar(penales){
    let jugadorAtajando = 0
    let maquinaPateando = 0
    for (i = 0; i < penales ; i++) {
        let atajaP1 = pedir_num("¿A dónde te tiras? \n1: Angulo superior izquierdo. \n2: Angulo superior derecho. \n3: Angulo inferior izquierdo. \n4: Angulo inferior derecho. \n5: Centro", 1, 5)
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
    return maquinaPateando
}

alert("Torneo de penales")
let nombre = prompt("Nombre jugador")

while (true) {
    let jugadorPateando = 0;
    let maquinaPateando = 0;
    let fallo = 0
    let eleccion = pedir_num("Elegí: (1) Para patear primero, (2) Para atajar primero", 1, 2)
    if (eleccion == 1) {
        alert("Perfecto, " + nombre + " empezas pateando.")
        alert("Le vas a patear 5 penales seguidos a Messi y despúes Messi te va a patear 5 penales a vos.")
        
        jugadorPateando = juego_patear(5)
        
        alert("Fin de la ronda. Metiste: "+jugadorPateando+" goles.")
        if (jugadorPateando <= 2){
            alert("Bastante flojo pateando, vamos a ver si sos mejor atajando")
        } else {
            alert("Bueeena, ahora hay que ver si Messi patea mejor que vos")
        }
        alert("Siguiente ronda: Ahora patea Messi")

        maquinaPateando = juego_atajar(5)
    } else if (eleccion == 2) {
        alert("Biennnn, " + nombre + " empezas atajando.")
        alert("Messi te va a patear 5 penales seguidos y despúes vos le vas a patear 5 penales a él.")
    
        maquinaPateando = juego_atajar(5)

        alert("Fin de la ronda. Messi metio: "+maquinaPateando+" goles.")
        if (maquinaPateando <= 3){
            alert("Muuuy raro todo, que le hayas atajado tantos penales a Messi es rarisimo.")
        } else {
            alert("Bastaaaante malo atajando, vamos a ver si sabes patear")
        }
            alert("Siguiente ronda: Ahora pateas vos.")

        jugadorPateando = juego_patear(5)
    } else {
        alert("Ingrese 1 o 2. (Patear primero o atajar Primero)")
    }
    if (jugadorPateando === maquinaPateando) {
        alert("Empate, vamos a muerte súbita, 1 penal cada uno, empieza " + nombre + " pateando.");

        while (jugadorPateando === maquinaPateando) {
            let jugadorGol = juego_patear(1);
            let maquinaGol = juego_atajar(1);
            if (jugadorGol > maquinaGol) {
                jugadorPateando++
                break;
            } else if (jugadorGol < maquinaGol) {
                maquinaPateando++
                break;
            }
        }
    }

    if (jugadorPateando > maquinaPateando){
    alert("Ganaste! Bien ahí, le ganaste al mismisimo Messi.")
    } else if (jugadorPateando < maquinaPateando){
    alert("Era de esperarse, perdiste. Messi es el mejor del mundo.") 
    } else {
        alert("Esto no deberia verse nunca. Por favor comuniquese con servicio técnico.")
    }

    if (confirm("Quieres salir del programa? \nAceptar para salir \nCancelar para volver a empezar")){
        break
    }
}