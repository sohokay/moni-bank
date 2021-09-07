exports.keys = 'admin' //<此处改为你自己的 Cookie 安全字符串>;


// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
exports.middleware = [
  // 'robot'
];
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'moni_bank',
  host: 'cdb-g7x8vz1i.cd.tencentcdb.com',
  port: 10087,
  username: 'moni_bank',
  password: 'qwe123++',
  // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
  // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
  // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
  // more sequelize options
};

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
