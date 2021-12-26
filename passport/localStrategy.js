const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Staff = require('../models/staff');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'staffId',
    passwordField: 'staffPassword',
  }, async (staffId, staffPassword, done) => {
    try {
      const exStaff = await Staff.findOne({ where: { staffId } });
      if (exStaff) {
        const result = await bcrypt.compare(staffPassword, exStaff.staffPassword);
        console.log('result');
        console.log(result);
        if (result) {
          done(null, exStaff);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
