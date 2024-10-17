//              ---- CONCATANATE_SENTENCES_METHOD ----
function concatenateSentence()
{
    var phraseStr1 = "It's Better ";
    var phraseStr2 = "To Burn Out. ";
    var phraseStr3 = "Than to ";
    var phraseStr4 = "Fade Away! ";

    var completePhrase = phraseStr1.concat( phraseStr2 + phraseStr3 + phraseStr4 );

    document.getElementById( "concatenate" ).innerHTML = completePhrase;
} 
//              ---- END_CONCATENATE_SENTENCES_METHOD ----



//              ---- SLICE()_METHOD ----
function getSliced_Extracted_Method()
{
    let sentence = "It's Better to BurnOut. Than to Fade Away...!";

    let slicedSection = sentence.slice( 14, 24 );

    document.getElementById("slice").innerHTML = slicedSection;

}
//              ---- END_SLICE()_METHOD ----




/**
 *              ---- toUpperCase()_METHOD ----
 *              ---- EXPLANATION ----
 * toUpperCase():
 * This method converts the string to uppercase using the standard Unicode case mappings.
 */          
function getUpperCase()
{
    let strText = "istanbul!";

    let strResult = strText.toUpperCase();

    document.getElementById( "uppercase" ).innerHTML = strResult;


}
//              ---- END_toUpperCase()_METHOD ----




/**
 *              ---- toLocaleUpperCase()_METHOD ----
 *              ---- EXPLANATION ----
 * toLocaleUpperCase():
 * This method converts the string to uppercase using the case mappings of the specified 
 * locale (or the default locale if, none is provided).
 *              ---- EXAMPLE ----
 * In the example above, the Turkish locale ("tr") has a special case mapping for the letter 
 * "i". When converted to uppercase, it becomes "İ" instead of "I".
 */
function getLocaleUpperCase()
{
    let text = "istanbul!";

    let result = text.toLocaleUpperCase();

    document.getElementById( "localeuppercase" ).innerHTML = result;
}
//              ---- END_toLocaleUpperCase()_METHOD ----




//              ---- STRING_SEARCH_METHOD ----
function getStringSearch()
{
    
    let text3 = "Please locate where 'locate' occurs!"

    let strResult3 = text3.search( "locate" );

    document.getElementById( "search" ).innerHTML = strResult3;
}
//              ---- END_STRING_SEARCH_METHOD ----



//              ---- CONVERT_NUMBERS_TO_STRING_METHOD ----
function stringValueOfNumber()
{
    let number = 15;

    let strValResult = number.toString( 2 );

    document.getElementById("strId" ).innerHTML = strValResult;
}
//              ---- END_CONVERT_NUMBERS_TO_STRING_METHOD ----




//              ---- PRECISION_METHOD ----
function precisionMethod()
{
    let number = 12938.3012987376112;

    document.getElementById("precision" ).innerHTML = 
    number.toPrecision( 2 ) + "<br>" +
    number.toPrecision( 6 ) + "<br>" +
    number.toPrecision( 10 );
}
//              ---- END_PRECISION_METHOD ----




//              ---- JavaScript_Numbers_toFixed()_Method ----
function toFixedMethod()
{
    let numb = 5.56789;

    let fixedResult = numb.toFixed( 2 );

    document.getElementById("fixedNumber").innerHTML = fixedResult;
}
//              ---- END_JavaScript_Numbers_toFixed()_Method ----




//              ---- JavaScript_Numbers_valueOf()_Method ----
function valueOfMethod()
{
    let numb = 5.56789;

    let valueOfResult = numb.valueOf();

    document.getElementById("value").innerHTML = valueOfResult;
}
//              ---- END_JavaScript_Numbers_toFixed()_Method ----
