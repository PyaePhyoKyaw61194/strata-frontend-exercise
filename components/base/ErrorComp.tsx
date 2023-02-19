import React, { FC } from "react";

const ErrorComp: FC<ErrorMessage> = ({ message }) => {
    return (
        <div className="p-20 w-full flex flex-col items-center justify-center space-y-12 text-gray-900">
            <div>
                <p >An error has occurred:  {message}.</p>
            </div>
        </div>
    )
}
export default React.memo(ErrorComp)