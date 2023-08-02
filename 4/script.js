
$(document).ready(() => {
  $('[name="word"]').on('keyup', function () {
    const value = $(this).val();

    if(!value) return $('#result').removeClass('valid invalid').text('');
    
    if (isPalindrome(value)) $('#result').removeClass('invalid').addClass('valid').text(`${value} is a palindrome!`);
    else $('#result').removeClass('valid').addClass('invalid').text(`${value} is not a palindrome!`);
  
  })


})


function isPalindrome(word) {
  const lowercasedWord = word.toLowerCase();
  const cleanWord = lowercasedWord.replace(/[^a-z0-9]/g, '');
  return cleanWord === cleanWord.split('').reverse().join('');
}