import React, { useEffect, useState } from "react";

export const YTiframe: React.FC<{
    stateFunction: any,
    setVideoPlayer: any,
}> = ({
    stateFunction,
    setVideoPlayer
}) => {
    var player;
    const [playerReady, setPlayerReady] = useState(false);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);

        function onPlayerReady(event) {
            event.target.setVolume(15);
            event.target.playVideo();
            setPlayerReady(true);
        }

        function onPlayerStateChange(event) {
            stateFunction(event.data);
        }

        if (!playerReady) {
            // esta função precisa ter este nome e ser global para funcionar
            window.onYouTubePlayerAPIReady = () => {
                player = new window.YT.Player(
                    "ytplayer",
                    {
                        height: 9 * window.innerHeight / 10,
                        width: window.innerWidth,
                        /* height: '360',
                           width: '640', */
                        videoId: "",
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        },
                        playerVars: {
                            mute: "1",
                            controls: "0",
                            disablekb: "1",
                            enablejsapi: "1",
                            modestbranding: "1",
                            autoplay: "1",
                        }
                    });
                setVideoPlayer(player);
            };
        }

        return () => {
            document.body.removeChild(script);
        };
    }, [playerReady]);

    return (
        <div id="ytplayer"></div>
    );
}