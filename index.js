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

function makeFirstUpper(input){
let suppliedString=input.slice();
//console.log(suppliedString);
  for(let i=1; i<suppliedString.length; i++){
    suppliedString=(suppliedString.charAt(0).toUpperCase()+suppliedString.substring((1)));
    //console.log(suppliedString.charAt(i-1))
      if((suppliedString.charAt(i-1)===" ")){
        
     suppliedString=suppliedString.substring(0,(i))+(suppliedString.charAt(i).toUpperCase()+suppliedString.substring((i+1)));
    console.log(suppliedString); 
    }
  
  }
  return suppliedString;
}

const titleCased = () => {
  return tutorials.map(makeFirstUpper);
}
