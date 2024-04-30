/*
const myArray = ["dude", "pal", "nigga",
                "mate", "dawg", "homie"];

function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(myArray); */
/*
const myArray = ["dude", "pal", "nigga",
               "mate", "dawg", "homie"];

function shuffledArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random()* (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    return array;
}

console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray));
console.log(shuffledArray(myArray)); */
/* 
const myArray = ["dude", "pal", "nigga",
                "mate", "dawg", "homie"];

const shuffledArray = [...myArray, ...myArray]
                      .sort(() => Math.random() - 0.5);
console.log(shuffledArray);
*/

