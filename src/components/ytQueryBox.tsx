import React, { useState, useEffect } from "react";
import { trpc } from "../utils/trpc";
var YTAPIMock = {
	"kind": "youtube#searchListResponse",
	"etag": "JKdQFQZ5ts6YyCTVsDKqfRxYrFE",
	"nextPageToken": "CBQQAA",
	"regionCode": "BR",
	"pageInfo": {
		"totalResults": 915042,
		"resultsPerPage": 20
	},
	"items": [
		{
			"kind": "youtube#searchResult",
			"etag": "GFmTDwYn66FQGDqznRbWzbpBAhw",
			"id": {
				"kind": "youtube#video",
				"videoId": "K60JEbq-fQE"
			},
			"snippet": {
				"publishedAt": "2022-10-27T21:00:06Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "Djonga - conversa com uma menina branca (Clipe Oficial)",
				"description": "Ouça o álbum #ODonoDoLugar em todas as plataformas: https://onerpm.link/odonodolugar Se inscreva no canal e ative o sino de ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/K60JEbq-fQE/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/K60JEbq-fQE/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/K60JEbq-fQE/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2022-10-27T21:00:06Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "nN3M253njrFBRtmtu5--8_gckR0",
			"id": {
				"kind": "youtube#video",
				"videoId": "W1hA7Afggkg"
			},
			"snippet": {
				"publishedAt": "2022-12-02T15:00:11Z",
				"channelId": "UCU06XOgERkQV7xCsrNLTf4Q",
				"title": "Mc Hariel e Djonga - Mil Motivos (Clipe Oficial)",
				"description": "Ouça em todas as plataformas digitais: https://lnk.to/milmotivosharieldjonga Composição: MC Hariel e Djonga Produção Musical: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/W1hA7Afggkg/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/W1hA7Afggkg/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/W1hA7Afggkg/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "MC Hariel",
				"liveBroadcastContent": "none",
				"publishTime": "2022-12-02T15:00:11Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "FBT2B3DrwlpjdF1TtIBWNJwm4fc",
			"id": {
				"kind": "youtube#video",
				"videoId": "-CrD1n1loXs"
			},
			"snippet": {
				"publishedAt": "2020-11-13T14:00:10Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "Djonga - Procuro Alguém",
				"description": "PROCURO ALGUÉM DJONGA PRODUÇÃO MUSICAL COYOTE BEATZ | @Coyote Beatz | THIAGO BRAGA PRODUÇÃO ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/-CrD1n1loXs/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/-CrD1n1loXs/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/-CrD1n1loXs/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2020-11-13T14:00:10Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "u-JA3GDeQvBzAWrNqwp3jbeBZoc",
			"id": {
				"kind": "youtube#video",
				"videoId": "Hm_np5m_YM4"
			},
			"snippet": {
				"publishedAt": "2022-10-13T21:00:13Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "1. Djonga -  tôbem",
				"description": "Ouça o álbum #ODonoDoLugar em todas as plataformas: https://onerpm.link/odonodolugar Se inscreva no canal e ative o sino de ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Hm_np5m_YM4/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Hm_np5m_YM4/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Hm_np5m_YM4/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2022-10-13T21:00:13Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "EE9LFerIA1BIUUy6QpKY_R1xeys",
			"id": {
				"kind": "youtube#video",
				"videoId": "sEhOY55CSng"
			},
			"snippet": {
				"publishedAt": "2019-03-13T21:00:26Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "3 . Djonga - Leal",
				"description": "Faixa integrante do álbum \"Ladrão\". Ouça \"Ladrão\" em todas as plataformas: https://ONErpm.lnk.to/Ladrao Produção Musical: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/sEhOY55CSng/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/sEhOY55CSng/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/sEhOY55CSng/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2019-03-13T21:00:26Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "okDPXYXEUi-og1MbmF6C-_Flfl4",
			"id": {
				"kind": "youtube#video",
				"videoId": "Mx7_i-C4G0c"
			},
			"snippet": {
				"publishedAt": "2018-03-13T21:00:07Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "5 . Djonga - SOLTO pt. Hot",
				"description": "Faixa integrante do Albúm \"O Menino Que Queria Ser Deus - Djonga\" Direção Artística: Jacques Cigarra, Djonga Produção: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Mx7_i-C4G0c/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Mx7_i-C4G0c/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Mx7_i-C4G0c/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2018-03-13T21:00:07Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "LKiVSBERPJm7RYmwWInt0DY-SeY",
			"id": {
				"kind": "youtube#video",
				"videoId": "km1i3jklX_A"
			},
			"snippet": {
				"publishedAt": "2022-10-13T21:00:10Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "2. Djonga -  dom quixote",
				"description": "Ouça o álbum #ODonoDoLugar em todas as plataformas: https://onerpm.link/odonodolugar Se inscreva no canal e ative o sino de ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/km1i3jklX_A/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/km1i3jklX_A/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/km1i3jklX_A/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2022-10-13T21:00:10Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "ZvbUgkJKiYClonn_bCp3HejOizU",
			"id": {
				"kind": "youtube#video",
				"videoId": "vItmJnY-waY"
			},
			"snippet": {
				"publishedAt": "2019-03-13T20:59:56Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "7 . Djonga - Bença",
				"description": "Faixa integrante do álbum \"Ladrão\". Ouça \"Ladrão\" em todas as plataformas: https://ONErpm.lnk.to/Ladrao Produção Musical: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/vItmJnY-waY/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/vItmJnY-waY/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/vItmJnY-waY/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2019-03-13T20:59:56Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "FroSSsOV939CEMG4JU0M9Vj-De8",
			"id": {
				"kind": "youtube#video",
				"videoId": "GuYgMTAVVI0"
			},
			"snippet": {
				"publishedAt": "2018-03-13T21:00:18Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "2 . Djonga - JUNHO DE 94",
				"description": "Faixa integrante do Albúm \"O Menino Que Queria Ser Deus - Djonga\" Produção: CoyoteBeats, DJ Cost Voz: Djonga, Jeffinho ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/GuYgMTAVVI0/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/GuYgMTAVVI0/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/GuYgMTAVVI0/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2018-03-13T21:00:18Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "0p9UnHd_lmhjn0aU9Jr3s5hCxOQ",
			"id": {
				"kind": "youtube#video",
				"videoId": "qxXr2CYjHl8"
			},
			"snippet": {
				"publishedAt": "2020-03-13T21:00:53Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "6. Djonga - Hoje Não",
				"description": "Voz: Djonga Produção: Coyote Beatz | @Coyote Beatz Mix/Master: Arthur Luna Produção Executiva: Ceia Ent. | @Ceia Ent.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/qxXr2CYjHl8/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/qxXr2CYjHl8/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/qxXr2CYjHl8/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2020-03-13T21:00:53Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "ZeHn3XHrthI-QW2B4gXHcRuUEpI",
			"id": {
				"kind": "youtube#video",
				"videoId": "TJc3AomIUw0"
			},
			"snippet": {
				"publishedAt": "2022-10-14T07:11:20Z",
				"channelId": "UCqOQu7kLWXAo9j2rQhxb7uA",
				"title": "DJONGA - O DONO DO LUGAR (ÁLBUM COMPLETO)",
				"description": "DJONGA #ODonoDoLugar SE VOCÊ GOSTOU DO VIDEO CURTE, COMENTA, COMPARTILHA E INSCREVE-SE NO CANAL ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/TJc3AomIUw0/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/TJc3AomIUw0/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/TJc3AomIUw0/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Papidon Records",
				"liveBroadcastContent": "none",
				"publishTime": "2022-10-14T07:11:20Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "rMaGvvjXGJBneTxiv_1OZUTlQjU",
			"id": {
				"kind": "youtube#video",
				"videoId": "hTUEjPmX0tE"
			},
			"snippet": {
				"publishedAt": "2018-05-18T15:00:19Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "Djonga - JUNHO DE 94 (Clipe Oficial)",
				"description": "Direção: Gabriel Solano Roteiro: Djonga Assist. de Direção: Roberto Riva Direção de Fotografia: Gabriel Solano e Roberto Riva ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/hTUEjPmX0tE/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/hTUEjPmX0tE/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/hTUEjPmX0tE/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2018-05-18T15:00:19Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "2O5fX_Rf0l3345yamb0UbpA_6Hg",
			"id": {
				"kind": "youtube#video",
				"videoId": "0D84LFKiGbo"
			},
			"snippet": {
				"publishedAt": "2017-07-25T12:56:10Z",
				"channelId": "UCqrFwa5vueOTzGZ7NSlnvlQ",
				"title": "Perfil #22 - Djonga - Olho de Tigre (Prod. Malive/Slim)",
				"description": "Uma realização Pineapple Supply e Brainstorm Estúdio. Perfil é um projeto semanal onde beatmakers deixam seus beats em ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/0D84LFKiGbo/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/0D84LFKiGbo/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/0D84LFKiGbo/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "PineappleStormTV",
				"liveBroadcastContent": "none",
				"publishTime": "2017-07-25T12:56:10Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "PFj7EUI1f4pWWWxNUyZL7zp7e9g",
			"id": {
				"kind": "youtube#video",
				"videoId": "ZVOTMkuAtKQ"
			},
			"snippet": {
				"publishedAt": "2022-01-14T12:00:15Z",
				"channelId": "UC4UUYhqdOqXYm9qsi9htmBA",
				"title": "Djonga - As 10 Melhores Músicas - CD Completo - Full Álbum",
				"description": "Djonga - As 10 Melhores Músicas - CD Completo - Full Álbum [00:00] - Obstinado [04:11] - Hoje Não [08:01] - Junho De 94 [13:30] ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/ZVOTMkuAtKQ/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/ZVOTMkuAtKQ/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/ZVOTMkuAtKQ/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Dj BRA",
				"liveBroadcastContent": "none",
				"publishTime": "2022-01-14T12:00:15Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "52ymABdT6SeE3iR_h-7v2U2gHD0",
			"id": {
				"kind": "youtube#video",
				"videoId": "Gi-GlK26Nqk"
			},
			"snippet": {
				"publishedAt": "2021-03-13T15:02:48Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "8. Djonga - Eu",
				"description": "Voz: Djonga Produção: @Coyote Beatz Mixado no Estúdio Cia dos Técnicos por Arthur Luna Masterizado por Ricardo \"Menudo\" ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Gi-GlK26Nqk/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Gi-GlK26Nqk/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Gi-GlK26Nqk/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2021-03-13T15:02:48Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "BpMqE0HJiIgZ8-x7yTEM86zU0Hw",
			"id": {
				"kind": "youtube#video",
				"videoId": "Nrrj1Z7nY64"
			},
			"snippet": {
				"publishedAt": "2018-08-20T15:00:53Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "Djonga - A Música da Mãe (Clipe Oficial)",
				"description": "Ouça em todas as plataformas: https://ONErpm.lnk.to/Djonga Direção : Naio Rezende e Djonga Co-Direção: Luanna Exner ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/Nrrj1Z7nY64/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/Nrrj1Z7nY64/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/Nrrj1Z7nY64/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2018-08-20T15:00:53Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "iU_wUFx9iNUOj1NIeTOw98AhseY",
			"id": {
				"kind": "youtube#video",
				"videoId": "GaNgrC_dZ28"
			},
			"snippet": {
				"publishedAt": "2019-03-13T21:00:10Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "5 . Djonga - Tipo pt. MC Kaio",
				"description": "Faixa integrante do álbum \"Ladrão\". Ouça \"Ladrão\" em todas as plataformas: https://ONErpm.lnk.to/Ladrao Produção Musical: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/GaNgrC_dZ28/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/GaNgrC_dZ28/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/GaNgrC_dZ28/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2019-03-13T21:00:10Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "epu2TEd06YnJ02ftgp6D_6FUQ6k",
			"id": {
				"kind": "youtube#video",
				"videoId": "ayKblEzrfbQ"
			},
			"snippet": {
				"publishedAt": "2021-06-03T15:00:02Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "Djonga - Ea$y Money (Clipe Oficial)",
				"description": "Produção musical: @Coyote Beatz Mix/Master: @drakoz Direção: Túlio Cipó e Djonga Segunda Câmera: Manolo Drone Racer: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/ayKblEzrfbQ/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/ayKblEzrfbQ/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/ayKblEzrfbQ/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2021-06-03T15:00:02Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "QP3zRRhx-diRYfUMbpIv6ohz9_E",
			"id": {
				"kind": "youtube#video",
				"videoId": "tjD5_9idOVs"
			},
			"snippet": {
				"publishedAt": "2018-03-13T21:00:14Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "3 . Djonga - UFA pt. Sidoka &amp; Sant",
				"description": "Faixa integrante do Albúm \"O Menino Que Queria Ser Deus - Djonga\" Direção Artística: Jacques Cigarra, Djonga Produção: ...",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/tjD5_9idOVs/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/tjD5_9idOVs/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/tjD5_9idOVs/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2018-03-13T21:00:14Z"
			}
		},
		{
			"kind": "youtube#searchResult",
			"etag": "btQ7e5ZPfd1r0tGH6lCj1C8zYaA",
			"id": {
				"kind": "youtube#video",
				"videoId": "doRcD6DlgsM"
			},
			"snippet": {
				"publishedAt": "2020-03-13T20:59:58Z",
				"channelId": "UCNVifsYkXq5yzylNGvi1JJA",
				"title": "1. Djonga - O Cara de Óculos pt. Bia Nogueira",
				"description": "Voz: Djonga e Bia Nogueira Produção: Coyote Beatz | @Coyote Beatz Mix/Master: Arthur Luna Produção Executiva: Ceia Ent.",
				"thumbnails": {
					"default": {
						"url": "https://i.ytimg.com/vi/doRcD6DlgsM/default.jpg",
						"width": 120,
						"height": 90
					},
					"medium": {
						"url": "https://i.ytimg.com/vi/doRcD6DlgsM/mqdefault.jpg",
						"width": 320,
						"height": 180
					},
					"high": {
						"url": "https://i.ytimg.com/vi/doRcD6DlgsM/hqdefault.jpg",
						"width": 480,
						"height": 360
					}
				},
				"channelTitle": "Djonga",
				"liveBroadcastContent": "none",
				"publishTime": "2020-03-13T20:59:58Z"
			}
		}
	]
}

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

async function fetchVideoSnippetFromID (videoId: String, setState, setLoading) {
	const url =`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;
	const response = await fetch(url)
		.then((response) => {
			response.json()
		})
		.then((json) => {
			console.log("json", json);
			setState(json.snippet);
			setLoading(false);
		})
}

export function YTQueryBox() {
    const [query, setQuery] = useState("");
    const postVideo = trpc.videos.postVideo.useMutation();
    const [keywordString, setKeywordString] = useState("");
    const [ytResults, setYTResults] = useState([]);
    const [ytQueryType, setYTQueryType] = useState(queriesTypesYT.Text);
	const [videoSnippet, setVideoSnippet] = useState();
	const [isLoading, setLoading] = useState(true);
	
    function handleSubmit(e) {
        e.preventDefault();
        switch (ytQueryType) {
            case queriesTypesYT.Text:
                console.log("text");
                break;
            case queriesTypesYT.Link:
                const ytVideoID = getIDFromYTURL(query);
				/* fetchVideoSnippetFromID(query, setVideoSnippet, setLoading)
				   .then(() => { */
				/* fetch name, duration yt api */
				postVideo.mutate({
					name: "asd",
					link: query,
					ytID: ytVideoID,
				});
				/* }); */

                break;
            default:
                console.log("default");
                break;
        }

    }

    function handleSelectQuery(e) {
        if (e.target.value === "Texto") {
            setYTQueryType(queriesTypesYT.Text);
        } else {
            setYTQueryType(queriesTypesYT.Link);
        }
    }

    async function queryYTAPI(key: String) {
        setKeywordString(key.replace(/\s/g, "+"));
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet,contentDetails&maxResults=5&q=${keywordString}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
		
    }

    async function handleChange(key: String) {
        setQuery(key);
        // queryYTAPI(key)

        var results = YTAPIMock;
        /* await fetch(url); */
        /* results = await results
           .json()
           .then((json) => {

           }); */
        setYTResults(results.items);
    }

    function completionResults(ytResults) {
        if (ytResults.length > 0
            && ytQueryType === queriesTypesYT.Text) {
            return (
                <div
                    className="inline-block relative text-black"
                >
                    {ytResults.map((result, index) => {
                        function handleClick() {
							postVideo.mutate({
								name: result.snippet.title,
								link: "https://www.youtube.com/watch?v=" + result.id.videoId,
								ytID: result.id.videoId,
							})
                        }

                        if (index < 5) {
                            return (
                                <div onClick={handleClick}
                                     className="flex flex-row border-y-0 hover:bg-lime-700">
									<div>
										<img alt=""
											 src={result.snippet.thumbnails.default.url} />
									</div>
									<div
										className="flex justify-center items-center"
									>
										<p
											className=""
										>
											{result.snippet.title}
										</p>
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

    useEffect(() => { },
			  [JSON.stringify(ytResults)])

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
                    {completionResults(ytResults)}
                </div>
            </div>


        </div>
    );
}

export default YTQueryBox;
