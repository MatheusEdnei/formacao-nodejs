const coinFlip = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve('sucesso') : reject('falha')
})

coinFlip
    .then ((data) => console.log(data))
    .then  