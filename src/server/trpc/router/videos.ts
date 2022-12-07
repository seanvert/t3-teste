import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const videosRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
	postVideo: protectedProcedure
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
	deleteVideo: protectedProcedure
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
