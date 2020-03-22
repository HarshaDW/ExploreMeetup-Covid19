const express = require('express')
const next = require('next')
const { Routes } = require("./src/routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging'
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.static('public'))

  server.set('trust proxy', true)
  server.get('/ping', (req, res) => res.sendStatus(200))

  Routes.forEachPrettyPattern((page, pattern, defaultParams) => {
    // eslint-disable-next-line no-console
    console.log(`> Pretty URL: ${pattern} => ${page}`);

    server.get(pattern, (req, res) =>
      app.render(
        req,
        res,
        `/${page}`,
        Object.assign({}, defaultParams, req.query, req.params)
      )
    );
  });

  server.get('/*', async (req, res, next) => {
    try {
      app.render(req, res, '/');
    } catch (e) {
      next(e);
    }
  });
  console.log(`> Ready on http://localhost:${port}`)
  
  server.listen(port)
})
