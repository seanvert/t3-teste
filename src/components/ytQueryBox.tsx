import React, { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import _ from "lodash";

enum queriesTypesYT {
    Text,
    Link,
}

function getIDFromYTURL(url: String) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        //error
        console.log("url inválida");
        return "";
    }
}

// FIXME this is being called more than once
const throttledFunction = _.throttle(console.log, 5000);

export function YTQueryBox() {
    const [query, setQuery]: [string, any] = useState("");
    const postVideo = trpc.videos.postVideo.useMutation();
    const [ytResults, setYTResults] = useState([]);
    const [ytQueryType, setYTQueryType] = useState(queriesTypesYT.Text);
	const {data: ytQueryResponseData, refetch: refetchYT} = trpc.yt.queryYTVideos.useQuery({
		query: query
	});

	
    function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        switch (ytQueryType) {
            case queriesTypesYT.Text:
				refetchYT();
				setYTResults(ytQueryResponseData);
                break;
            case queriesTypesYT.Link:
                const ytVideoID = getIDFromYTURL(query);
				/* fetch name, duration yt api */
				postVideo.mutate({
					name: "asd",
					link: query,
					ytID: ytVideoID,
				});
                break;
            default:
                console.log("default");
                break;
        }

    }

    function handleSelectQuery(e: React.FormEvent<HTMLInputElement>) {
        if (e.target.value === "Texto") {
            setYTQueryType(queriesTypesYT.Text);
			setQuery("");
        } else {
            setYTQueryType(queriesTypesYT.Link);
			setQuery("");
        }
    }

	function handleChange(key: string) {

		if (ytQueryType === queriesTypesYT.Text) {
			const keywordString = `${key}`.replace(/\s/g, "+");
			setQuery(keywordString);
			/* setYTResults(results.items); */
		}
		/* TODO chamar a fun*/
		throttledFunction("fodase");
    }


    useEffect(() => {},
			  [JSON.stringify(ytResults), JSON.stringify(ytQueryResponseData)])

    return (
        <div className="text-white">
            <div className="form-control">
                <div className="input-group flex-col">
                    <div className="flex">
                        <select
                            onChange={(e) => handleSelectQuery(e)}
                            className="text-white select select-bordered">
                            <option disabled>Tipo de busca</option>
                            <option defaultValue>Texto</option>
                            <option>Link</option>
                        </select>
		<input
		type="text"
		placeholder="Busca…"
		onChange={(e) => handleChange(e.target.value)}
		className="input input-bordered text-white" />
                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
					<CompletionResults ytResults={ytResults}
					query={query}
					setQuery={setQuery}
					postVideo={postVideo}
					ytQueryType={ytQueryType} />
                </div>
            </div>
        </div>
    );
};

export default YTQueryBox;


function CompletionResults({query, setQuery, ytResults, ytQueryType, postVideo}) {
    if (ytResults.length > 0
		&& query != ""
        && ytQueryType === queriesTypesYT.Text) {
        return (
            <div className="text-black absolute top-[25rem] z-50" >
                {ytResults.map((result, index) => {
                    function handleClick() {
						postVideo.mutate({
							name: result.snippet.title,
							link: "https://www.youtube.com/watch?v=" + result.id.videoId,
							ytID: result.id.videoId,
						});
						setQuery("")
                    };
					console.log(result);
                    if (index < 5) {
                        return (
                            <div onClick={handleClick}
                                 className="flex flex-row border-y-0 hover:bg-lime-700 bg-white">
								<div>
									<img alt=""
									className="mask mask-squircle w-14"
										 src={result.snippet.thumbnails.default.url} />
								</div>
								<div className="flex justify-center items-center">
									{result.snippet.title}
								</div>
                            </div>

                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );

    } else {
        return null;
    }
}
