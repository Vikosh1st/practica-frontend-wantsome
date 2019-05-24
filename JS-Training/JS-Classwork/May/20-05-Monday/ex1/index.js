const greaterThanTen = (number) => {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            if (number > 10) {
                resolve("Your number is greater than ten")
            } else {
                reject("Your number is not greater than ten")
            }
        }, 1000);
    });
}

greaterThanTen(22).then(
    response => console.log(response),
    rejectedresponse => console.log(rejectedresponse)
    )
greaterThanTen(5).catch((rejected) => {console.log(rejected)});
