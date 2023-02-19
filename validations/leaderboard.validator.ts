import { z } from "zod";

const userSchema = z.object({
    username: z.string({
        required_error: "Name is required(zod)",
        invalid_type_error: "Name must be a string(zod)",
    }).min(1),
    profileImage: z.string({
        required_error: "profileImage is required(zod)",
        invalid_type_error: "profileImage must be a string(zod)",
    }).min(1),
    score: z.number({ required_error: "score is required (zod)" }).gte(0, { message: "score should not be minus value" }),
    /*     isLike: z.boolean().default(false) */
})

export const leaderBoardSchema = z.object({
    leaderboard: z.array(userSchema)
})
export type TleaderBoardValidation = z.infer<typeof leaderBoardSchema>
