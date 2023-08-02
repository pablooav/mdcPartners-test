
$(document).ready(() => {
  $('[name="firstNumber"], [name="secondNumber"], [name="operation"]').on('change', () => {
    console.log('change')
    const firstValue = parseInt($('[name="firstNumber"]').val())
    const secondValue = parseInt($('[name="secondNumber"]').val())
    const operation = $('[name="operation"]').val()
  
    const result = calculate(firstValue, secondValue, operation)
  
    $('#result').text(result)
  
  })

  $('[name="firstNumber"], [name="secondNumber"]').on('keyup', function () {
    const value = $(this).val();
    return $(this).val(value.replace(/\D/g, ''))
  
  })
})



function calculate(firstValue, secondValue, operation) {

  switch (operation) {
    case '+':
      return firstValue + secondValue
    case '-':
      return firstValue - secondValue
    case '*':
      return firstValue * secondValue
    case '/':
      return firstValue / secondValue
    default:
      return 0;
  }
}