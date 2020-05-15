/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
/**objects in quotes array store the individual properties of the quotes
actual string or the quote itself and the source which is also a string
Add a citation to at least one of the quotes
Add a year property to at least one of the quotes objects
**/
let quotes = [
  {
    quote: "Act as if what you do makes a difference. IT DOES.",
    source: "William James"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    tag: "Inspirational"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    source: "Zig Ziglar",
    citation: "Biscuits, Fleas, and Pump Handles"

  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    source: "Jimmy Dean",
    year: 1987
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  //create a variable to store in a random number
  let randomNum = Math.floor(Math.random() * Math.floor(5));
  //return random quote object
  return quotes[randomNum];
}

/***
 * `printQuote` function
***/

function printQuote() {
  //create a variable to store a random quote object from the getRandomQuote() function
  let storeRandomQuote = getRandomQuote();
  //create another variable to store the HTML string
  let storeString = `<p class="quote">${storeRandomQuote.quote}</p>
                      <p class="source">${storeRandomQuote.source}`

  //if statement for citation
  if (storeRandomQuote.citation !== undefined) {
    storeString += `<span class="citation">${storeRandomQuote.citation}</span>`;
  }
  //if statement for year
  if (storeRandomQuote.year !== undefined) {
    storeString += `<span class="year">${storeRandomQuote.year}</span>`;
  }

  //if statement for tag 
  if (storeRandomQuote.tag !== undefined) {
  	storeString += `, <span class="tag">${storeRandomQuote.tag}</span>`;
  }
  //closing paragraph
  storeString += `</p>`;
  //return full HTML string
  document.getElementById('quote-box').innerHTML = storeString;
}
  
//function to change colors
function changeColor() {
  //
}

//function to auto-refresh quotes 
function autoChange() {
  //use setInterval() for auto-refresh quotes 
  setInterval(); 	
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
//document.getElementsByID().addEventListener("click", )