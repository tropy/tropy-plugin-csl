'use strict'

const assert = require('assert')

describe('CSLPlugin', () => {
  const CSLPlugin = require('../index')

  it('exists', () => {
    assert.equal(typeof CSLPlugin, 'function')
  })

  it('responds to export hook', () => {
    assert.equal(typeof (new CSLPlugin).export, 'function')
  })
})
