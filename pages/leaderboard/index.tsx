import { useAtom } from "jotai";
import React, { FC, Suspense, useState } from "react"
import { useQuery } from "react-query";
import { usersLikeAtom } from "../../atoms/usersLikeAtom";
import { ErrorComp, LoadingComp } from "../../components/base";
import { getLeaderBoards } from "../../helpers/pages/leaderboard";
import { TleaderBoardValidation } from "../../validations/leaderboard.validator";
const LeaderboardTable = React.lazy(() => import('../../components/pages/leaderboard/Table'));

const Leaderboard: FC = () => {

  const [leaderBoardData, setLeaderboardData] = useState<TleaderBoardValidation>()
  const [likesAtom,] = useAtom(usersLikeAtom)

  const { isLoading, error } = useQuery<TleaderBoardValidation, Error>({
    queryKey: 'getLeaderBoard',
    queryFn: async () => {
      return await getLeaderBoards(likesAtom)
    },
    onSuccess: (data) => {
      // sort with score descending
      data.leaderboard.sort((a, b) => b.score - a.score);
      // set the server data+ atom data(likes)
      setLeaderboardData(data)
    },
  })

  if (isLoading) return <LoadingComp />
  if (error) return <ErrorComp message={error.message} />

  return (
    <Suspense fallback={<LoadingComp />}>
      <div className="w-full py-20 sm:flex sm:flex-col items-center justify-center space-y-12 text-gray-900 px-2">
        {leaderBoardData && <LeaderboardTable leaderboard={leaderBoardData.leaderboard} />}
      </div>
    </Suspense>
  )

}


export default Leaderboard