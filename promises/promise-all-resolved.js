Promise.all([
    new Promise(resolve => setTimeout(() => resolve([]), 5500)),
    new Promise(resolve => setTimeout(() => resolve([1]), 3000)),
    new Promise(resolve => setTimeout(() => resolve([1,2]), 2200))
  ])
  .then(results => results.length)
  .then(c => console.info(c))
  .catch(err => console.error(err))