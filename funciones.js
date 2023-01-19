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

function hello3(name){
    return 'Hola ' +  name;
}

console.log(hello3('luis'));
console.log(hello3());

function agregar(x,y){
    return x+y;
}

console.log(agregar());
console.log(agregar(5,4));

function agregar2(x,y){
    if(y === undefined){
        y=0;
    }else if(x === undefined){
        x=0;
    }else if(x=== undefined && y===undefined){
        return 0;
    }

    return x + y;
}

function agregar3(x, y=1, z=2){
    return x + y * z;
}

console.log(agregar3(5));

function sumar(){
    return 3 + 4; 
}

const suma = () => 3+4;

console.log(sumar());
console.log(suma());

function f1(x){
    return "Hola soy: "+ x;
}

const f1a = x => "Hola soy: "+x;

console.log(f1("Cristobal"));
console.log(f1a("Mariano"));

function factorial(n){
    if (n==0 || n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

function factorial2(n){
    i=1;
    fact = 1;

    while(i<=n){
        fact*=i;
        i++;
    }
    
    return fact;
}

const f=n=>{
    i=1;
    fact = 1;

    while(i<=n){
        fact*=i;
        i++;
    }
    
    return fact;
}
const valor = numero => (numero%2 ==0)?'Numero par' : 'Numero impar'

console.log(factorial(4));
console.log(factorial2(4));
console.log(f(4));
console.log(valor(8));


