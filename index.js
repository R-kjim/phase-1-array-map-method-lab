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

const titleCased = () => {
  let outputArray=[]
  for(let i=0;i<tutorials.length;i++){
    let tSplit=tutorials[i]
    let tSplit1=tSplit.split(' ')
    let newArray=[]
    for(let j=0;j<tSplit1.length;j++){
      let newWord=tSplit1[j]
      let output1=newWord.charAt(0)
      let output2=output1.toUpperCase()
      let output=output2+newWord.slice(1)
      newArray.push(output)
    }
    let conc=newArray.join(' ')
    tutorials[i]=conc
    
  }
  return tutorials
}
console.log(titleCased())