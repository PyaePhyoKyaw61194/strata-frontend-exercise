import React, { FC } from "react";
import LinkButton from "./LinkButton";

const ErrorComp: FC<ErrorMessage> = ({ message }) => {
    return (
        <div className="w-full py-20 sm:flex sm:flex-col items-center justify-center space-y-12 text-gray-900 px-2">
            <p >An error has occurred:  {message}.</p>
            <LinkButton name="Back" url="/leaderboard" />
        </div>
    )
}
export default React.memo(ErrorComp)