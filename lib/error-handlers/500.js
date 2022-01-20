'use strict';

// module.exports = function(err, req, res, next) {
//     console.log('We have found an error');
//     const err = err.message ? err.message : err;
//     res.status(500).send(err);
// };

function serverError(err, req, res, next) {
    console.error('OOPs! Its not you, its me');
    console.log(err);
    res.status(500).send('Server Error');
}

module.exports = serverError;
