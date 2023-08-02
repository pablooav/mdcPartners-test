
$(document).ready(() => {
  $('[name="number"]').on('keyup', function () {
    const value = $(this).val();
    if (isNaN(inputNumber) || inputNumber < 0) return '';
    return $(this).val(value.replace(/\D/g, ''))
  
  })

  $('[name="number"]').on('change', function () {
    const inputNumber = parseInt($(this).val())
    const result = factorial(inputNumber)
    $('#result').text(result)
  
  })

})


function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}