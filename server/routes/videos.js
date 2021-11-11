"use strict";
import express from 'express';
const router = express.Router();
import getVideos from '../components/videos.js'

router
  .route('/')
  .get(getVideos);

router
  .route('/:videoid')
  .get(getVideos)
export default router;