import { useState } from "react";

function Ex_02() {
    const [ count, setCount ] = useState(0)
    const handleAddCount = () => setCount(count + 1)


    return (
        <div className={'flex flex-col gap-6'}>
            EX_02 useEffect:

            <div>
                { count }
                <button onClick={handleAddCount}>+1</button>
            </div>
        </div>
    )
}

export default Ex_02