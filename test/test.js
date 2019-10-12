const assert = require('assert')
    , { decode, detach, attach, hasAttachment, identifier, extract } = require('../index')
    , string = 'The quick brown fox jumps over the lazy dog'

describe('invisible-attachment', () => {
  describe('#hasAttachment()', () => {
    it('should not detect an attachment on a plain string', () => {
      assert.equal(hasAttachment(string), false)
    })
    it('should detect an attachment if identifier present', () => {
      assert.equal(hasAttachment(string + identifier), true)
    })
  })

  describe('#attach()', () => {
    it('should not be possible to attach anything else than a number', () => {
      assert.throws(() => attach(string, string), Error)
    })

    it('should throw an error in case there already is an attachment', () => {
      assert.throws(() => attach(attach(string, 1), 1), Error)
    })

    it('should return a string with an insivible attachment', () => {
      assert.equal(hasAttachment(attach(string, 1)), true)
    })
  })

  describe('#detach()', () => {
    it('should throw an error in case there is no invisible attachment', () => {
      assert.throws(() => detach(string), Error)
    })

    it('should return the attachment of an attached string', () => {
      assert.equal(detach(string + identifier + string), string)
    })
  })

  describe('#decode()', () => {
    it('should be able to correctly decode an invisible attachment', () => {
      for (let i=0; i<=9999; i++)
        assert.equal(decode(detach(attach(string, i))), i)
    })
  })

  describe('#extract()', () => {
    it('should work as a shortcut for detatch and decode', () => {
      assert.equal(extract(attach(string, 1337)), 1337)
    })
  })
})
