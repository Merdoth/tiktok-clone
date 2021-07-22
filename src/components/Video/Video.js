import React, { useState, useRef, useEffect } from "react";

import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "../Sidebar/VideoSidebar";

function Video({ url, channel, description, song, likes, comments, shares }) {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		let options = {
			rootMargin: "0px",
			threshold: [0.25, 0.75],
		};

		let handlePlay = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					videoRef.current.play();
				} else {
					videoRef.current.pause();
				}
			});
		};

		let observer = new IntersectionObserver(handlePlay, options);

		observer.observe(videoRef.current);
	}, []);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="video">
			<video
				className="video__player"
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src={url}
			></video>
			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSidebar likes={likes} comments={comments} shares={shares} />
		</div>
	);
}

export default Video;
