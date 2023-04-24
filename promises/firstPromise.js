const myPromise = new Promise((resolve, reject) => {
    let condition 

    if (condition) {
        resolve('Promise resolvida')
    } else {
        reject ('Promise rejeitada')
    }
})

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})