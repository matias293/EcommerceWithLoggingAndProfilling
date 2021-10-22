import passport from 'passport';
import passportFacebook from 'passport-facebook';

import Config from '../config/index'


const FaceBookStrategy = passportFacebook.Strategy;

const strategyOptions= {
  clientID: '1199081557245042',
  clientSecret:'a9ced53c15fd8ea37ef51e635cf334af' ,
  callbackURL: 'http://localhost:8080/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
};

const loginFunc = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  
  return done(null, profile);
};

passport.use('facebook',new FaceBookStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export default passport;