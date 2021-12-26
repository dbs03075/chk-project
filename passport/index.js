const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStrategy');
const Staff = require('../models/staff');

module.exports = () => {
  passport.serializeUser((staff, done) => {
    done(null, staff.staffId);
  });

  passport.deserializeUser((staffId, done) => {
    Staff.findOne({
      where: { staffId },
    })
      .then( staff => done(null, staff))
      .catch(err => done(err));
  });

  local();
  // kakao();
};
