const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const title = tutorials.map((element) => {
    let splitElements = element.split(' ') 
    const splittedElements = splitElements.map((e) => {
      const titleCase = e.charAt(0).toUpperCase() + e.slice(1);
      return titleCase
    })
    return splittedElements.join(' ')
})
return title
}

console.log(titleCased())