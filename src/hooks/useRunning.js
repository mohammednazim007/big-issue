import { useEffect, useState } from "react"


const useRunning = (txt = 'en-US') => {
    const [runnerTime, setRunnerTime] = useState(new Date().toLocaleTimeString(txt))

    // running timer with useEffect
    useEffect(() => {
        const clearInt = setInterval(timerFn, 1000)
        return () => clearInterval(clearInt)
    }, [])

    // timer function 
    const timerFn = () => {
        setRunnerTime(new Date().toLocaleTimeString(txt))
    }

    
    // return all timer utility function
    return {
        runnerTime
    }
}

export default useRunning
