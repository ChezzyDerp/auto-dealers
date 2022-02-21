import dealers from "./dealers"


//Delat for all Promises
const DELAY = 400

//Return promise with delay, promise data is all autosalons

export const getDealers = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(dealers)
        }, DELAY)
    })
}

//Return autosalon with same name, else throw error

export const getDealersById = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            let candidate = dealers.find((e) => e.id === id);

                if (candidate) {
                    resolve(candidate);
                } else {
                    reject(`Нет автосалона с id ${id}!`);
                }
            }, DELAY);
        });
}
