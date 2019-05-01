// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    console.log('1')
}

const func2 = () => {
    console.log('2')
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    console.log('4')
}

const func5 = () => {
    console.log('5')
}

setTimeout(func1, 1500);
setTimeout(func2, 1000);
setTimeout(func3, 500);
setTimeout(func4, 2000);
setTimeout(func5, 750);

