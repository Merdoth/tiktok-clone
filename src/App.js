import React, { useState, useEffect } from 'react';

import "./App.css";
import db from "./firebase";
import Video from "./components/Video/Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="app">
      <h2> Wish TikTok</h2>
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, comments, shares }, index) => (
          <Video 
          key={index}
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          comments={comments}
          description={description}
          shares={shares}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
