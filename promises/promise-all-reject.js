Promise.all([
    new Promise(resolve => setTimeout(resolve, 1500)),
    new Promise(resolve => setTimeout(resolve, 900)),
    new Promise(resolve => setTimeout(resolve, 2200))
  ])
  .then(results => results.length.b.c)
  .then(c => console.info(c))
  .catch(err => console.error(err))