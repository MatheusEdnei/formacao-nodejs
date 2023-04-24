const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve('yayyy')
  reject('no')
})

const sucess = (param) => {
  return param + ' sucesso'
}

const err = (param) => {
  return param + ' erro'
}

p.then(sucess).then(console.log).catch(err).then(console.log)

