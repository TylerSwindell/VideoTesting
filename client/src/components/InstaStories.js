import Stories, { WithSeeMore } from 'react-insta-stories';
import {useEffect, useState} from 'react';

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

const stories2 = [
	{
		url: 'http://0.0.0.0/videos',
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

const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: '#333',
	width: '100%',
	padding: 20,
	color: 'white',
	height: '100%'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 20,
	position: 'relative'
}

export default InstaStories;