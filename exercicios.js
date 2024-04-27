function adicao(...numeres){
  resp=0;
  for (const num of numeres) {
     resp+=num;
  }
  return resp;
}

let soma = adicao(10, -10);
console.log(soma);