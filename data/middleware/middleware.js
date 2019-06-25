const jwt = require('jsonwebtoken');

module.exports = {
    generateToken,
    authenticate
}

const jwtKey =
process.env.JWT_SECRET ||
'shh, it a secret';


function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
  
    const options = {
      expiresIn: '1h'
    };
  
    return jwt.sign(payload, jwtKey, options);
  
  }


  function authenticate(req, res, next) {
    const token = req.get('Authorization');
  
    if (token) {
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json(err);
  
        req.decoded = decoded;
  
        next();
      });
    } else {
      return res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
    }
  }