import { useState, useCallback } from "react";

function useSwitch() {

    const [on, setOn] = useState(false);

    const toggle = useCallback(() => {
        setOn(prev => !prev);
    }, []);

    return [on, toggle];
}

export default useSwitch;