let i;
let acum = 0;
let contPares = 0;

for(i = 0; i<10000; i++){
    if(!(i%2)){
        acum += i;
    console.log(acum);
    contPares++;
        if(contPares == 10){
            break;
        }
    }
}