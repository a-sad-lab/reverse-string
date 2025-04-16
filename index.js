export function reverseString(text) {
  if(typeof(text) !== 'string') {
    return
  }
  return Array.from(text).reverse().join('')
}

export default reverseString