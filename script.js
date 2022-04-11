const form = document.getElementById('loan-form')


form.addEventListener('submit', calculateResult)

function calculateResult(e){
  e.preventDefault()
  const amount = document.querySelector('#amount')
const interest = document.querySelector('#interest')
const years = document.querySelector('#years')
const monthlyPayment = document.querySelector('#monthly')
const totalPayment = document.querySelector('#total')
const totalInterest = document.querySelector('#totalInterest')
const error = document.querySelector('.alert')
const card = document.querySelector('.card')
// const monthlyInterest = document.querySelector('#monthlyInterest')
const principle = parseFloat(amount.value)
const calculatedInterest = parseFloat(interest.value)/100/12
const calculatedPayments = parseFloat(years.value) * 12;

const val = Math.pow(1+calculatedInterest, calculatedPayments)
const monthly = (principle*val*calculatedInterest)/(val - 1)

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2)

    card.classList.add('show')
} else{
    // console.log('please')
    error.classList.add('d-block')
    error.innerHTML = "Please insert valid numbers"
}
//   console.log('calculating...')

//Clear error
setTimeout(function(){
    error.classList.remove('d-block')
}, 3000)
}