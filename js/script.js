


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
    "#bae9ea",
    "#e1f7d5",
    "#ffbdbd",
    "#c9c9ff",
    "#f1cbff",
    "#57bcd9",
    "#ae70ed",
    "#80b584",
    "#ba21e0"
];

var upper = quotes.length;

//Empty array for used quotes

var usedQuotes = [];

//Empty array for used colors

var usedColors = [];

var color;
var words;

/*Calculates random number based on the length of the Quotes array
-Checks if new quote has been pushed into Used Quotes array
-If not, pushes new quote into Used Quotes array and returns new random quote
-Once Used Quotes array is full, resets to start again*/

function getRandomQuote() {


    do {
        var quoteNum = Math.floor(Math.random() * upper);
    } while (usedQuotes.indexOf(quotes[quoteNum]) != -1);


    usedQuotes.push(quotes[quoteNum]);

    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }
    console.log(quotes[quoteNum]);
    return quotes[quoteNum];

}


/*Calculates random number based on the length of the Colors array
-Checks if new color has been pushed into Used Colors array
-If not, pushes new color into Used Colors array and returns new random color
-Once Used Colors array is full, resets to start again*/

function getRandomColor( top ) {
    var top = colors.length;
    do {
        colorNum = Math.floor(Math.random() * top);
    } while (usedColors.indexOf(colors[colorNum]) != -1);

    usedColors.push(colors[colorNum]);

    if (usedColors.length === colors.length) {
        usedColors = [];
    }
    console.log(colors[colorNum]);
    return colors[colorNum];

}

//Prints random quote to the screen by placing it in html element with id quote-box

function printQuote( words ) {
        var selectedQuote = getRandomQuote();

        var text = selectedQuote.quote;
        var sources = selectedQuote.source;
        words = "<p class='quote'>" + text + "</p>" +
            "<p class='source'>" + sources + "</p>";


        document.getElementById('quote-box').innerHTML = words;




}




//Displays random color to screen as background by placing it in html element with id back-color

function printBackColor( color ) {

    var randColor = getRandomColor();
    color = "body {background-color: " + randColor + "; }";
    document.getElementById('back-color').innerHTML = color;

}


printQuote(words);

printBackColor(color);




//Prints new quote when 'show another quote' button is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote);

//Changes background color when 'show another quote' botton is clicked

document.getElementById('loadQuote').addEventListener("click", printBackColor);

//Calls print color function every 30 seconds
var interval2 = window.setInterval(printBackColor, 30000);


//Calls print quote function every 30 seconds
var interval1 = window.setInterval(printQuote, 30000);
