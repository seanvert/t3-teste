import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const videosRouter = router({
	// TODO adicionar uma maneira de buscar videos
	// TODO adiconar um maneira de adicionar videos
	// TODO adicionar uma maneira de apagar videos
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
	postVideo: publicProcedure
		.input( z.object({
			name: z.string(),
			link: z.string()
		}))
		.mutation(({ ctx, input }) => {
			console.log("input", input);
			return ctx.prisma.Video.create({
				data: {
					name: `${input?.name}`,
					link: `${input?.link}`
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
