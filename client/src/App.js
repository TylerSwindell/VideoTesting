import './App.css';
import Stories from './components/InstaStories';

function App() {

  const videos = 'http://localhost:3200/videos'
  return (
    <div className="App">
        <video width="320" height="240" controls>
          <source src={videos} type="video/mp4" muted/>
          Your browser does not support the video tag.
      </video>
      <Stories stor/>
    </div>
  );
}

export default App;
