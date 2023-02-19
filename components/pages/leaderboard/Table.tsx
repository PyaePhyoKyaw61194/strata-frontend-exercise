import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TleaderBoardValidation } from "../../../validations/leaderboard.validator";
import { LikeBadge, LinkButton } from "../../base";


const LeaderboardTable: FC<TleaderBoardValidation> = ({ leaderboard }) => {
    const tableRowClasses = classNames(
        'whitespace-nowrap px-4 py-2 font-medium text-gray-900',
    );
    const tableHeadClasses = classNames(
        'whitespace-nowrap px-4 py-2 font-medium text-gray-800 text-left',
    );
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 ">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr className="bg-red-500">
                        <th className={tableHeadClasses} >
                            No
                        </th>
                        <th className={tableHeadClasses} >
                            Image
                        </th>
                        <th className={tableHeadClasses} >
                            Name
                        </th>
                        <th className={tableHeadClasses} >
                            Score
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {leaderboard?.map((entry, index) => (
                        <tr key={entry.username}>
                            <td className={tableRowClasses}>
                                {index + 1}
                            </td>
                            <td className={tableRowClasses}>
                                <Link
                                    href={`/profile/${entry.username}`}
                                    className=" rounded  hover:bg-red-300"
                                >
                                    <Image
                                        alt="Profile Image"
                                        src={entry.profileImage}
                                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                        width='50'
                                        height='50'
                                    />
                                </Link>
                            </td>
                            <td className={tableRowClasses}>
                                <div>
                                    <Link
                                        href={`/profile/${entry.username}`}
                                        className=" rounded  hover:bg-red-300"
                                    >
                                        {entry.username}
                                    </Link>
                                </div>
                                {entry.isLike &&
                                    <div className="py-2">
                                        <LikeBadge />
                                    </div>
                                }
                            </td>
                            <td className={tableRowClasses}>{entry.score}</td>
                            <td className={tableRowClasses + " hidden sm:table-cell"}>
                                <LinkButton name="View" url={`/profile/${entry.username}`} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >

    )
}

export default LeaderboardTable