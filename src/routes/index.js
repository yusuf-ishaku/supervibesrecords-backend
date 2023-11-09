import express from 'express';
const router = express.Router();

import audioRoute from './audios.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/audio', audioRoute);

  return router;
};

export default routes;
