import Stories from 'react-insta-stories';
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}.env` });
console.log(`${__dirname}.env`);

const InstaStories = () => {

  return  (
    <div>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={8000}
        stories={stories2}
        onStoryEnd={(s, st) => console.log('story ended', s, st)}
        onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
        onStoryStart={(s, st) => console.log('story started', s, st)}
        storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
      />
    </div>
  );
}

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 20,
	color: 'white',
	height: '100%'
}

const Story2 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#333' }}>
		<h1>You get the control of the story.</h1>
		<p>Render your custom JSX by passing just a <code style={{ fontStyle: 'italic' }}>content</code> property inside your story object.</p>
		<p>You get a <code style={{ fontStyle: 'italic' }}>action</code> prop as an input to your content function, that can be used to play or pause the story.</p>
		<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
		<h4>v2 is out 🎉</h4>
		<p>React Native version coming soon.</p>
	</div>
}

const productionURL  = 'https://hb-video-testing.herokuapp.com';
const developmentURL = 'http://0.0.0.0';
const PORT = process.env.PORT || process.env.REACT_APP_PORT || 4000;
const deploymentStatus = process.env.NODE_ENV;
const url = (deploymentStatus) ? productionURL : developmentURL;

const videosEndPoint = '/videos'
const videoID = '/video1';
console.log(deploymentStatus, PORT);

const videos = `${url}:${PORT}${videosEndPoint}${videoID}`;

const stories2 = [
	{
		url: `${videos}`,
    type: 'video'
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	},
	{
		content: Story2
	}
]

export default InstaStories;