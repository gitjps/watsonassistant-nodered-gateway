var rp = require('request-promise');
function main(params) {
    const options = {
        method:"GET",
        uri : "http://hostname:1880/wahandler?request=time", //params.target_hostname + params.target_route,
        auth: {
            'user': 'us',
            'pass': 'pw'
        },
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
