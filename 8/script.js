
$(document).ready(() => {

  $('[name="initialCapital"]').maskMoney({thousands:'.', decimal:','});
  $('[name="interestRate"]').maskMoney({thousands:'', decimal:','});
  $('[name="investmentTime"]').maskMoney({thousands:'', decimal:'', precision:0});

  $('[name="interestRate"]').on('change', function () {
    const value = $(this).val()
    if(!value) return

    const valueInFloat = parseFloat(value.replace(',', '.'));
    return valueInFloat > 100 ? $(this).val('100,00') : $(this).val(value);
  
  })

  $('.all input').on('change', () => {
    const initialCapital = parseFloat($('[name="initialCapital"]').val().replace('.', '').replace(',', '.'))
    const interestRate = parseFloat($('[name="interestRate"]').val().replace(',', '.'))
    const investmentTime = parseFloat($('[name="investmentTime"]').val().replace(',', '.'))

    if (!initialCapital || !interestRate || !investmentTime) return $('#result').text('0')

    const finalValue = calculateFinalValue(initialCapital, interestRate, investmentTime)

    $('#result').text(`R$ ${finalValue.replace('.', ',')}`)
  })

})

function calculateFinalValue(initialCapital, interestRate, investmentTime) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTime);
  return finalValue.toFixed(2);
}
