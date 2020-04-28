const express = require('express');
const next = require('next');
const port = 57448;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const appRoutes = require('./routes/appRoutes');
    const server = express();

    for (let route in appRoutes) {
      const pageRoute = appRoutes[route];
      if (pageRoute.path !== appRoutes.home.path)
        server.get(pageRoute.asPath, (req, res) => app.render(req, res, pageRoute.path, { ...req.params }));
    }

    //map product detail path
    server.get('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err)
        throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })