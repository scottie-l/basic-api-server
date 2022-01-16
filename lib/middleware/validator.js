'use strict';

module.exports = function(req, res, next) {
    if (!parseInt(req.params.id)) {
        next('Missing or bad id');
    } else {
        next();
    }
};
