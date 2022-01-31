// Import stylesheets
import './style.css';

// Write Javascript code!


var string = "Welcome to this Javascript Guide!";
console.log(string)

var reverseEntireSentence = doreverse(string,"")
console.log(reverseEntireSentence)

var reverseEachWord= doreverse(reverseEntireSentence," ")
console.log(reverseEachWord)

function doreverse(string, separator){
  return string.split(separator).reverse().join(separator)
}