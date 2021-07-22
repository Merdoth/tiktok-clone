import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import "./VideoSidebar.css";

function VideoSidebar({ likes, shares, comments }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="medium" onClick={e => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="medium" onClick={e => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar__button">
        <TextsmsIcon fontSize="medium" />
        <p>{comments}</p>
      </div>

      <div className="videoSidebar__button">
        <SendIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar;
