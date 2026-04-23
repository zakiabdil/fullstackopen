const x = 1
let y = 5
y = x + y
console.log(y)
const t = [1, -1, 3]
t.push(5)
console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})  
const t2 = t.concat(5)
console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed