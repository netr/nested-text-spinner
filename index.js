  
'use strict'

// replace takes in the regex match and performs the splitting and random permutation selection
function replace (text, m) {

    // split strings
    let perms = m[2].split('|');
    // generate random number via length
    let rnd = randomNumber(0, perms.length);
    // grab new item
    let spun = perms[rnd];
    // replace {surrounded} text with new item
    text = text.replace(m[1], spun);

    return text

}

// spin is the global function that we call to initiate the recursion
function spin(text) {

    const regex = /(\{((([^\{\}]+)|())*)\})/;
    let m;

    // check if spins are still being found
    if ((m = regex.exec(text)) !== null) {
        // replace current text cluster and spin text
        text = replace(text, m)
    } else {
        // return plain text
        return text;
    }

    // spin again
    return spin(text)

}

// dirty random number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min; 
}

module.exports = spin