/*document.getElementById('boton').onclick = ()=>{
    console.log('capturamos el evento mediante ID');
    document.getElementById('demo').innerHTML = 'Cambiamos algo mediante js'
}

document.addEventListener('click', function () {
    console.log('Esto aparece gracia a un EventListener')
    document.getElementById('demo').innerHTML = 'Cambiamos algo mediante js'
})
*/
document.getElementById('boton').addEventListener('click', function () {
    console.log('Esto aparece gracia a un EventListener')
    document.getElementById('demo').innerHTML = 'Cambiamos algo mediante js'
})

document.getElementById('boton_color').addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'
})

document.getElementById('boton_default_color').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue'
})

const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = 'darkgreen';
}

document.getElementById('sumar').addEventListener('click', function () {
    let numeroA = document.getElementById('nro1').value;
    let numeroB = document.getElementById('nro2').value;
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

const sumar = (a,b)=>{
    return a+b;
}