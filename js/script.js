var upper = quotes.length;
var quoteNum;
var text;
var sources;
var words;
var top;
var colorNum;
var randColor;
var color;
var usedQuote;
var add;
var quoteDelete;

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


    quoteNum = Math.floor(Math.random() * upper);
    while (usedQuotes.indexOf(quotes[quoteNum]) !== -1) {
        quoteNum = Math.floor(Math.random() * upper);
    }

    usedQuotes.push(quotes[quoteNum]);

    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }
    console.log(quotes[quoteNum]);
    return quotes[quoteNum];

}


//Calculates random number based on the length of the Colors array

function getRandomColor( top ) {
    top = colors.length;
    colorNum = Math.floor(Math.random() * top);

    return colorNum;

}

//Prints random quote to the screen by placing it in html element with id quote-box

function printQuote( words ) {
        var selectedQuote = getRandomQuote();

        text = selectedQuote.quote;
        sources = selectedQuote.source;
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




//Prints new quote when 'show another quote' botton is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote);

//Changes background color when 'show another quote' botton is clicked

document.getElementById('loadQuote').addEventListener("click", printBackColor);
