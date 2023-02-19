import { z } from "zod";

export const profileSchema = z.object({
    username: z.string({
        required_error: "Name is required(zod)",
        invalid_type_error: "Name must be a string(zod)",
    }).min(1),
    bio: z.string({
        required_error: "Bio is required(zod)",
        invalid_type_error: "Bio must be a string(zod)",
    }).min(1),
    age: z.number({ required_error: "age is required (zod)" }).gte(0, { message: "Age should not be minus value" }),
    twitter: z.string({
        required_error: "twitter is required(zod)",
        invalid_type_error: "twitter must be a string(zod)",
    }).min(1),
    email: z.string({
        required_error: "Email is required(zod)",
        invalid_type_error: "Email must be a string(zod)",
    }).min(1),
    birthday: z.string({
        required_error: "DOB is required(zod)",
        invalid_type_error: "DOB must be a string(zod)",
    }).min(1),
    profileImage: z.string({
        required_error: "profileImage is required(zod)",
        invalid_type_error: "profileImage must be a string(zod)",
    }).min(1),
    /*    isLike: z.boolean().default(false) */
})

export type TProfileValidation = z.infer<typeof profileSchema>