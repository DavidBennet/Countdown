import { useState } from "react"


export const useCountdown = (date) => {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const countdown = () => {
        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
        const interval = countDate - now

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24

        const daysNumber = Math.floor(interval / days)
        const hoursNumber = Math.floor((interval % days) / hours)
        const minutesNumber = Math.floor((interval % hours) / minutes)
        const secondsNumber = Math.floor((interval % minutes) / seconds)

        setDay(daysNumber)
        setHour(hoursNumber)
        setMinute(minutesNumber)
        setSecond(secondsNumber)
    }

    setInterval(countdown, 1000)

    return [day, hour, minute, second];

}