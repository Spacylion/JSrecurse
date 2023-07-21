let a = 0

function recurse() {
  if (a === 5) return

  a++
  recurse()
}
recurse()

console.log(a)
