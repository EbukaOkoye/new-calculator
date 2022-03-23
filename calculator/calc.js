class Calculator {
    constructor(displayAnswersText, displayValueText) {
        this.displayAnswersText = displayAnswersText;
        this.displayValueText = displayValueText;
        this.clear();
    }

    clear() {
        this.displayValue = '';
        this.displayAnswers = '';
        this.operation = undefined
    }

    delete() {
        this.displayValue = this.displayValue.toString().slice(0, -1);
    }

    appendNumber(number) {
        
        if(number === '.' && this.displayValue.includes('.')) {
            return;
        }
        this.displayValue += number;
    }

    chooseOperation(operation) {
        if(this.displayValue === '') {
            return;
        }

        if(this.displayAnswers !== '') {
            this.compute();
        }
        this.operation = operation;
        this.displayAnswers = this.displayValue;
        this.displayValue = '';
    }

    compute() {
        var computation;
        var prev = parseFloat(this.displayAnswers);
        var current = parseFloat(this.displayValue);

        if(isNaN(prev) || isNaN(current)) {
            return;
        }

        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;

            case '-':
                computation = prev - current;
                break;

            case '*':
                computation = prev * current;
                break;

            case '/':
                computation = prev / current;
                break;

            default: return;

        }

        this.displayValue = computation;
        this.operation = undefined;
        this.displayAnswers = '';
    }
    

    updateDisplay() {
        this.displayValueText.textContent = this.displayValue;
        if(this.operation != null) {
            this.displayAnswersText.textContent = `${this.displayAnswers} ${this.operation}`;
        } else if(this.clear) {
            this.displayAnswersText.textContent = '';
        }
        
    }
}





var numberButtons = document.querySelectorAll('.numeric');
var operationButtons = document.querySelectorAll('.assignment-operator');
var equalsButton = document.querySelector('.equals');
var displayAnswersText = document.querySelector('.display-answers');
var displayValueText = document.querySelector('.display-values');
var deleteButton = document.querySelector('.delete-operator');
var clearButton = document.querySelector('.clear-operator');




var calculator = new Calculator(displayAnswersText, displayValueText);


numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    });
});


operationButtons.forEach(function(operator) {
    operator.addEventListener('click', function() {
        calculator.chooseOperation(operator.textContent);
        calculator.updateDisplay();
    });
});


clearButton.addEventListener('click', function() {
    calculator.clear();
    calculator.updateDisplay();
});


equalsButton.addEventListener('click', function(equals) {
    calculator.compute();
    calculator.updateDisplay();
});


deleteButton.addEventListener('click', function() {
    calculator.delete();
    calculator.updateDisplay();
});



var press = document.addEventListener('keypress', function(event) {

    console.log(event);

    
    if(event.key === '1') {

        calculator.appendNumber("1"); 
        calculator.updateDisplay();
    } else if(event.key === '2') {
        
        calculator.appendNumber("2"); 
        calculator.updateDisplay();
    } else if(event.key === '3') {
        
        calculator.appendNumber("3"); 
        calculator.updateDisplay();
    } else if(event.key === '4') {
        
        calculator.appendNumber("4"); 
        calculator.updateDisplay();
    } else if(event.key === '5') {
        
        calculator.appendNumber("5"); 
        calculator.updateDisplay();
    } else if(event.key === '6') {
        
        calculator.appendNumber("6"); 
        calculator.updateDisplay();
    } else if(event.key === '7') {
        
        calculator.appendNumber("7"); 
        calculator.updateDisplay();
    } else if(event.key === '8') {
        
        calculator.appendNumber("8"); 
        calculator.updateDisplay();
    } else if(event.key === '9') {
        
        calculator.appendNumber("9") 
        calculator.updateDisplay();
    } else if(event.key === '0') {
        
        calculator.appendNumber("0"); 
        calculator.updateDisplay();
    } else if(event.key === '.') {
        
        calculator.appendNumber("."); 
        calculator.updateDisplay();
    }

    
    else if(event.key === '+') {
        
        calculator.chooseOperation("+");
        calculator.updateDisplay();
    }
    else if(event.key === '-') {
        
        calculator.chooseOperation("-");
        calculator.updateDisplay();
    }
    else if(event.key === '*') {
        
        calculator.chooseOperation("*");
        calculator.updateDisplay();
    }
    else if(event.key === '/') {
        
        calculator.chooseOperation("/");
        calculator.updateDisplay();
    }


    else if(event.key === '=') {
        
        calculator.compute(); 
        calculator.updateDisplay();
    }

    else if(event.key === 'Enter') {
        calculator.compute("Enter"); 
        calculator.updateDisplay();
    }

    

});




























































































































































































































































































































































































































































































































































































































































































































































/*
var display = document.getElementById('display');
var answer = document.getElementById('answers');

display.textContent = '';

var numbers = Array.from(document.getElementsByClassName('button'));


numbers.map(function(number) {
    number.addEventListener('click', function(event) {

        
       switch (event.target.textContent) {

        case 'C':
            if(display.textContent) {
                display.textContent = display.textContent.slice(0, -1);
            }
            break;

        case 'CE':
            display.textContent = '';
            answer.textContent = '';
            break;

        case '=':
            try{
                answer.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error!!!';
            }
            break;
            

        default:
            display.textContent += event.target.textContent;
       }

       if(display.textContent.length >= 50 && event.target.textContent) {
            display.textContent = '';
            display.textContent = 'Max Limit reached     ';
            
            if(display.textContent === 'Max Limit reached' && display.textContent.includes(event.target.textContent)) {
                display.textContent = '';
            }
            
            
        } 
    });


});
*/


