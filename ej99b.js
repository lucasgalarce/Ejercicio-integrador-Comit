let arr = [];
let i;
let arr2 = [];
let acum = 0;

for(i = 1; i<200; i++){
    if(!(i%11)){
        arr.push(i);
    }
}
console.log(arr);

let numeros = arr.join('');
console.log(numeros);

for(i = 0; i<numeros.length; i++){
    arr2.push(parseInt(numeros[i]));
}

console.log(arr2);

for(i = 0; i<arr2.length; i++){
    acum += arr2[i]*i;
}

console.log(acum);