import './App.css';
import Stories from './components/InstaStories';
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/.env` });

function App() {
/*   const SERVER = process.env.SERVER_URL || 'http://0.0.0.0';
  const PORT = process.env.PORT || 3200;
  const videosEndPoint = '/videos'

  const videos = `${SERVER}:${PORT}${videosEndPoint}`; */
  return (
    <div className="App">
      {/* <video width="320" height="240" controls>
        <source src={videos} type="video/mp4" muted/>
        Your browser does not support the video tag.
      </video> */}
      <Stories />
    </div>
  );
}

export default App;
// Java8
// SpringBoot
// SQL
// Agile Environment
// UserStories