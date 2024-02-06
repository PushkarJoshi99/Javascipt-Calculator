const displayInput = document.querySelector('.displayInput')
const AC = document.querySelector('.AC')
const DE = document.querySelector('.DE')
const equalButton = document.querySelector('.equalButton')

equalButton.addEventListener('click', () => {
  displayInput.value = eval(displayInput.value);
})

AC.addEventListener('click', () => {
  displayInput.value = ''
})

DE.addEventListener('click', () => {
  displayInput.value = displayInput.value.toString().slice(0, -1)
})

const numberButtons = document.querySelectorAll('.numberButton')
for (let i of numberButtons) {
  i.addEventListener('click', onClickEvent)
}

const signButtons = document.querySelectorAll('.signButton')
for (let i of signButtons) {
	i.addEventListener('click', onClickEvent);
}

function onClickEvent () {
	displayInput.value += `${this.value}`
}