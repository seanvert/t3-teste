import React, { useRef, useEffect, useState } from "react";

function YTiframe({videoId}) {
	var player;
	const videoPlayer = useRef(player);
	const [playerStatus, setPlayerStatus] = useState(false);
	const [mutado, setMutado] = useState(true);
	const [playingVideo, setPlayingVideo] = useState(videoId);

	function desmutar() {
		videoPlayer.current.unMute();
		setMutado(false);
		let botao = document.getElementById("BotaoDesmutar");
		botao.style.display = "none";
	}

	useEffect (() => {
		const script = document.createElement("script");
		script.src = "https://www.youtube.com/iframe_api";
		script.async = true;
		document.body.appendChild(script);

		function onPlayerReady(event) {
			event.target.setVolume(15);
			event.target.playVideo();
		}

		function onPlayerStateChange (event) {
			if (event.data === window.YT.PlayerState.PLAYING
				&& !playerStatus) {
				setPlayerStatus(true);
			} else if (event.data === window.YT.PlayerState.ENDED) {
				console.log("terminou");
			}
		}

		function stopVideo() {
			videoPlayer.current.stopVideo();
		}

		// esta função precisa ter este nome e ser global para funcionar
		window.onYouTubePlayerAPIReady = () => {
			videoPlayer.current = new window.YT.Player("ytplayer", {
				height: 3 * window.innerHeight / 4,
				width: 3 * window.innerWidth / 4,
				/* height: '360',
				   width: '640', */
				videoId: videoId,
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				},
				playerVars: {
					mute: "1",
				}
			});
		};

		if (videoId != playingVideo) {
			videoPlayer.current.loadVideoById({
				videoId: "QxyqR4yh1GI",
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				},
				playerVars: {

				}
			});
			/* videoPlayer.current.playVideo(); */
		}
		return () => {
			document.body.removeChild(script);
		};
	}, [videoId, playerStatus]);

	
	return (
		<div className="video">
			<div id="ytplayer"></div>
			<div id="BotaoDesmutar" onClick={desmutar} className="BotaoDesmutar">
				desmutar
			</div>
		</div>
	);
}

export default YTiframe;


// <iframe
//  	title="home-video"
//  	ref={videoPlayer}
//  	id="player"
//  	className="iframe"
//  	frameBorder="0"
//  	src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0`}
//  	width="853"
//  	height="480"
//  	allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
// />
