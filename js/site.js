function reverseString() {
  // Get the user's word
  let userWord = document.getElementById('tacoCat').value;

  // Replace anything that is not a character or digit
  const regex = /[^a-z0-9]/gi;
  let cleanedWord = userWord.replace(regex, '').toLowerCase();

  let reverseWord = '';
  let start = cleanedWord.length - 1;

  for (let i = start; i >= 0; i--) {
    reverseWord += cleanedWord[i];
  }

  // Return results
  let output = document.getElementById('result');
  let msg = `${userWord} reversed (characters only) is: `;
  output.innerText = msg + reverseWord;

  // Is this a palindrome
  let palOutput = document.getElementById('isPalindrome');
  let isPalindrome = cleanedWord === reverseWord;

  const winner =
    '<img class="img-fluid" src="/img/TACOCAT_WINNER.gif" alt="winner"></img>';

  // Must have 2 or more letters
  if (isPalindrome && cleanedWord.length > 1) {
    palOutput.innerHTML = `<h3>${userWord} is a palindrome.</h3>${winner}`;
  } else {
    palOutput.innerHTML = `<h3>${userWord} is NOT a palindrome.</h3>`;
  }
}
