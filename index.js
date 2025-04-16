export function reverseString(text) {
  if(typeof(text) !== 'string') {
    return
  }
  return Array.from('abc').reverse().join('')
}

export default reverseString