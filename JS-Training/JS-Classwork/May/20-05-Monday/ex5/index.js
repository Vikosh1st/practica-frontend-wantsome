// Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri 
// externe, la alegere (cel putin 3)

const get = (URL) => {
        // Return a new promise.
    return new Promise ((resolve, reject) => {
            // Do the usual XHR stuff
        let request = new XMLHttpRequest();
        request.open('GET', URL);
        request.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (request.status == 200) {
                // Resolve the promise with the response text
                resolve(request.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(request.statusText));
            }
        };

            // Handle network errors
        request.onerror = function() {
        reject(Error("Network Error"));
        };

        // Make the request
        request.send();
    });
}

get("https://pokeapi.co/api/v2/ability/150/").then(function(response) {
    return JSON.parse(response);
    }).then(function(response) {
    console.log("Success", response);
})

get("http://api.citybik.es/v2/networks").then(function(response) {
    return JSON.parse(response);
    }).then(function(response) {
    console.log("Success", response);
})





