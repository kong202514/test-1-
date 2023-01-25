"use strict";
const x = "hello";
function reverseString(text) {
    let reverseText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];
    }
    return reverseText;
}
console.log(reverseString("qwe")); //olleh
function recursiveReverseString(text) {
    // return text[1]
    let reverseText = "";
    let text_length = text.length - 1;
    // return text_length
    if (text_length >= 0)
        return;
    reverseText += text[text_length];
    return reverseText;
    // recursiveReverseString(text_length - 1)
}
console.log(recursiveReverseString("qwe"));
// console.log(recursiveReverseString('hello'))//olleh
// console.log(recursiveReverseString('prayuth'))//htuyarp
