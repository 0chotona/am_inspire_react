import { useState } from "react";
import ctx from "./components/context/util/Context";

const ContextApp = () => {
    const [isMode, setIsMode] = useState(false);

    return(
        <div>
            <ctx.Provider value={{isMode, useState}}>
                <ContextApp/>
            </ctx.Provider>
        </div>
    )
}

export default ContextApp;