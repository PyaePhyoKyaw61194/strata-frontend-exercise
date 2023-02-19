import { TleaderBoardValidation } from "../../../validations/leaderboard.validator"

const getLeaderboardAtom = (
    data: TleaderBoardValidation,
    likesAtom: userLike[]
) => {
    const leaderboards = data.leaderboard
    const updatedLeaderboards = leaderboards.map(user => {
        // if we already manipulate likes, we will use the modified likes data
        const userIndex = likesAtom.findIndex(like => like.username === user.username)
        if (userIndex !== -1) {
            user.isLike = likesAtom[userIndex].isLiked
        }
        return user
    })
    return updatedLeaderboards
}

export default getLeaderboardAtom