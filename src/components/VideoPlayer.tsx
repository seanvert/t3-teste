import { VideoPlaylist } from "./VideoPlaylist";
import { YTiframe } from "./ytframe";
import { trpc } from "../utils/trpc";
import { useState, useEffect, BaseSyntheticEvent } from "react";
import { ToggleSound } from "./ToggleSound";

export const VideoPlayer: React.FC = () => {
    // trpc video playlist queue
    const { data: videos, isLoading, refetch } = trpc.videos.getAll.useQuery();
    const playVideo = trpc.videos.playVideo.useMutation();
    const deleteVideo = trpc.videos.deleteVideo.useMutation();
    const [videoIndex, setVideoIndex] = useState(0);

    // video player states
    const [playerState, setPlayerState] = useState<YT.PlayerState>(-2);
    const [playerInSync, setPlayerInSync] = useState(false);
    const [videoPlayer, setVideoPlayer] = useState<YT.Player | null>();
    const [started, setStarted] = useState(false);
    
    function handleVolume(e: BaseSyntheticEvent) {
        if (videoPlayer != null) {
            videoPlayer.setVolume(e.target.value)
        }
    }

    useEffect(() => {
        if (videos
            && videos.length > 0
            && videoPlayer != null
            && typeof window === "object") {

            /* started playing */
            if (playerState === window.YT.PlayerState.PLAYING) {
                /* checks if the video has started */
                if (videos[0].started && !playerInSync) {
                    /* jumps to current position */
                    /* gets startedPlayingAt */
                    /* and compares it with now */
                    var videoTime = Date.now() - videos[0].startedPlayingAt;
                    videoTime = videoTime / 1000;
                    /* send it to player */
                    videoPlayer.seekTo(videoTime, true);
                    setPlayerInSync(true)
                } else if (videos[0].started === false) {
                    /* video hasn't started */
                    /* sends starting time to api */
                    /* changes video state to started */
                    playVideo.mutate({
                        id: videos[0].id,
                        startedPlayingAt: Date.now(),
                    })
                }
            }

            /* video player finished playing */
            if (playerState === window.YT.PlayerState.ENDED && videos[videoIndex + 1]) {
                /* increment videos index */
                setVideoIndex(videoIndex + 1);
                /* play next video */
                videoPlayer.loadVideoById({
                    videoId: videos[videoIndex + 1].ytID,
                });
                /* delete previous video */
                deleteVideo.mutate({
                    id: videos[videoIndex].id
                });
                /* TODO checks if it was successful */
                /* TODO resets queue index */
                refetch();
            } else if (playerState === window.YT.PlayerState.ENDED && videos[videoIndex]) {
                deleteVideo.mutate({
                    id: videos[videoIndex].id
                });
                refetch();
                setStarted(false);
            }
            if (playerState === window.YT.PlayerState.UNSTARTED
                && !started) {
                videoPlayer.loadVideoById({
                    videoId: videos[0].ytID,
                })
                setStarted(true)
                console.log("videos", videos);
            }
        }

    }, [playerState]);

    return (
        <div className="flex flex-row grow justify-items-center items-center">
            <div className="video indicator">
                <div className="w-full h-full absolute flex">
                    <div>
                        ladoesquerdo
                        <input
                            onChange={(e) => handleVolume(e)}
                            type="range" min="0" max="100"
                            className="range" />
                    </div>
        <ToggleSound videoPlayer={videoPlayer} />
                <div>
                    lado direito
                    <VideoPlaylist videos={videos}
                        deleteVideo={deleteVideo} />
                        </div>
                </div>
                <YTiframe
                    stateFunction={setPlayerState}
                    setVideoPlayer={setVideoPlayer} />
            </div>
        </div>
    );
}

