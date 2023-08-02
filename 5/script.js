
$(document).ready(() => {
  $('[name="number"]').on('change', function () {
    const value = $(this).val();

    if(!value) return $('table tbody').html('');

    const html = buildHtmlMultiplicationTable(value);

    $('table tbody').html(html);
    
  })

  $('[name="number"]').on('keyup', function () {
    const value = $(this).val();
    return $(this).val(value.replace(/\D/g, ''))
  
  })


})

function buildHtmlMultiplicationTable(number) {
  console.log(`Multiplication Table of ${number}:`);
  let html = '';
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
    html += `<tr><td>${number}</td><td>x</td><td>${i}</td><td>=</td><td>${(number * i)}</td></tr>`
  }
  return html;
}


