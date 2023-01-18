function saludo(){
    console.log('Hola Mundo');
}
saludo();

function saludo2(){
    return 'Hola mundo';
}
const result = saludo2();
console.log(result);

console.log(saludo2());

function saludo3(){
    return function(){
        return 'Hola3'
    }
}
console.log(saludo3()());

