// import
import jwt from 'jsonwebtoken';

export const generateToken = payload => {
   return jwt.sign(payload, process.env.secret, { expiresIn: '1h' });
};

export const extractToken = token => {
   return jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
         return null;
      }

      return decoded;
   });
};
