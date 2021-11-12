import express from 'express';
import cors from 'cors';
import videos from './routes/videos.js'
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/.env` });
const server = express();

server.use(cors({
  origin: 'https://hb-video-testing.herokuapp.com/'
}));

server.use("/", express.static(path.join(__dirname,'client/build')));
server.use('/videos', videos);

// Fix this port situation
// Need to be able to send the current port to react app
// But react app can't see port from it's current location on heroku
const productionURL  = 'https://hb-video-testing.herokuapp.com';
const developmentURL = 'http://0.0.0.0';
const PORT = process.env.PORT || process.env.REACT_APP_PORT || 4000;
const deploymentStatus = process.env.NODE_ENV;
const url = (deploymentStatus) ? productionURL : developmentURL;
server.listen(PORT, () => console.log(`Server Started: ${url}:${PORT}/`));