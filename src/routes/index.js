import express from 'express';
const router = express.Router();

import audioRoute from './audios.route';
import userRoute from './user.route';
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
  router.use('/auth', userRoute);
  return router;
};

export default routes;
