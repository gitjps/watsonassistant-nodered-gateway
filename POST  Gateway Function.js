var rp = require('request-promise');
function main(params) {
    //return params.target_hostname + params.target_route;
    const options = {
        method:"POST",
        uri : "https://nuenodered.eu-gb.mybluemix.net/room/book", //params.target_hostname + params.target_route,
        body: {
        "capacity" : params.query_params.capacity,
        "hasBeamer": params.query_params.hasBeamer,
        "hasFlipchart": params.query_params.hasFlipchart
        },
        json: true
    };
    return new Promise(function (resolve, reject) {
       rp(options)
       .then(result => {
           resolve(result);
       })
       .catch(function (err) {
           resolve({ message: 'Test', error: JSON.stringify(err)});
       });
    });
}
