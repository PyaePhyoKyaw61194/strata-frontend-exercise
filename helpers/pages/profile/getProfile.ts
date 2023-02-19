import { userInfo } from "os";
import zodErrorFormatter from "../../../utils/zodErrorFormatter";
import { profileSchema } from "../../../validations/profile.validator";

const getProfile = async (username: string) => {

    const res = (await fetch(`/api/profile/${username}`));

    if (res.status !== 200) {
        throw new Error(`Profile not found. ${res.status}`)
    }

    const data = await res.json()
    const profileValidation = await profileSchema.safeParseAsync(data)

    if (profileValidation.success == false) {
        const errRes = zodErrorFormatter(profileValidation.error)
        throw new Error(errRes)
    }

    return profileValidation.data

}

export default getProfile