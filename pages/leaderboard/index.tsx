import { FC, useState } from "react"
import { useQuery } from "react-query";
import { ErrorComp, LoadingComp } from "../../components/base";
import { LeaderboardTable } from "../../components/pages/leaderboard/Table";
import zodErrorFormatter from "../../utils/zodErrorFormatter";
import { leaderBoardSchema, TleaderBoardValidation } from "../../validations/leaderboard.validator";


const Leaderboard: FC = () => {

  const { isLoading, error, data: leaderBoardData } = useQuery<TleaderBoardValidation, Error>({
    queryKey: 'getLeaderBoard',
    queryFn: async () => {
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

      const validationRes = leaderBoardValidation.data
      validationRes.leaderboard.sort((a, b) => b.score - a.score);
      return validationRes
    },
  })

  if (isLoading) return <LoadingComp />
  if (error) return <ErrorComp message={error.message} />

  return (
    <div className="w-full py-20 sm:flex sm:flex-col items-center justify-center space-y-12 text-gray-900 px-2">
      {leaderBoardData && <LeaderboardTable leaderboard={leaderBoardData.leaderboard} />}
    </div>
  )

}


export default Leaderboard