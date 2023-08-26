const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;

// colocar no package.json
// "dev": "ng serve --proxy-config proxy.conf.js",
// api criada em spring boot
// https://github.com/srodrigo28/api-spring-2023.git
