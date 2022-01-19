'use strict';

// module.exports = function(req, res, next) {
//     res.status(404).send('Sorry, no route found');
// };

function notFound(req, res, next) {
    console.log('Error, no route found');
    res.status(404).send('Oops! Nothing here');
}

module.exports = notFound;
