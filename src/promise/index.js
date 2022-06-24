// * Ejemplo Módelo de una promesa
const promise = new promise((resolve, reject) => {
    resolve('hey!')
});

// * Ejemplo Práctico de como aplicar una promesa
const cows = 19;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));