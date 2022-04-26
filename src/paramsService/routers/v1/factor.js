const { nats } = require('config');

const express = require('express');

const logger = require('../../../utilities/logger')('PARAMS_SERVICE');

const router = express.Router();

router.post('/api/v1/factor/thickness', async (req, res) => {
  const { factor } = req.body;

  const handle = logger.begin({ module: 'routers/v1/factor', method: '/api/v1/factor/thickness', factor });

  try {
    if (!global.natsClient) {
      throw new Error('the natsClient is not existed');
    }
    await global.natsClient.publish(`${nats.subject}.params`, {
      type: 'FACTOR_THICKNESS',
      factor,
    });

    logger.end(handle);

    return res.status(200).send({
      ok: true,
    });
  } catch (err) {
    logger.fail(handle);

    return res.status(500).send({
      ok: false,
      message: err.message,
    });
  }
});

router.post('/api/v1/factor/moisture', async (req, res) => {
  const { factor } = req.body;

  const handle = logger.begin({ module: 'routers/v1/factor', method: '/api/v1/factor/moisture', factor });

  try {
    if (!global.natsClient) {
      throw new Error('the natsClient is not existed');
    }
    await global.natsClient.publish(`${nats.subject}.params`, {
      type: 'FACTOR_MOISTURE',
      factor,
    });

    logger.end(handle);

    return res.status(200).send({
      ok: true,
    });
  } catch (err) {
    logger.fail(handle);

    return res.status(500).send({
      ok: false,
      message: err.message,
    });
  }
});

module.exports = router;
