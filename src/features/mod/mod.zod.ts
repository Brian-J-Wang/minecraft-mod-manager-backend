import z from "zod";

export const ModRequestBodySchema = z.object({
    modId: z.string(),
    githubUrl: z.url().nullable().default(null),
    displayUrl: z.url().nullable().default(null),
});
