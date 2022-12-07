import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

async function queryYTAPI(key: String) {
    const keywordString = key.replace(/\s/g, "+");
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keywordString}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
	const response = await fetch(url)
	return response;
};

async function fetchVideoSnippetFromID (videoId: String) {
	const url =`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;
	const response = await fetch(url)
	return response;
}

export const ytRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
	queryYTVideos: publicProcedure
		.input(z.object({
			query: z.string(),
		}))
		.query(({ input }) =>
			{
			const keywordString = input?.query.replace(/\s/g, "+");
			const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keywordString}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
				console.log(url)
				return "lol";
			// const response = await fetch(url)
			// return response;
		}),
	postVideo: publicProcedure
		.input( z.object({
			name: z.string(),
			link: z.string(),
			ytID: z.string(),
		}))
		.mutation(({ ctx, input }) => {
			console.log("input", input);
			return ctx.prisma.Video.create({
				data: {
					name: `${input?.name}`,
					link: `${input?.link}`,
					ytID: `${input?.ytID}`,
				}
			})
		}),
	playVideo: publicProcedure
		.input( z.object({
			id: z.string(),
			startedPlayingAt: z.number(),
		}))
		.mutation(({ ctx, input }) => {
			console.log("input", input);
			return ctx.prisma.Video.update({
				where: {
					id: `${input?.id}`,
				},
				data: {
					started: true,
					startedPlayingAt: `${input?.startedPlayingAt}`,
				}
			})
		}),
	getAll: publicProcedure.query(({ ctx }) => {
		try {
			return ctx.prisma.Video.findMany({
				orderBy: {
					createdAt: "asc",
				}
			});
		} catch(error) {
			console.log("error", error);
		}
	}),
	deleteVideo: publicProcedure
		.input( z.object({
			id: z.string()
		}))
		.mutation(({ ctx, input }) => {
			return ctx.prisma.Video.delete({
				where: {
					id: `${input?.id}`
				}
			})
		}),
});
