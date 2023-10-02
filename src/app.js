let pronoun = ['the', 'our', 'los', 'las', 'The'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];



function domainGen(start, middle, end) {
  let randomStart = (Math.floor(Math.random()) * start.length) + 1;
  let randomMiddle = (Math.floor(Math.random()) * middle.length) + 1;
  let randomEnd = (Math.floor(Math.random()) * end.length) + 1;
  
     return `${start[randomStart]} ${middle[randomMiddle]} ${end[randomEnd]}`;
  }

console.log(domainGen(pronoun, adj, noun));

// Update header text
document.querySelector('#domain').innerHTML = domainGen(pronoun, adj, noun);