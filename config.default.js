// add your config here
config.middleware = [];
//多出来的配置==========
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:8080']
};
config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
