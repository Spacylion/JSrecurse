// 1
let a = 0

function recurse() {
  if (a === 5) return "done"

  a++
  return recurse()
}
recurse()

console.log(recurse())
console.log("a = ", a)
