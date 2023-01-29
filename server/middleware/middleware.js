const jwt = require('jsonwebtoken')

exports.validateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token.split('Bearer ')[1], process.env.SECRET, async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({
                    error: 'Failed to authenticate token'
                });
            }
            req.user = decoded;
            next()
        });
    } else {
        return res.status(401).json({
            error: 'No token provided'
        });
    }
}