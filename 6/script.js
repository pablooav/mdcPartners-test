
$(document).ready(() => {
  $('[name="word"]').on('keyup', function () {
    const words = $(this).val();

    if(!words) return $('#result').text('');

    const vowels = countVowels(words)
    
    if (vowels) $('#result').text(`"${words}" have ${vowels} vowels!`);
    else $('#result').text(`"${words}" not have any vowels!`);
  
  })


})

function countVowels(sentence) {
  sentence = sentence.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsInSentence = sentence.split('').filter(word => vowels.includes(word));

  return vowelsInSentence.length;
}


