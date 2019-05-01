const callbackFn = () => {
    console.log("s-a apelat functia de tip callback");
}

const callbackPracticeFn = (loopUntil,callback) => {
    for (let i = 0; i <= loopUntil; i++) {
        console.log(i);
    }
    callback();
}

callbackPracticeFn(39,callbackFn);