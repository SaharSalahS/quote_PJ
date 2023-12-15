
var quoteArr=[{
    quote:'“Be yourself; everyone else is already taken.”',
    author:'― Oscar Wilde'}, //0
    {
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:'Marilyn Monroe'
    }, //1
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:'Marilyn Monroe'
    }, //2
    {
        quote:"So many books, so little time.",
        author:'― Frank Zappa'
    }, //3
    {
        quote:"A room without books is like a body without a soul",
        author:'Marcus Tullius Cicero'
    }, //4
]
var x={};
function getQoute(){
   document.getElementById('quote').innerHTML=quoteArr[0].quote;
   document.getElementById('author').innerHTML=quoteArr[0].author; 
  x=quoteArr[0];
   quoteArr.shift();
   quoteArr.push(x);
    
     
   }
   
