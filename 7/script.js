
$(document).ready(() => {

  $('.all input').on('keyup', function () {
    const value = $(this).val();
    return $(this).val(value.replace(/\D/g, ''))
  
  })

  $('.all input').on('change', () => {
    console.log('change')
    const firstGrades = parseInt($('[name="firstGrades"]').val())
    const secondGrades = parseInt($('[name="secondGrades"]').val())
    const thirdGrades = parseInt($('[name="thirdGrades"]').val())

    if (!firstGrades || !secondGrades || !thirdGrades) return $('#result').text('0')
  
    const average = calculateAverage(firstGrades, secondGrades, thirdGrades)
  
    $('#result').text(average)
  
  })



})

function calculateAverage(firstGrades, secondGrades, thirdGrades) {
  const totalGrades = firstGrades + secondGrades + thirdGrades;
  return (totalGrades / 3).toFixed(2);
}

