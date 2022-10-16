
//references the specific elements in the html via classes
//entire calc
const calculator = document.querySelector('.calculator')
//calc display
const display = calculator.querySelector('.calculator__display')
//calc keys
const keys = calculator.querySelector('.calculator__keys')


//   π

    const calculate = (n1, operator, n2) => {
        let result 

//various operators or other functions more can be added in a similair method 
        if (operator === 'add')
        {
          return  result = parseFloat(n1) + parseFloat(n2)
        } 
         if (operator === 'subtract')
         {
          return  result = parseFloat(n1) - parseFloat(n2)
        } 
        if (operator === 'multiply')
        {
          return  result = parseFloat(n1) * parseFloat(n2)
        } 
         if (operator === 'divide')
        {
          return  result = parseFloat(n1) / parseFloat(n2)
        }
        //non basic addition following framework from free code.
        if (operator === 'mod')
        {
          return  result = parseFloat(n1) % parseFloat(n2)
        }
    }
  

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const previousKeyType = calculator.dataset.previousKeyType      
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))

           

            if (action === 'decimal') {
                display.textContent = displayedNum + '.'
            }
 if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'mod' ||
                action === 'divide' 
                //to add another function  follow pattern above last action  cannot have ||

            ) {
                key.classList.add('is-depressed')
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            }

            if (action === 'clear') {
                console.log('clear key!')
            }

            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum

                display.textContent = calculate(firstValue, operator, secondValue)
            }
        }
    })
