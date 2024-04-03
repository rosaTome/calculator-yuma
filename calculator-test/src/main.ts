import './style.scss';
import './style.css';

const valueEl: HTMLDivElement | null = document.querySelector('.value');

const acEl: HTMLButtonElement | null = document.querySelector('.ac');
const pmEl: HTMLButtonElement | null = document.querySelector('.plusminus');
const percentEl: HTMLButtonElement | null = document.querySelector('.percentage');

const additionEl: HTMLButtonElement | null = document.querySelector('.addition');
const subtractionEl: HTMLButtonElement | null = document.querySelector('.subtraction');
const multiplicationEl: HTMLButtonElement | null = document.querySelector('.multiplication');
const divisionEl: HTMLButtonElement | null = document.querySelector('.division');
const equalEl: HTMLButtonElement | null = document.querySelector('.equal');

const decimalEl: HTMLButtonElement | null = document.querySelector('.decimal');
const number0El: HTMLButtonElement | null = document.querySelector('.number-0');
const number1El: HTMLButtonElement | null = document.querySelector('.number-1');
const number2El: HTMLButtonElement | null = document.querySelector('.number-2');
const number3El: HTMLButtonElement | null = document.querySelector('.number-3');
const number4El: HTMLButtonElement | null = document.querySelector('.number-4');
const number5El: HTMLButtonElement | null = document.querySelector('.number-5');
const number6El: HTMLButtonElement | null = document.querySelector('.number-6');
const number7El: HTMLButtonElement | null = document.querySelector('.number-7');
const number8El: HTMLButtonElement | null = document.querySelector('.number-8');
const number9El: HTMLButtonElement | null = document.querySelector('.number-9');
const numberElArray: HTMLButtonElement[] = [
    number0El!, number1El!, number2El!, number3El!, number4El!, number5El!, number6El!, number7El!, number8El!, number9El!, 
]

//  if 
if(!valueEl || !acEl || !pmEl || !percentEl || !additionEl || !subtractionEl || !multiplicationEl || !divisionEl || !equalEl || !decimalEl || !number0El || !number1El || !number2El || !number3El || !number4El || !number5El || !number6El || !number7El || !number8El || !number9El ) {
    throw new Error("issue with selector")
}

// variables 
let valueStrInMemory: string | null = null;
let operatorInMemory: string | null = null;

// Functions
const getValueAsStr = (): string => valueEl?.textContent?.split(',').join('') || '';

const getValueAsNum = (): number => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr: string): void => {
  if (valueStr[valueStr.length - 1] === '.') {
    valueEl.textContent += '.';
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr: string): void => {
  const currentValueStr: string = getValueAsStr();
  if (currentValueStr === '0' || valueStrInMemory !== null) {
      setStrAsValue(numStr);
  } else {
      setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = (): string => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory!);
  let newValueNum: number = 0;
  if (operatorInMemory === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operator: string): void => {
  const currentValueStr = getValueAsStr();
    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
    } else {
        setStrAsValue('0');
        valueStrInMemory = null; 
    }
    operatorInMemory = operator;
};

// Add Event Listeners to functions
acEl.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === '-0') {
    setStrAsValue('0');
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});

// add event listeners to operators
additionEl.addEventListener('click', () => {
  handleOperatorClick('addition');
});
subtractionEl.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});
multiplicationEl.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});
divisionEl.addEventListener('click', () => {
  handleOperatorClick('division');
});
equalEl.addEventListener('click', () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});

// Add Event Listeners to numbers and decimal
for (let i = 0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});