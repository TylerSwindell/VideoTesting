import express from 'express';
import cors from 'cors';
import videos from './routes/videos.js'
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();

dotenv.config({ path: `${__dirname}/.env` });

const server = express();
  const SERVER = process.env.SERVER_URL || 'http://0.0.0.0';
  const PORT = process.env.SERVER_PORT || 3200;

server.use(cors({
  origin: 'https://hb-video-testing.herokuapp.com/'
}));

server.use("/", express.static(path.join(__dirname,'client/build')));
server.use('/videos', videos);

server.listen(PORT, () => console.log(`Server Started: ${SERVER}:${PORT}`));