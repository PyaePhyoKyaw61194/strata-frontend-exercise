import React, { FC } from "react";

const LoadingComp: FC = () => {
    return (
        <div className="w-full flex flex-col p-20 items-center justify-center space-y-12 text-gray-900">
            <div>
                <p >Loading....</p>
            </div>
        </div>
    )
}

export default React.memo(LoadingComp)