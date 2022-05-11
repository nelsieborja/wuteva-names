import {expect} from 'chai'
import wutevaNames from '.'

describe('wuteva-names', () => {
  it('should have a list of all available names', () => {
    expect(wutevaNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(wutevaNames.random()).to.satisfy(isIncludedIn(wutevaNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
