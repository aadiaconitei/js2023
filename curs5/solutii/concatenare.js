// Exemplu privind utilizarea operatorului ... (spread/rest parameters)
// plus suportul pentru caractere Unicode
const DELIM = '\u2605\u2A3C'; // caractere Unicode

function concatenează (...cuvinte) {
  return cuvinte.join (DELIM);
}

console.log (concatenează ('ES6', 'e', 'super!')); // rezultat: "ES6★⨼e★⨼super!"