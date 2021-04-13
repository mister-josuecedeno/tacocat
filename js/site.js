function reverseString() {
  // Get the user's word
  let userWord = document.getElementById('tacoCat').value;

  const regex = /[^a-z0-9]/gi;
  let cleanedWord = userWord.replace(regex, '').toLowerCase();

  let reverseWord = '';

  // Do something here with it
  let start = cleanedWord.length - 1;

  // For Loop
  for (let i = start; i >= 0; i--) {
    reverseWord += cleanedWord[i];
  }

  // Return to screen
  let output = document.getElementById('result');
  output.innerText = reverseWord;

  // Is this a palindrome
  let palOutput = document.getElementById('isPalindrome');

  let isPalindrome = cleanedWord === reverseWord;

  if (isPalindrome && cleanedWord.length > 1) {
    palOutput.innerText = "It's a palindrome!!!";
  } else {
    palOutput.innerText = 'Your string is NOT a palindrome.';
  }
}
