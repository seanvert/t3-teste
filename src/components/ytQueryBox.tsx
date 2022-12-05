import React, { useState, useEffect } from "react";

var YTAPIMock = {
	"kind": "youtube#searchListResponse",
	"etag": "htyHRT7F9r71melY3x1utiFYLpM",
	"nextPageToken": "CBQQAA",
	"regionCode": "BR",
	"pageInfo": {
		"totalResults": 559456,
		"resultsPerPage": 20
	},
	"items": [
		{
			"kind": "youtube#searchResult",
			"etag": "glSRU754gcoG51tNvIm3NEafFYo",
			"id": {
				"kind": "youtube#video",
				"videoId": "x2rQzv8OWEY"
			},
			"snippet": {
				"publishedAt": "2015-07-31T14:37:13Z",
				"channelId": "UCYp3rk70ACGXQ4gFAiMr1SQ",
				"title": "Rammstein - Engel (Official Video)",
				"description": "Order the new album: https://rammstein.lnk.to/Zeit ▻ Website: http://www.rammstein.com ▻ RammsteinShop: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/x2rQzv8OWEY/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/x2rQzv8OWEY/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/x2rQzv8OWEY/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Rammstein Official",
				"liveBroadcastContent": "none",
				"publishTime": "2015-07-31T14:37:13Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "xnOoq1cG1iQtQxs996PGGfbJ0ZQ",
			"id": {
				"kind": "youtube#video",
				"videoId": "eSaa3vC_n2k"
			},
			"snippet": {
				"publishedAt": "2015-09-25T14:00:01Z",
				"channelId": "UCYp3rk70ACGXQ4gFAiMr1SQ",
				"title": "Rammstein - Engel (Live from Madison Square Garden)",
				"description": "\"Rammstein In Amerika\" (DVD & Blu-ray), a lavish package containing a major new documentary about the band, Rammstein In ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/eSaa3vC_n2k/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/eSaa3vC_n2k/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/eSaa3vC_n2k/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Rammstein Official",
				"liveBroadcastContent": "none",
				"publishTime": "2015-09-25T14:00:01Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "KEccTALo0bTDt9iHs8Pl4xRZ1QI",
			"id": {
				"kind": "youtube#video",
				"videoId": "PFu8o98nnU4"
			},
			"snippet": {
				"publishedAt": "2019-05-16T15:00:21Z",
				"channelId": "UC2qemM99Sm6mnGdafrWSwCw",
				"title": "Rammstein - Engel (Official Audio)",
				"description": "Angel Sehnsucht album - Rammstein.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/PFu8o98nnU4/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/PFu8o98nnU4/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/PFu8o98nnU4/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Rammstein Unofficial",
				"liveBroadcastContent": "none",
				"publishTime": "2019-05-16T15:00:21Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "AINGUPp3ZLTZeLYOCgvWdkFmgXw",
			"id": {
				"kind": "youtube#video",
				"videoId": "hNwMfgHcz5k"
			},
			"snippet": {
				"publishedAt": "2018-07-01T09:20:41Z",
				"channelId": "UCs6GGpd9zvsYghuYe0VDFUQ",
				"title": "Engel",
				"description": "Provided to YouTube by Universal Music Group Engel · Rammstein Made In Germany 1995 - 2011 ℗ 2011 Vertigo/Capitol, ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/hNwMfgHcz5k/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/hNwMfgHcz5k/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/hNwMfgHcz5k/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Rammstein - Topic",
				"liveBroadcastContent": "none",
				"publishTime": "2018-07-01T09:20:41Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "AhQlaY6Mz0ld8b7WX8wx8L5TYiw",
			"id": {
				"kind": "youtube#video",
				"videoId": "jK6mI9bhRIc"
			},
			"snippet": {
				"publishedAt": "2017-01-06T19:35:18Z",
				"channelId": "UC8b-FjvfVRm7DTbpnK26lzg",
				"title": "Rammstein - Engel (Ao Vivo) - Legendado Português BR",
				"description": "Texto sobre a letra de Engel: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/jK6mI9bhRIc/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/jK6mI9bhRIc/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/jK6mI9bhRIc/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Richard Orwell",
				"liveBroadcastContent": "none",
				"publishTime": "2017-01-06T19:35:18Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "Kwredlv-TRMF6RcIQPwIQNblKc4",
			"id": {
				"kind": "youtube#video",
				"videoId": "jRxW5Vzeo0A"
			},
			"snippet": {
				"publishedAt": "2017-06-23T15:18:59Z",
				"channelId": "UCYp3rk70ACGXQ4gFAiMr1SQ",
				"title": "Rammstein - Engel (Live at Rock im Park 2017)",
				"description": "Order the new album: https://rammstein.lnk.to/Zeit ▻ Website: http://www.rammstein.com ▻ RammsteinShop: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/jRxW5Vzeo0A/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/jRxW5Vzeo0A/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/jRxW5Vzeo0A/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Rammstein Official",
				"liveBroadcastContent": "none",
				"publishTime": "2017-06-23T15:18:59Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "SIY5_gq-Va3t7AJFT5R7HxeEOKM",
			"id": {
				"kind": "youtube#video",
				"videoId": "d8mcqmzkzHo"
			},
			"snippet": {
				"publishedAt": "2018-09-11T18:42:28Z",
				"channelId": "UCqPwNY3U4v59KZbcBwAb3Tw",
				"title": "Engel   Rammstein Lyrics and English Translation",
				"description": "www.montagetigalop.com.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/d8mcqmzkzHo/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/d8mcqmzkzHo/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/d8mcqmzkzHo/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Ranchanaly",
				"liveBroadcastContent": "none",
				"publishTime": "2018-09-11T18:42:28Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "ONIv8I4KVR1GDlmwXLBrksB24Uk",
			"id": {
				"kind": "youtube#video",
				"videoId": "VS07GMUcoaI"
			},
			"snippet": {
				"publishedAt": "2011-06-19T20:50:04Z",
				"channelId": "UCHWKKnDXTIEmom6nTdJTKwQ",
				"title": "Rammstein - Engel Live aus Berlin [Full HD 1080p]",
				"description": "Like: http://www.facebook.com/DeathMetalAoExtremo Rammstein Live Aus Berlin 1998 DVD.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/VS07GMUcoaI/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/VS07GMUcoaI/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/VS07GMUcoaI/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Death Metal Ao Extremo",
				"liveBroadcastContent": "none",
				"publishTime": "2011-06-19T20:50:04Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "nFzW_6amSZA5anF4PJVC2zVIaEM",
			"id": {
				"kind": "youtube#video",
				"videoId": "hj4K_DI7oMM"
			},
			"snippet": {
				"publishedAt": "2022-04-16T03:52:05Z",
				"channelId": "UC4QBCWi95rZ_CD3glzNVEZg",
				"title": "Rammstein - Engel (Live from Madison Square Garden)",
				"description": "Rammstein in Amerika is the fifth DVD and third live recording of the German industrial metal band Rammstein. It documents the ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/hj4K_DI7oMM/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/hj4K_DI7oMM/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/hj4K_DI7oMM/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "X_Gerish_X",
				"liveBroadcastContent": "none",
				"publishTime": "2022-04-16T03:52:05Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "TVPDaz5Ju00pOp_sn2EoeOrxaWE",
			"id": {
				"kind": "youtube#video",
				"videoId": "Ix86v0ylY6o"
			},
			"snippet": {
				"publishedAt": "2019-11-09T16:01:39Z",
				"channelId": "UC8b-FjvfVRm7DTbpnK26lzg",
				"title": "Rammstein - Engel - Legendado Português BR",
				"description": "Um texto meu sobre a música: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Ix86v0ylY6o/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Ix86v0ylY6o/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Ix86v0ylY6o/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Richard Orwell",
				"liveBroadcastContent": "none",
				"publishTime": "2019-11-09T16:01:39Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "niCtaDmueosrwrqhp5Q9YeaiY1w",
			"id": {
				"kind": "youtube#video",
				"videoId": "OmQ2712GP_o"
			},
			"snippet": {
				"publishedAt": "2022-08-16T15:44:19Z",
				"channelId": "UC8b-FjvfVRm7DTbpnK26lzg",
				"title": "Rammstein - Engel (Live aus Berlin) - Legendado Português BR",
				"description": "https://www.instagram.com/richard_orwell/ Tradução em Português BR de Engel (do Rammstein) em HQ. All rights belong to their ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/OmQ2712GP_o/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/OmQ2712GP_o/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/OmQ2712GP_o/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Richard Orwell",
				"liveBroadcastContent": "none",
				"publishTime": "2022-08-16T15:44:19Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "aS_frDlJ1PXMdhj7sJKpYViMtM4",
			"id": {
				"kind": "youtube#video",
				"videoId": "E_JWJLH4khw"
			},
			"snippet": {
				"publishedAt": "2013-08-26T11:17:47Z",
				"channelId": "UCOBt3hkRjJps24bFY3ifC0A",
				"title": "Rammstein - Engel (lyrics) HD",
				"description": "More Video http://temiipl.manifo.com/",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/E_JWJLH4khw/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/E_JWJLH4khw/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/E_JWJLH4khw/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "3temii",
				"liveBroadcastContent": "none",
				"publishTime": "2013-08-26T11:17:47Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "mBW6DFebgedEhkrcssmYoBblVdk",
			"id": {
				"kind": "youtube#video",
				"videoId": "CmrSLwotDms"
			},
			"snippet": {
				"publishedAt": "2022-06-19T15:54:47Z",
				"channelId": "UC8b-FjvfVRm7DTbpnK26lzg",
				"title": "Rammstein - Engel (In Amerika) - Legendado Português BR",
				"description": "https://www.instagram.com/richard_orwell/ Tradução em Português BR de Engel (do Rammstein) em HQ. All rights belong to their ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/CmrSLwotDms/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/CmrSLwotDms/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/CmrSLwotDms/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Richard Orwell",
				"liveBroadcastContent": "none",
				"publishTime": "2022-06-19T15:54:47Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "iVlT7UR2RTUbmSIb8VaznDqpGbI",
			"id": {
				"kind": "youtube#video",
				"videoId": "tIcOIc7AFww"
			},
			"snippet": {
				"publishedAt": "2007-11-14T15:24:47Z",
				"channelId": "UCNzxFXGE-GzDOtqBhXjJlCg",
				"title": "Evangelion : Rammstein - Engel",
				"description": "Neon Genesis Evangelion AMV (not made by me) Music: Rammstein - Engel.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/tIcOIc7AFww/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/tIcOIc7AFww/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/tIcOIc7AFww/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Mowie Berlin",
				"liveBroadcastContent": "none",
				"publishTime": "2007-11-14T15:24:47Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "ogIVXy3TtlfBm3w3vA0kCrkZpsc",
			"id": {
				"kind": "youtube#video",
				"videoId": "nsNXT1Tw7vU"
			},
			"snippet": {
				"publishedAt": "2022-11-11T15:00:08Z",
				"channelId": "UCK5G-rUDSKKUXeMkrL7Bs1w",
				"title": "It&#39;s that whistle! Vocal ANALYSIS of Rammstein&#39;s &quot;Engel&quot; live performance at Madison Square Garden!",
				"description": "It's not shocking that one of my favorite reactions so far has been Rammstein's Till Lindeman performing \"Mein Herz Brennt\" to the ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/nsNXT1Tw7vU/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/nsNXT1Tw7vU/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/nsNXT1Tw7vU/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "The Charismatic Voice",
				"liveBroadcastContent": "none",
				"publishTime": "2022-11-11T15:00:08Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "t0WHlvb2kMKdoEysZ5P1lE4xX2E",
			"id": {
				"kind": "youtube#video",
				"videoId": "jwPEK3G6Y8g"
			},
			"snippet": {
				"publishedAt": "2022-05-21T10:05:49Z",
				"channelId": "UCXTfdErr0yEbNdqnv4XO8bw",
				"title": "Rammstein LIVE Engel (Skala &amp; Kolacny version) - Leipzig, Germany 2022 (May 20th)",
				"description": "Rammstein 2022-05-20 Leipzig, Germany Red Bull Arena Skala & Kolacny version.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/jwPEK3G6Y8g/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/jwPEK3G6Y8g/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/jwPEK3G6Y8g/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "jederlacht",
				"liveBroadcastContent": "none",
				"publishTime": "2022-05-21T10:05:49Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "u1yCkfbalaWMv0RgtEin5QtYIA8",
			"id": {
				"kind": "youtube#video",
				"videoId": "QQo5JFQpn3Q"
			},
			"snippet": {
				"publishedAt": "2022-10-03T20:44:41Z",
				"channelId": "UCM4w1ib6UR-nclaSXZ5IFHg",
				"title": "Engel - Rammstein Live Mexico 2022",
				"description": "Foro Sol 02/10/2022.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/QQo5JFQpn3Q/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/QQo5JFQpn3Q/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/QQo5JFQpn3Q/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Dan Hdz",
				"liveBroadcastContent": "none",
				"publishTime": "2022-10-03T20:44:41Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "HTekD4wPL7Xe9G-jb-7XW5QqcQQ",
			"id": {
				"kind": "youtube#video",
				"videoId": "Qdjskg6soW0"
			},
			"snippet": {
				"publishedAt": "2020-11-28T16:00:09Z",
				"channelId": "UCF1C0D6_iBHcYigsPrzvXMQ",
				"title": "RAMMSTEIN - Engel | GUITAR COVER",
				"description": "Rammstein - Engel - Album: Sehnsucht - guitar cover Jassy J =) Happy metal weekend everyone! This one is a Rammstein classic ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Qdjskg6soW0/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Qdjskg6soW0/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Qdjskg6soW0/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "JJ's One Girl Band",
				"liveBroadcastContent": "none",
				"publishTime": "2020-11-28T16:00:09Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "a6kFsQC4Xnhy1ymUYyV2KoZvPUg",
			"id": {
				"kind": "youtube#video",
				"videoId": "ZruYV90M4ts"
			},
			"snippet": {
				"publishedAt": "2014-08-24T22:13:14Z",
				"channelId": "UCgzBLnRKIMm5nwSMuBOvHCA",
				"title": "Rammstein - Engel (English Version)",
				"description": "",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/ZruYV90M4ts/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/ZruYV90M4ts/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/ZruYV90M4ts/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Kamin corp",
				"liveBroadcastContent": "none",
				"publishTime": "2014-08-24T22:13:14Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "svS7gPezx2hRsgTBpE3jjlaLLnw",
			"id": {
				"kind": "youtube#video",
				"videoId": "wM8ew2YGxq8"
			},
			"snippet": {
				"publishedAt": "2022-09-24T19:12:47Z",
				"channelId": "UClXVOr5c2ftWwfFudpk9xHQ",
				"title": "Rammstein- Engel (Live in Los Angeles, CA) (Sept 23, 2022)",
				"description": "Live at the LA Memorial Coliseum in Los Angeles, CA Day 1. Performing Engel in a soft classical piano version in the pit.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/wM8ew2YGxq8/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/wM8ew2YGxq8/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/wM8ew2YGxq8/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Anthony Zuniga",
				"liveBroadcastContent": "none",
				"publishTime": "2022-09-24T19:12:47Z"
			}
		}
	]
}

export function YTQueryBox () {
	const [query, setQuery] = useState("");
	const [keywordString, setKeywordString] = useState("");
	const [ytResults, setYTResults] = useState([]);
	
	function handleSubmit(e) {
		e.preventDefault();
		/* postVideo.mutate({
		   name:  "pri leite",
		   link: link,
		   }); */
	}

	async function queryYTAPI (key) {
		console.log("key", key)
		setKeywordString(key.replace(/\s/g, "+"));
		var url = await `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keywordString}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
		console.log(url);
	}
	
	function handleChange(key) {
		setQuery(key)
		console.log(key);
		return queryYTAPI(key)


		var results = YTAPIMock;
		/* await fetch(url); */
		/* results = await results.json(); */
		/* console.log(results.items); */
		setYTResults(results.items);
	}
	
	return (
		<div className="text-white">
			<div className="form-control">
				<div className="input-group">
					<select className="text-black select select-bordered">
						<option disabled>Tipo de busca</option>
						<option selected>Texto</option>
						<option>Link</option>
					</select>
					<input type="text"
						   placeholder="Busca…"
					onChange={(e) => handleChange(e.target.value)}
						   className="input input-bordered text-black" />
					<button
						onClick={(e) => handleSubmit(e)}
						className="btn btn-square">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
					</button>
				</div>
			</div>

			{ytResults?.map((result, index) => {
				<div>
					{result.snippet.description}
				</div>
			})}
		</div>
	);
}

export default YTQueryBox;
