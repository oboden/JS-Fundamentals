const newFunc = function (name) {
  console.log(`New person ${name}`)
}
console.log(newFunc('Michael'));

if (newFunc()) {
  console.log('No argument')
} else if (newFunc('')) {
  console.log('Argument found')
} else {
  console.log('Arguments found')
}