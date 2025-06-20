const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'] // "Bearer xxxx..."
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({message: 'No token provided'})
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            res.status(403).json({message: "Invalid or expired token"})
        }

        req.user = user; // {uid, username}
        next();
    })
}

module.exports = authenticateToken;