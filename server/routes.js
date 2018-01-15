var path = require('path');

var basePath = '';

switch(process.env.NODE_ENV) {
  case 'production':
    basePath = '/dist';
    break;
  case 'development':
    basePath = '/public';
    break;
}

//process.cwd() : /home/romelgomez/workspace/projects/berlin
//__dirname : /home/romelgomez/workspace/projects/berlin/server


function defaultRoute(req, res){
  res.sendFile('index.html', {root: path.join(process.cwd(), basePath)});
}

module.exports = function(app) {

  app.get('/', function(req, res) {
    // Rewrite Cache-Control set defined in app.js
    //res.set({
    //  'Cache-Control': 'no-cache'
    //});
    defaultRoute(req, res);
  });

  app.get('/my-resume', function(req, res){
    defaultRoute(req, res);
  });

  app.get('/contact', function(req, res){
    defaultRoute(req, res);
  });

  app.get('/login', function(req, res){
    defaultRoute(req, res);
  });

  app.get('*', function(req, res){
    defaultRoute(req, res);
  });

};
