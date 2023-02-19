import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TProfileValidation } from "../../../validations/profile.validator";
import { LikeButton } from "../../base";

type CardFunctionProps = {
    onLikeButtonClicked: () => void;
};

const ProfileCard: FC<TProfileValidation & CardFunctionProps> = (props) => {

    return (
        <div
            className=" max-w-md  block rounded-lg border border-gray-100 p-4"
        >
            <div className="justify-between sm:flex mt-4 sm:pr-4">
                <div className="flex-shrink-0 sm:block">
                    <Image
                        alt="Profile Image"
                        src={props.profileImage}
                        width='50'
                        height='50'
                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">
                        {props.username}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-gray-600">{props.birthday} ( {props.age} years old )</p>
                </div>
            </div>
            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                    {props.bio}
                </p>
            </div>
            <dl className="w-full items-center justify-center py-2  sm:p-4 inline-flex">
                <div className="flex flex-col-reverse ">
                    <dt className="text-sm font-medium text-amber-500">
                        <Link href={`mailto:${props.email}`}>
                            {props.email}
                        </Link></dt>
                    <dd className="text-xs text-amber-500">
                        <Link href={`https://twitter.com/${props.twitter}`}>
                            {props.twitter}
                        </Link>
                    </dd>
                </div>
                <div className="px-2 py-2 sm:py-0">
                    <LikeButton onClick={props.onLikeButtonClicked} isLiked={props.isLike} />
                </div>
            </dl >
        </div >

    )
}

export default ProfileCard