// app/model/user.js

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('u_user', {
    // login: STRING,
    id:{
      type: STRING,
      primaryKey: true,
    },
    name: STRING(30),
    password: STRING(32),
    // age: INTEGER,
    // last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  // User.findByLogin = async function(login) {
  //   return await this.findOne({
  //     where: {
  //       login: login
  //     }
  //   });
  // }

  // don't use arraw function
  // User.prototype.logSignin = async function() {
  //   return await this.update({ last_sign_in_at: new Date() });
  // }

  return User;
};
