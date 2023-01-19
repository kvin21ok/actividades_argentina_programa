//break corta el ciclo si la condicion se cumple

let y = 10;

for (x; x > 0; x--){

    if (x == 5){
        break;
    }
    console.log('El valor de x es: '+x)
}


//continue ignora el ciclo cuando se cumple la condicion y sigue adelante

let x = 10;

for (x; x > 0; x--){

    if (x == 5){
        continue;
    }
    console.log('El valor de x es: '+x)
}