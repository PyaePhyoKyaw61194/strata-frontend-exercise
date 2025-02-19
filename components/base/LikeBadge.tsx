import React, { FC } from "react";

const LikeBadge: FC = () => {
    return (
        <span
            className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ml-1 mr-1.5 h-4 w-4"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <p className="whitespace-nowrap text-sm">Liked</p>
        </span>
    )
}
export default React.memo(LikeBadge)