var p = Promise.resolve()
  .then(data => new Promise(function (resolve, reject) {
    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
  }))

p.then(data => console.log('yay'))
p.catch(data => console.log('ops'))