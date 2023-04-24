const p = new Promise((resolve, reject) => {
setTimeout(() => resolve('yay'), 5000)
})

// Ambos os callbacks estão ligados a p
p.then((res) => {}, (rej) => {})

// Isto aqui é a mesma coisa
new Promise((resolve, reject) => {})
.then((res) => {}, (rej) => {})

// Separando os binds
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay'), 5000)
})

p2.then((res) => {})
p2.catch((rej) => {})

// Encadeando um then com o catch
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay'), 5000)
})

p3
.then((res) => {})
.catch((rej) => {}) // Esse catch é da promise retornada pelo then e não da promise original