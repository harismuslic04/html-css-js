// ZA STRINGOVE //

// toUpperCase() - metoda koja pretvara ceo string u velika slova.
// toLowerCase() - metoda koja pretvara ceo string u mala slova.

// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. function keyword
// 2. arrow function sintakse.

// Ako Arrow funkcija ima samo jedan parametar, nije neophodno okruziti ga zagradama.
// Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz, onda sama sintaksa izgleda kraca (nije neophodno koristiti viticaste zagrade i return keyword)

// Postoji samo 8 FALSY vrednosti i one su:
// 1.  false
// 2.  ""
// 3.   0
// 4.  -0
// 5.  0n
// 6.  undefined
// 7.  null
// 8.  NaN

// Stringovi su immutable vrednosti (nepromenljive).
// Sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi.

// Postoje 3 metode za ekstraktovanje (uzimanje dela stringa) stringa:
// 1. slice(start, end) end nije ukljucen u opseg.
// 2. substring(start, end) razlika u odnosu na slice je da substring ne
// prihvata negativne indekse.
// 3. substr(start, length)
// Racunanje ide od 0.

// replace() metoda vrsi zamenu nekoliko karaktera datog stringa. Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.

// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
// 2. i (insensitive)

// concat() metoda vrsi spajanje dva ili vise stringova.

// HOISTING //
// Hoisting predstavlja deklarisanje promenljivih pre same dodele vrednosti (u pozadini).
// Prilikom citanja koda se "izvlaci" deklaracija na vrhu.
// var prom1; mozemo izvrsiti naknadnu deklaraciju vec koriscene promenljive preko var keyword (a i ne mora, jer JavaScript to radi u pozadini prilikom citanja koda).
// let prom1; kasnije deklarisanje promenljive preko let keyword nije moguce.
// const prom1;  kasnije deklarisanje promenljive preko const keyword nije moguce.

// trim() metoda brise razmake sa obe strane stringa.
// Postoje 3 metode za ekstraktovanje (uzimanje) jednog karaktera nekog stringa:

// 1. charAt(index) - vraca nam karakter nekog stringa za poslatim indeksom.
// 2. charCodeAt(index) - vraca nam kod karaktera nekog stringa za poslatim indeksom.
// 3. string[index] - vrlo slicno charAt metodi (sa jednom razlikom)

// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjena.

// Search metode:
// indexOf() metoda nam vraca prvu poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu.

// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1.
// Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa.
// lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu.
// search() metoda nam daje poziciju (index) nekog stringa (argumenta metode).

// Razlike izmedju indexOf() i search() metoda:
// 1. indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenje stringa);
// 2. search() metoda dozvoljava

// match() metoda nam vraca niz.
// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.
// includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string.
// startsWith() i endsWith() metode nam vracaju boolean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode.

// number metode

// NaN - Not a Number
// NaN je JavaScript rezervisana rec koja ukazuje da broj nije korektan.
// NaN je tipa number!!!
// Infinity (ili -Infinity) je vrednost koju cemo da dobijemo kada rezultat premasi najveci broj u JavaScriptu  (bude veoma mali broj).
// toString() pretvara broj u string.
// Ova metoda pretvara bilo koji tip podatka u string.
// toExponential() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argument metode.
// toFixed() - vraca string broja, koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.
// toPrecision() metoda vraca string broja, sa onoliko cifara koliki je argument funkcije.
// valueOf() metoda vraca vrednost neke promenljive.
// Global JavaScript methods //

// Globalne metode mogu biti primenjene na bilo koji tip podatka.

// Predstavicemo 3 najcesce koriscene metode sa brojevima.

// 1. Number() - vraca broj konvertovan iz argumenta.
// 2. parseInt() - analizira argument i vraca nam ceo broj ako je moguce.
// 3. parseFloat() - analizira argument i vraca realni broj sa decimalnim zapisom ili bez ako je moguce.

// 3. Math.SQRT2 - vraca vrednost kvadratnog korena broja 2
// 4. Math.SQRT1_2 - vraca vrednost kvadratnog korena broja 1/2
// 5. Math.LN2 - Vraca vrednost logaritma osnove e broja 2
// 6. Math.LN10 - Vraca vrednost logaritma osnove e broja 10
// 7. Math.LOG2E - Vraca vrednost logaritma osnove 2 broja e
// 8. Math.LOG10E - Vraca vrednost logaritma osnove 10 broja e

// 1. Math.round() - vraca blizi ceo broj.
// 2. Math.ceil() - vraca sledeci ceo broj.
// 3. Math.floor() - vraca prethodni ceo broj.
// 4. Math.trunc() - vraca ceo broj bez decimalnog zapisa.
// Math.sign(number) - vraca -1, 0 ili 1 u zavisnosti od toga kog je znaka broj.
// Math.pow(number, power) - vraca number stepenovan na power.
// Math.sqrt(number) - vraca kvadratni koren broja number.
// Math.abs(number) - Vraca apsolutnu vrednost nekog broja.
// Math.sin(radians) - vraca vrednost sinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.
// Math.cos(radians) - vraca vrednost kosinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.
