import { curry, reduce } from 'ramda'
import moment from 'moment'


const today = moment().startOf('day')
const yesterday = today.subtract(1, 'days')
const countRequired = 1

const isSameDay = (day1, day2) => {
    const lastDay = moment(day1).startOf('day')
    const nextDay =  moment(day2).startOf('day')
    return lastDay.isSame(nextDay)
}

const isWithinNDays = (n, prev, last) => { 
    const lastDay = moment(last).startOf('day')
    const prevDay =  moment(prev).startOf('day')
    return lastDay.isSameOrBefore(prevDay.add(n, 'days'))
}
    
console.log(moment(new Date().toString()))


const kWithinN = (k, n) => {
    const reducer = (stats, next) => {
        const { curStreak, maxStreak, count, last, lastConfirmed } = stats
        if(isSameDay(last, next)) {
            const nextCount = count + 1
            const nextCurStreak = 
            return { ...stats, count: count + 1 }
        } 
        const canConfirm = count >= k
        const nextConfirmed = canConfirm ? last : lastConfirmed
        const nextStats = { count: 0, last: next, lastConfirmed: nextConfirmed }
        if(isWithinNDays(n, nextConfirmed, next)) return { ...nextStats, curStreak: curStreak + 1, maxStreak }
        else return { ...nextStats, curStreak: 0,  }
    }
}
const nStreak = curry((n, { last, streak }, next) => {
    const lastDay = moment(last).startOf('day')
    const nextDay =  moment(next).startOf('day')
    // if(nextDay.isSame(lastDay)) return { last, streak, count: count + 1 }
    if(!nextDay.isSame(lastDay) && ) return { last: next, streak: streak + 1 }
    else return { last, streak }
})


const perfectStreak = reduce()

const realLifeStreak = data => 0

const doneToday = data => 0

const streaker = ({ last, count }, prev) => {
    if(isWithinNDays(1, prev, last)) return { last: prev, count: count + 1}
    return { last, count } 
}

const computeStreak = (days) => {
    const { count } = reduce(streaker, { last: moment(), count: 0 }, days)
    return count
}