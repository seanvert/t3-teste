import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";


export const ytRouter = router({
    queryYTVideoInfoUsingID: publicProcedure
        .input(z.object({
            query: z.string(),
        }))
        .query(({ input }) => {
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${input?.query}&key=${process.env.YOUTUBE_API_KEY}`;

            const queryResponse = fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return json;
                })

            return queryResponse;
        }),
    queryYTVideos: protectedProcedure
        .input(z.object({
            query: z.string(),
        }))
        .query(({ input }) => {
            console.log(" youtube videos", input);
            const keywordString = `${input?.query}`.replace(/\s/g, "+");
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keywordString}&type=video&key=${process.env.YOUTUBE_API_KEY}`;
            const queryResponse = fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return json;
                })

            return queryResponse;
        }),
});
