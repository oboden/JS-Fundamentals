const newFunc = function () {
  console.log(arguments.length)
}
const result = newFunc()
console.log(result);

if (result === 0) {
  console.log('No argument')
} else if (result === 1) {
  console.log('Argument found')
} else {
  console.log('Arguments found')
}
