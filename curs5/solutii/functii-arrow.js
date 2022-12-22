

/* 1 */
// funcție anonimă cu un singur argument de intrare
// se întoarce valoarea unei expresii JS (aici, un tablou)
console.log ( [2, 3, 5].map (numar => numar * 7) ); // [14, 21, 35]

/* 2 */
// definirea unei funcții recursive în ES6; aici, factorialul
let factorial = (numar) => {
  return numar === 0 ? 1 : numar * factorial (numar - 1);
};
console.log ( factorial (5) ); // 120

/* 3 */
// prelucrarea facilă a tablourilor: filtrare, asociere de valori,...
let numere = [1, 7, 50, 74, 9, 85, 51, 12, 7, 15];

// asocieri între valori și funcții 
// aici, calculul pătratului fiecărei valori a elementelor din tablou
let patrate = numere.map (val => Math.pow(val, 2));
console.log (patrate);

// reducerea unui tip de date structurat la o valoare scalară
// aici, suma tuturor valorilor: 311 
let suma = numere.reduce ((a, b) => a + b);
console.log (suma);

// filtrarea valorilor, obținând un sub-tablou
// aici, doar numerele impare: [1, 7, 9, 85, 51, 7, 15]
let impare = numere.filter (val => val % 2 === 1); 
console.log (impare);

/* 4 */
const MAX = 99;

/* întoarce true dacă predicatul func are ca rezultat true 
   pentru orice element al colecției de date (cuantificator universal) */
const toate = (tablou, func = Boolean) => tablou.every (func);

// ce rezultă executând liniile de cod următoare?

// toate numerele reprezintă vârste de adulți
console.log (toate (numere, număr => număr >= 18 && număr < 65) );

// toate valorile radicalului numerelor sunt mai mici decât o valoare dată 
console.log (toate (numere, număr => Math.sqrt(număr) <= MAX) );

/* 5 */
const [ MIN_ADULT, MAX_ADULT ] = [ 18, 64 ];

/* întoarce true dacă predicatul func are ca rezultat true 
   pentru măcar un element al colecției de date */
const există = (tablou, func = Boolean) => tablou.some (func);

// ce rezultă executând linia următoare?
console.log (există (numere, număr => număr >= MIN_ADULT 
                             && număr <= MAX_ADULT));

/* 6 */
/* trunchierea unui șir de caractere */
const MIN = 3;

const truncȘir = (șir, număr) =>
  // dacă lungimea șirului e mai mare de MIN caractere
  șir.length > număr ? 
 // înlocuim caracterele în surplus cu șirul '...'
  șir.slice (0, număr > MIN ? număr - MIN : număr) + '...' : șir;

console.log ( truncȘir ('Tuxy Pinguinnesscool', 7));

/* 7 */
// convertirea unui număr într-un tablou de cifre
const digitizare = număr => [...`${număr}`].map (i => parseInt(i));

console.log ( digitizare (Math.LOG10E) ); // de ce apare valoarea NaN?
