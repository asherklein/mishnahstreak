import {  range, always } from 'ramda'

export const getLearned = () => new Promise((res, rej) => {
  res(JSON.parse(localStorage.getItem('learned')) || [])
})

export const learnN = (n, date) => {
  const latest = range(0, n).map(always(date))   
  return getLearned()
    .then(learned => {
      console.log('learned', learned)
      const updated = learned.concat(latest)
      localStorage.setItem('learned', JSON.stringify(updated))
      return updated
    })
}