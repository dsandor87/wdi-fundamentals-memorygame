// Array to store all cards
var cards = [
{
	rank:'queen',
	suit:'hearts',
	cardImage:'images/queen-of-hearts.png'

},
{
	rank:'queen',
	suit:'diamonds',
	cardImage:'images/queen-of-diamonds.png'

},
{
	rank:'king',
	suit:'hearts',
	cardImage:'images/king-of-hearts.png'

},
{
	rank:'king',
	suit:'hearts',
	cardImage:'images/king-of-hearts.png'

}
];

// Array to store the cards in play
var cardsInPlay = [];

// Check for a match
var checkForMatch = function () {
  // Check the two cards match - message to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
};

//  Function : User flipping a card
var flipCard = function (cardId) {

  // Console message: which card was flipped .
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);

  // Add card to array of cardsInPlay
  cardsInPlay.push(cards[cardId].rank);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // Call the checkForMatch function
    checkForMatch();
  }
};


// For now, we are manually calling the flipCard function
// to represent a user's play
// Call the flipCard function, passing in an index as the argument
flipCard(2);
// Call the flipCard function, passing in an index as the argument
flipCard(2);