const checkString = (str) => {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            if (str.indexOf("promise") !== -1) {
                resolve("Your string contains the word promise")
            } else {
                reject("Your string does not contain the word promise")
            }
        }, 300);
    });
}

checkString("I've learned to use promise today").then(
    response => console.log(response)    );
checkString("I didn't learned anything today").catch((rejected) => {console.log(rejected)});

// str.indexOf("word") !== -1 - How to find a word within a string