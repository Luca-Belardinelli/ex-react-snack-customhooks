import { useState, useEffect } from "react";

function useDate() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervall = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(intervall);
        }
    }, [])


    return date;
}

export default useDate;