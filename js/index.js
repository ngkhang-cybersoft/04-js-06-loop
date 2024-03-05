// Bài tập 1: Tìm số nguyên dương n nhỏ nhất
function getMinNumber() {
  let max = 10000;
  let min = 0;

  for (let step = 1; step <= max; step++) {
    min = (min > step) ? min : step;
    max = max - step;
  }
  ++min;
  let content = `Số nguyên dương nhỏ nhất: ${min}`;
  let status = true;
  printOutput('#exercise01 #result', content, status);
}

// BT 02 - Tính tổng S(n) = x + x^2 + ... + x^n
function getSum() {
  let numberX = document.querySelector('#exercise02 #numberX').value * 1;
  let numberN = document.querySelector('#exercise02 #numberN').value * 1;
  let sum = 0;

  // Cách 1: Sử dụng công thức toán học
  // S(n) = x * ((1 - x^n) / (1-x))

  // Cách 2: Dùng vòng lặp.
  for (let step = 1; step <= numberN; step++) {
    const temp = numberX ** step;
    sum += temp;
  }

  let content = `Tổng: ${sum}`;
  let status = true;
  printOutput('#exercise02 #result', content, status);
}

// BT 03 - Tính giai thừa của số n
function calFactorial(number) {
  // Cách 1: Sử dụng đệ quy
  return (number === 1) ? 1 : number * calFactorial(number - 1);
  /*
    // Cách 2: Sử dụng loop
    let output = 1;
    for (let step = 1; step <= number; step++) {
      output *= step;
    }
    return output;
  */
}

function printFactorial() {
  let number = document.querySelector('#exercise03 #numberN').value * 1;

  let content = `👉 Số ${number}  có giai thừa là ${calFactorial(number * 1)}`;;

  let status = true;
  printOutput('#exercise03 #result', content, status);
}

// BT 04 - In 10 thẻ div
function printDivTag() {
  const OBJ_DIV = {
    0: {
      property: 'background',
      value: 'red',
    },
    1: {
      property: 'background',
      value: 'blue',
    }
  };

  let content = '';
  for (let step = 0; step < 10; step++) {
    let objNewDiv = OBJ_DIV[(step + 1) % 2];
    content += `<div class="mb-2 text-white" style="${objNewDiv.property}: ${objNewDiv.value};">${step + 1}</div>\n`
  }
  let status = true;
  printOutput('#exercise04 #result', content, status);
}

// BT 05 - In dãy số nguyên tố từ 1 đến `n`
function isPrimeNumber(number) {
  if (number <= 1) return false;

  for (let step = 2; step < number; step++) {
    if (number % step === 0) return false;
  }
  return true;
}
function printListPrimeNumber() {
  let number = document.querySelector('#exercise05 #numberN').value * 1;

  const listPrime = [];
  for (let step = 2; step <= number; step++) {
    if (isPrimeNumber(step)) listPrime.push(step);
  }
  let content = listPrime.join(',');
  let status = true;
  printOutput('#exercise05 #result', content, status);
}
