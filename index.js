const identifier = '\uFEFF'
    , charset = ['\u200B', '\uFEFF', '\u2800']
    , errorTag = '[invisible-attachment]'

const encode = number => {
  let result = ''

  while (number > charset.length - 1) {
    result = charset[number % charset.length] + result
    number = Math.floor(number / charset.length)
  }
  result = charset[number] + result
  return result
}

const decode = string => {
  let result = 0
  for(let i = 0; i < string.length; i++)
    result += charset.indexOf(string.charAt(string.length - i - 1)) * Math.pow(charset.length, i)
  return result
}

const hasAttachment = target =>
  target.indexOf(identifier) !== -1

const attach = (target, attachment) => {
  if (typeof attachment !== 'number')
    throw new Error(errorTag + ' attachment must be numeric')

  if (hasAttachment(target))
    throw new Error(errorTag + ' target already has attachment attached')

  return target + identifier + encode(attachment)
}

const detach = target => {
  if (!hasAttachment(target))
    throw new Error(errorTag + ' target does not have attachment')

  return target.substr(target.indexOf(identifier) + 1)
}

const extract = string =>
  decode(detach(string))

module.exports = {
  attach,
  extract,

  detach,
  decode,
  hasAttachment,

  identifier,
  charset
}