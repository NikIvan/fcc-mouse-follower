const path = require('path');
const https = require('https');

const HttpRouter = require('./lib/HttpRouter');
const { sendFile, sendError } = require('./lib/responseHelpers');
const config = require('./config/config');

const API_PREFIX = '/api/v1';

const router = new HttpRouter();

router.set(
  '/', {
    method: HttpRouter.METHOD_GET,
    isExact: true,
  }, async (req, res) => {
    const pathToFile = path.join(config.publicFolder, '/index.html');
    await sendFile(req, res, pathToFile);
  },
);

module.exports = router;
