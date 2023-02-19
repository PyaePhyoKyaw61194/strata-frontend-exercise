import { FC } from "react"
import { ErrorComp, LinkButton } from "../components/base"

const CatchAll: FC = () => {
    return (
        <div className="w-full py-20 sm:flex sm:flex-col items-center justify-center space-y-12 text-gray-900 px-2">
            <ErrorComp message="Page Not Found" />
            <LinkButton name="Back" url="/leaderboard" />
        </div>
    )
}

export default CatchAll