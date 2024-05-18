let array= [
    {
      name: "Elbert Hubbard",
      quote: "A friend is someone who knows all about you and still loves you."
    },
    {
      name: "Mae West",
      quote: "You only live once, but if you do it right, once is enough."
    },
    {
      name: "Frank Zappa",
      quote: "Be the change that you wish to see in the world."
    },
    {
      name: "Mahatma Gandhi",
      quote: "So many books, so little time."
    },
    {
      name: "Robert Frost",
      quote: "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
      name: "Mark Twain",
      quote: "If you tell the truth, you don't have to remember anything."
    }
  ]
  
let outputNumber = 0;
function randomNumber() {
  number = parseInt(Math.random()*array.length);
  if (number === outputNumber) {
  let isEqualNumber = number >= array.length - 1 ? number - 1 : number + 1;
    outputNumber = isEqualNumber;
    return outputNumber;
  }else{
    outputNumber = number;
    return outputNumber;
  }
}

function displayQuote() {
  let index = randomNumber()
  document.getElementById("Quote").innerHTML= `"${array[index].quote}"`
  document.getElementById("Name").innerHTML= `--${array[index].name}`
}




































