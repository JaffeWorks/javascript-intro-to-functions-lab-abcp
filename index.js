function 
shout(string) {
  return string.toUpperCase()
}
function
whisper(string){
  return string.toLowerCase()
}
function
logWhisper(string){
  console.log(string.toLowerCase())
}
function
logShout(string){
  console.log(string.toUpperCase())
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string)
  return ("I can't hear you")
}
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")