const num: number = 20369

const countDigits = (num: number) => {
  let digits = 0

  while (num > 0) {
    num = Math.floor(num / 10)
    digits++
  }

  return digits
}

console.log(countDigits(num))

console.log(Array.from(String(num), Number).length)
