
$(document).ready(() => {
  let count = 0;
  let number = 2;

  while (count < 10) {
    if (isPrime(number)) {
      console.log(number);
      $('.all').append(`<span>${number}</span>`);
      count++;
    }
    number++;
  }
})



function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}