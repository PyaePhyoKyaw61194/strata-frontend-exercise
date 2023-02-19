import zodErrorFormatter from "../../../utils/zodErrorFormatter";
import { leaderBoardSchema } from "../../../validations/leaderboard.validator";
import getLeaderboardAtom from "./getLeaderBoardAtom";

const getLeaderBoards = async (likesAtom: userLike[]) => {

    // Fetching from server
    const res = (await fetch('/api/leaderboard'));

    if (res.status !== 200) {
        throw new Error(`Leaderboard not found. ${res.status}`)
    }

    const data = await res.json()

    // validate and sanitize data
    const leaderBoardValidation = await leaderBoardSchema.safeParseAsync(data)
    if (leaderBoardValidation.success == false) {
        const errRes = zodErrorFormatter(leaderBoardValidation.error)
        throw new Error(errRes)
    }

    // Binding server data and atom(likes) data
    const updatedLeaderboards = getLeaderboardAtom(leaderBoardValidation.data, likesAtom)
    return { leaderboard: updatedLeaderboards }
}

export default getLeaderBoards