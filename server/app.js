import express from 'express';
import http from 'http';
import path from 'path';

var app;
var httpServer;

initApp();

function initApp () {
  app = express();
  httpServer = http.Server(app);

  app.set('env', process.env.NODE_ENV || 'development');

  if (app.get('env') === 'development') {
    app.set('cssInclude', '');
    app.set('resourceUrlPrefix', 'http://localhost:8080/');
  } else {
    app.set('cssInclude', `<link rel="stylesheet" href="/main.css"/>`);
    app.set('resourceUrlPrefix', '/');
  }

  app.use('/bundle.js', express.static(path.join(__dirname, './../dist/bundle.js')));
  app.use('/main.css', express.static(path.join(__dirname, './../dist/main.css')));

  app.use((req, res) => {

    const HTML = `

    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>TODO APP</title>
          ${app.get('cssInclude')}
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
          <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
        </head>
        <body>
          <div ng-app="todoApp">
            <todo>
              Loading...
            </todo>
          </div>
          <script type="application/javascript" src="${app.get('resourceUrlPrefix')}bundle.js"></script>
        </body>
      </html>
    `;

    res.end(HTML);    
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, function () {
    console.log(`==> 🌎 TODO app listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
  });
}
