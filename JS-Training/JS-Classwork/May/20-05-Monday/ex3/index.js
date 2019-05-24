const isStringThenUppercase = (param) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof param === "string") {
                resolve(param.toUpperCase());
            } else {
                reject("Your argument is not a string");
            }
        }, 500);        
    });
}

isStringThenUppercase("Frontend development").then(
    response => console.log(response)
)

isStringThenUppercase(300).catch(
    response => console.log(response)
)