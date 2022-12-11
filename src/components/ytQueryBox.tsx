import React, { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
import _ from "lodash";

enum QueriesTypesYT {
    Text,
    Link,
};

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
};

// FIXME this is being called more than once
const throttledFunction = _.throttle(console.log, 5000);


export function YTQueryBox() {
	const [query, setQuery]: [string, any] = useState("");
	const [keywordString, setKeywordString] = useState("");
	const {data: ytQueryResponseData, refetch: refetchYT} = trpc.yt.queryYTVideos.useQuery({
		query: keywordString
	});
    const postVideo = trpc.videos.postVideo.useMutation();
    const [ytResults, setYTResults] = useState([]);
    const [ytQueryType, setYTQueryType] = useState(QueriesTypesYT.Text);

    function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        switch (ytQueryType) {
            case QueriesTypesYT.Text:
				refetchYT();
				setYTResults(ytQueryResponseData);
                break;
            case QueriesTypesYT.Link:
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
		setQuery("")
    };

    function handleSelectQuery(e: React.FormEvent<HTMLInputElement>) {
        if (e.target.value === "Texto"
			&& ytQueryType === QueriesTypesYT.Link) {
            setYTQueryType(QueriesTypesYT.Text);
			setQuery("");
        } else {
            setYTQueryType(QueriesTypesYT.Link);
			setQuery("");
        }
    };

	function handleChange(key: string) {
		setQuery(key)
			/* setYTResults(ytQueryResponseData); */
		/* TODO chamar a fun*/
		throttledFunction("fodase");
    };


    useEffect(() => {
		console.log(ytQueryResponseData)
	},
			  [JSON.stringify(ytResults), JSON.stringify(ytQueryResponseData)]);

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
						<div className="flex flex-col">
							<input
							type="text"
							placeholder="Busca…"
							onChange={(e) => handleChange(e.target.value)}
							value={query}
							className="input input-bordered text-white" />

							{ytQueryType === QueriesTypesYT.Text ? 
							<CompletionResults
							ytResults={ytQueryResponseData}
							query={query}
							setQuery={setQuery}
							postVideo={postVideo} />
							: null
							}
						</div>
                        <button
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default YTQueryBox;

function CompletionItem({ result, setQuery, postVideo }) {
	function handleClick() {
		postVideo.mutate({
			name: result.snippet.title,
			link: "https://www.youtube.com/watch?v=" + result.id.videoId,
			ytID: result.id.videoId,
		});
		setQuery("");
	};

	function formatTitleString(text) {
		if (text.length > 43) {
			return text.substring(0, 38) + "…";
		} else {
			return text;
		}
	}
	
	return (
        <div onClick={handleClick}
        className="flex flex-row
border-y-0 hover:bg-lime-700 bg-white
text-base tracking-tight text-black w-100">
		{formatTitleString(result.snippet.title)}
        </div>
	);
};

function CompletionResults({ query, setQuery, ytResults, postVideo }) {
    if (typeof(ytResults) != 'undefined'
		&& query != "") {
        return (
            <div className="flex absolute top-16 flex-col z-50" >
                {ytResults.items.map((result) => {
					return <CompletionItem
					postVideo={postVideo}
					result={result}
							   setQuery={setQuery} />
                })};
            </div>
        );
    } else {
        return null;
    }
};
