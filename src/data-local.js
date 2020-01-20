import {  range, always, dropLast, sort, ascend, identity } from 'ramda'

export const getLearned = () => new Promise((res, rej) => {
  res(JSON.parse(localStorage.getItem('learned')) || [])
})

export const learnN = (n, date) => {   
  return getLearned()
    .then(learned => {
      const updated = sort(ascend(identity), n > 0 ? learned.concat(range(0, n).map(always(date))) : dropLast(Math.abs(n), learned))
      localStorage.setItem('learned', JSON.stringify(updated))
      return updated
    })
}