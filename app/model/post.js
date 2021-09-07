module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post = app.model.define('Posts', {
    name: STRING(30),
    id: {
      primaryKey: true,
      type:INTEGER
    },
    created_at: DATE,
    updated_at: DATE,
  });
  //
  // Post.associate = function() {
  //   app.model.Post.belongsTo(app.model.User, { as: 'user' });
  // }

  return Post;
};
