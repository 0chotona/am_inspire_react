import { useContext } from "react";
import ctx from "./util/Context"

const ContextHeader = () => {
    const {isMode} = useContext(ctx);//구조분해
    return(
        <div>
            <header style={{
                background: isMode ? "black" : "white",
                color: isMode ? "white" : "black"
            }}>
                <h1>20대야 잘가라</h1>
            </header>
        </div>
    )
}

export default ContextHeader;