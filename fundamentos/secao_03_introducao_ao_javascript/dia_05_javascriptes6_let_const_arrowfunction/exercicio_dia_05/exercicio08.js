let speed = 120;
const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
    
);   
  

console.log(speedCar(speed));