import { FC } from "react"
import { ErrorComp, LinkButton } from "../components/base"

const CatchAll: FC = () => {
    return (
        <ErrorComp message="Page Not Found" />
    )
}

export default CatchAll