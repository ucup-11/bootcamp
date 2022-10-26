const nama = (str) => `${str}!`

  const doubleChars = (str) => str.split('').map(c => `${c}${c}`).join('');

//   doubleChars('Adrian');
//   doubleChars('ssssnake');

const repeat = (input, num, callback) => {
    let result = input;
    for (i = 0; i < num; i++) {
      result = callback(result);
      console.log(result);
    }
    return result;
  }

  repeat('infinite power', 3, nama);
  repeat('triple', 2, doubleChars);
  repeat('trogdor', 3, t => `°${t}°`);