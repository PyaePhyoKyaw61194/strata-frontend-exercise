import Link from "next/link"
import React, { FC } from "react"

const LinkButton: FC<TLinkButton> = (props) => {
    return (
        <div className=" py-5">
            <Link
                className="inline-block py-3 px-12 rounded border border-red-100 bg-red-500 text-sm font-medium text-white   focus:outline-none focus:ring  "
                href={props.url}
            >
                {props.name}
            </Link>
        </div>
    )
}

export default React.memo(LinkButton)