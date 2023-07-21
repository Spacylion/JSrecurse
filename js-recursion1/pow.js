// 2
// pow = это от Math.pow  из коробки js
// работает как (5, 3) или (x, y)
// если нужно возводить в степень. 5 в 3 степени
//  то есть 5 *5 3 раза
//  то есть x * x * (3n-1)

function pow(x, y) {
  if (y === 0) return 1
  return x * pow(x, y - 1)
}

let x = 5
let y = 3
let result = pow(x, y)
console.log(result)

// function sunOfDigits(number) {}

// sumOfDigits(100) // 3
// sumOfDigits(1000) // 4
