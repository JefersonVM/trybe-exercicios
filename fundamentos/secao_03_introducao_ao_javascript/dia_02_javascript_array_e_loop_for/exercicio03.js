let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroImpar = 0

for(let i = 0; i < numbers.length;i += 1){
    if(numbers[i] % 2 !== 0){

         numeroImpar += 1;

    }
}

if (numeroImpar === 0){
    console.log("Nenhum valor ímpar encontrado.")
} else {
    console.log(numeroImpar)
}