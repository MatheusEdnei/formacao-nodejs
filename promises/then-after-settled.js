const p = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(100), 2000) // Vai resolver com o valor 100 após 2s
  })
  
  // Criamos o handler, após 2s ele vai printar "100"
  p.then((resultado) => console.log(resultado))
  
  // Depois de 4s vamos adicionar um outro handler
  // Este handler multiplica o valor retornado por 20
  setTimeout(() => p.then(result => console.log(result * 20)), 4000) // Vamos ter uma saída "2000"