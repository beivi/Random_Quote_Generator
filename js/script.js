var upper;
var quoteNum;
var text;
var sources;
var words;
var theWords;
var top;
var colorNum;
var randColor;
var color;
var usedQuote;
var number;

/*Array of different background colors I specifically selected.
    They will be randomly selected from this array.*/

var colors = [
    "#f49ac2",
    "#cb99c9",
    "#c23b22",
    "#ffd1dc",
    "#dea5a4",
    "#aec6cf",
    "#77dd77",
    "#cfcfc4",
    "#b39eb5",
    "#ffb347",
    "#b19cd9",
    "#ff6961",
    "#fdfd96",
    "#836953",
    "#779ecb",
    "#996fd6",
    "#559e83",
    "#bae9ea"
];

//Empty array for used quotes

var usedQuotes = [];


//Calculates random number based on the length of the Quotes array

function getRandomQuote() {
    upper = quotes.length;
    quoteNum = Math.floor(Math.random() * upper);

    return quoteNum;

}


//Calculates random number based on the length of the Colors array

function getRandomColor( top ) {
    top = colors.length;
    colorNum = Math.floor(Math.random() * top);

    return colorNum;

}

//Prints random quote to the screen by placing it in html element with id quote-box

function printQuote( words ) {
    getRandomQuote();

    text = quotes[quoteNum].quote;
    sources = quotes[quoteNum].source;
    words = "<p class='quote'>" + text + "</p>" +
        "<p class='source'>" + sources + "</p>";


    document.getElementById('quote-box').innerHTML = words;




}

//Displays random color to screen as background by placing it in html element with id back-color

function printBackColor( color ) {
    getRandomColor();
    randColor = colors[colorNum];
    color = "body {background-color: " + randColor + "; }";
    document.getElementById('back-color').innerHTML = color;

}


printQuote(words);

printBackColor(color);

console.log(usedQuotes.length);
//Prints new quote when 'show another quote' botton is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote);

//Changes background color when 'show another quote' botton is clicked

document.getElementById('loadQuote').addEventListener("click", printBackColor);