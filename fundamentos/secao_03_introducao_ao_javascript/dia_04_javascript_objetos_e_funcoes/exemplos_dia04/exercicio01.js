let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo


//No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.

//Utiliza-se colchetes ou invés de ponto nos dias da semanas.