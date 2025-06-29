function parseAllEmotes() {
    // Find all elements with class "parse" and parse their emotes
    const toParse = document.getElementsByClassName("parse");
    Array.from(toParse).forEach(element => {
        parseJacaEmotes(element.innerHTML)
        .then(result => element.innerHTML = result);
    });
}
parseAllEmotes();