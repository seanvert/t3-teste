import React, { useRef, useEffect, useState } from "react";

function YTiframe({
    videoId,
    stateFunction,
    setPlayerFunction
}) {
    var player;
    const videoPlayer = useRef(player);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [mute, setMute] = useState(true);
    const [playingVideo, setPlayingVideo] = useState(videoId);

    function toggleSound() {
        if (mute) {
            videoPlayer.current.unMute();
        } else {
            videoPlayer.current.mute();
        }
        setMute(!mute);
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);

        function onPlayerReady(event) {
            event.target.setVolume(15);
            event.target.playVideo();
            setPlayerFunction(videoPlayer);
        }

        function onPlayerStateChange(event) {
            if (event.data === window.YT.PlayerState.PLAYING
                && !playerStatus) {
                setPlayerStatus(true);
            }
            console.log("estado", event.data);
            stateFunction(event.data);
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

        return () => {
            document.body.removeChild(script);
        };
    }, [videoId]);


    return (
        <div className="video indicator">
            <span className="indicator-item indicator-middle indicator-center badge">
                <label className="swap">
                    <input id="toggleSoundButton" onClick={toggleSound}
                        type="checkbox" />
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" /></svg>
                </label>
            </span>
            <div id="ytplayer"></div>

        </div>
    );
}

export default YTiframe;
