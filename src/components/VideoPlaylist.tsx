import { Video } from "@prisma/client";
import { useState } from "react";
import { VideoPlaylistItem } from "./VideoPlaylistItem";

export const VideoPlaylist: React.FC<{videos: Video[] | undefined, deleteVideo: any}> = ({videos, deleteVideo}) => {
	const [visible, setVisibility] = useState(false);
	const [mouseIn, setMouseIn] = useState(false); 

	function handleMouseEnter () {
		setVisibility(true);
		setMouseIn(false);
	}
	
	function handleMouseLeave () {
		if (mouseIn) {
			setVisibility(false);
			setMouseIn(false);
		}
	}

	function handleMouseEnterPlaylist() {
		setMouseIn(true)
	}


	if (visible) {
		return (
			<div
				id="videoPlaylist"
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnterPlaylist}
				className="pl-4 bg-black/70 rounded-l-lg w-1/4 absolute right-0 top-0">
				<div className="h-8">
					Playlist
				</div>
					{videos?.map((vid: Video, index: number) => {
						return <VideoPlaylistItem
						video={vid}
								   deleteVideo={deleteVideo} />
					})}
				<div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className="w-10"
				onMouseEnter={handleMouseEnter}
			>
				
			</div>
		);
	}
}