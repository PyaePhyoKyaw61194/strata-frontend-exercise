import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react"
import classNames from 'classnames';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLiked: boolean
}

const LikeButton: FC<CustomButtonProps> = (
    {
        children,
        className,
        isLiked = false,
        ...props }
) => {

    const buttonClasses = classNames(
        'flex items-center justify-center rounded-xl border-4 border-t-white px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-red-100',
        {
            'bg-green-500': isLiked === true,
            ' bg-red-500': isLiked === false,
        },
        className
    );

    return (
        <button
            {...props}
            className={buttonClasses}
        >
            {isLiked ? "Liked" : "Like"}
            <span aria-hidden="true" role="img" className="ml-1.5">
                \uD83D\uDC4D
            </span>
        </button>

    )
}
export default LikeButton