import express from 'express';
import cors from 'cors';
import videos from './routes/videos.js'
import path from 'path';

const __dirname = path.resolve();

const server = express();
const PORT = process.env.PORT || 3200;

server.use(cors());

server.use("/", express.static(path.join(__dirname,'client/build')));
server.use('/videos', videos);

server.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`));