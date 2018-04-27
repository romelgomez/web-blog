// import * as path from 'path'; // normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
// import * as express from 'express';


// export class Routes {

//   protected basePath: string;

//   constructor (NODE_ENV: string) {

//     switch ( NODE_ENV) {
//       case 'production':
//         this.basePath = '/dist';
//         break;
//       case 'development':
//         this.basePath = '/public';
//         break;
//     }

//   }

//   defaultRoute(req: express.Request, res: express.Response){
//     res.sendFile('index.html', {root: path.join(process.cwd(), this.basePath)});
//   }

//   paths(app: express.Application) {

//     app.get('/', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//     app.get('*', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//   }

// }


// // *******************************************

// // var path = require('path');

// var basePath = '';

// switch(process.env.NODE_ENV) {
//   case 'production':
//     basePath = '/dist';
//     break;
//   case 'development':
//     basePath = '/public';
//     break;
// }

// //process.cwd() : /home/romelgomez/workspace/projects/berlin
// //__dirname : /home/romelgomez/workspace/projects/berlin/server


// function defaultRoute(req, res){
//   res.sendFile('index.html', {root: path.join(process.cwd(), basePath)});
// }

// module.exports = function(app) {

//   app.get('/', function(req, res) {
//     // Rewrite Cache-Control set defined in app.js
//     // res.set({
//     //  'Cache-Control': 'no-cache'
//     // });
//     defaultRoute(req, res);
//   });

//   app.get('/my-resume', function(req, res){
//     defaultRoute(req, res);
//   });

//   app.get('/contact', function(req, res){
//     defaultRoute(req, res);
//   });

//   app.get('/login', function(req, res){
//     defaultRoute(req, res);
//   });

//   app.get('/account', function(req, res){
//     defaultRoute(req, res);
//   });

//   app.get('/terms-of-service', function(req, res){
//     defaultRoute(req, res);
//   });

//   app.get('/privacy-policy', function(req, res){
//     defaultRoute(req, res);
//   });

//   // TO-DO API
//   app.post('/api/to-do', function(req, res){
//     console.log('sabe one to-do ');    
//   });

//   app.get('/api/to-do', function(req, res){
//     console.log('Get all to-do');    
//   });

//   app.get('/api/to-do/:id', function(req, res){
//     console.log('get to-do by id:',req.params.id);    
//   });

//   app.get('*', function(req, res){
//     defaultRoute(req, res);
//   });

// };
