// Escribe una función que reciba un número y lo devuelva sumando 2.

const numbers = number => {
  return number + 2;
};

console.log(numbers(4));

// Escribe una función que reciba un número y devuelva el doble de ese número.

const doubleNumber = number => {
  return number * 2;
};

console.log(doubleNumber(2));

// Escribe una función que reciba una palabra y devuelva su longitud.

const wordLength = word => {
  console.log(word.length);
};

wordLength('hola');

// Escribe una función que reciba una palabra y la imprima en mayúsculas.

const upperCaseWord = word => {
  console.log(word.toUpperCase());
};

upperCaseWord('adiós');

// Escribe una función que reciba dos palabras e imprima si son iguales o no

const sameWords = (word1, word2) => {
  if (word1 === word2) {
    console.log('Las palabras son iguales');
  } else {
    console.log('Las palabras no son iguales');
  }
};

sameWords('cielo', 'cielo');

// Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiplicationNumbers = (number1, number2) => {
  return number1 * number2;
};

console.log(multiplicationNumbers(2, 3));

// Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = number => {
  console.log(
    Number(String(number).charAt(0)) +
      Number(String(number).charAt(1)) +
      Number(String(number).charAt(2))
  );
};

sumDigits(123);

// Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    console.log(word1 + ' es la palabra más larga');
  } else {
    console.log(word2 + ' es la palabra más larga');
  }
};

longestWord('Estudio', 'Adiós');

// Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = numbers => {
  return numbers[0];
};

console.log(getfirstElement([1, 2, 3]));

// Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (numbers, position) => {
  return numbers[position];
};

console.log(getArrayElement([1, 2, 3], 2));

// Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (word1, word2) => {
  if (word1.length < word2.length) {
    console.log(word1 + ' es la palabra más corta');
  } else {
    console.log(word2 + ' es la palabra más corta');
  }
};

shortestWord('Bienvenida', 'Despedida');

// Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (number1, number2, number3) => {
  if (number1 % 2 === 0) {
    console.log('El ' + number1 + ' es par');
  }
  if (number2 % 2 === 0) {
    console.log('El ' + number2 + ' es par');
  }
  if (number3 % 2 === 0) {
    console.log('El ' + number3 + ' es par');
  }
};

onlyEven(4, 5, 6);

// Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const powersNumber = number => {
  console.log(Math.pow(number, 2), Math.pow(number, 3));
};

powersNumber(2);

// Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const wordFiveLetters = word => {
  return (
    word.charAt(0) +
    ',' +
    word.charAt(1) +
    ',' +
    word.charAt(2) +
    ',' +
    word.charAt(3)
  );
};

console.log(wordFiveLetters('hola'));

// Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicateNumbers = numbers => {
  numbers.push(numbers[0], numbers[1], numbers[2]);
  return numbers;
};

console.log(duplicateNumbers([1, 2, 3]));

// Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el segundo valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const deleteNumbers = numbers => {
  numbers.shift(numbers[0]);
  numbers.pop(numbers[4]);
  return numbers;
};

console.log(deleteNumbers([1, 2, 3, 4, 5]));

// Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const lettersArray = letters => {
  console.log(letters[0] + letters[1] + letters[2] + letters[3] + letters[4]);
};

lettersArray(['a', 'd', 'i', 'ó', 's']);

// Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = words => {
  if (words[0].length > words[1].length && words[0].length > words[2].length) {
    console.log('La palabra más larga es ' + words[0]);
  } else if (
    words[1].length > words[0].length &&
    words[1].length > words[2].length
  ) {
    console.log('La palabra más larga es ' + words[1]);
  } else if (
    words[2].length > words[0].length &&
    words[2].length > words[1].length
  ) {
    console.log('La palabra más larga es ' + words[2]);
  }
};

longestWordArray(['estudio', 'casa', 'apartamento']);

// Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const alternateNumbersWords = (numbers, letters) => {
  console.log(
    numbers[0] +
      ',' +
      letters[0] +
      ',' +
      numbers[1] +
      ',' +
      letters[1] +
      ',' +
      numbers[2] +
      ',' +
      letters[2]
  );
};

alternateNumbersWords([1, 2, 3], ['a', 'b', 'c']);

// Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const oddNumbers = numbers => {
  if (numbers.length % 2 === 0) {
    console.log('El array no es válido');
  } else {
    console.log(Math.floor(numbers.length / 2 + 1));
  }
};

oddNumbers([1, 2, 3, 4, 5]);

// Crea una función que reciba una palabra e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const vowelWords = word => {
  console.log(word.charAt(1) + word.charAt(3));
};

vowelWords('hola');
